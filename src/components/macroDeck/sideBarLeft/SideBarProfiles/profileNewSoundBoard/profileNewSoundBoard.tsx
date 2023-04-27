import React from "react";
import * as Styled from "./profileNewSoundBoard.styles";
import * as StyledNewButton from "../ProfileNew/ProfileNew.styles";

import { IpcRendererTypes, profileModes } from "../../../../../types";
import { useElectron, useProfile } from "../../../../../hooks";

import { MusicNote, XCircleFill, ArrowLeftCircle } from "react-bootstrap-icons";
import SETTINGS from "../../../../../settings/system.json";

import _map from "lodash/map";

interface IntSounds {
  thePath: string;
  profileName: string;
  filesToSend: string[];
  fileNames: string[];
}

interface IntProfileNewSoundBoard {
  setProfileMode: (type: profileModes) => void;
}

const ProfileNewSoundBoard: React.FC<IntProfileNewSoundBoard> = ({
  setProfileMode
}) => {
  const defaultButtonPads = 12;
  const { ipcRender, ipcRenderParser } = useElectron();
  const { createSoundBoardProfile } = useProfile();
  const [buttonPads, setButtonPads] = React.useState<number>(defaultButtonPads);
  const [tempSoundBoard, setTempSoundBoard] = React.useState<IntSounds | null>(
    null
  );

  React.useEffect(() => {
    const ipcRenderer = ipcRenderParser();
    ipcRenderer &&
      ipcRenderer.on(
        IpcRendererTypes.soundBoardProfileReturn,
        (e: object, data: IntSounds) => {
          setTempSoundBoard(data);
        }
      );

    return () => {
      ipcRenderer &&
        ipcRenderer.removeListener(
          IpcRendererTypes.soundBoardProfileReturn,
          setTempSoundBoard
        );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTempSoundBoard]);

  const handleFindPath = (): void => {
    ipcRender(IpcRendererTypes.soundBoardProfile, "");
  };

  const handleCreateBoard = (): void => {
    if (!tempSoundBoard) return;
    createSoundBoardProfile({ ...tempSoundBoard, buttonPads });
    handleLeave(profileModes.View);
  };

  const handleLeave = (type: profileModes): void => {
    setButtonPads(defaultButtonPads);
    setTempSoundBoard(null);
    setProfileMode(type);
  };

  return (
    <Styled.ProfileNewSBWrapper>
      <StyledNewButton.ProfileNewButtons>
        <div>
          <MusicNote />
        </div>
        <div>MD Sound Board</div>
      </StyledNewButton.ProfileNewButtons>

      <Styled.ProfileNewSBForm>
        <Styled.FileInputWrapper>
          <Styled.FileInputButton onClick={handleFindPath}>
            Folder
          </Styled.FileInputButton>
          <Styled.FileInputText
            type="text"
            value={tempSoundBoard?.thePath || ""}
            readOnly
          />
        </Styled.FileInputWrapper>

        <Styled.FileFieldWrapper>
          <Styled.SelectFieldSB
            value={buttonPads}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setButtonPads(Number(e.target.value))
            }
          >
            {_map(SETTINGS.BUTTON_PAD_AMOUNTS, (number: number) => (
              <option key={number} value={number}>
                {number} - Button Pads
              </option>
            ))}
          </Styled.SelectFieldSB>

          <Styled.SubmitSB
            onClick={handleCreateBoard}
            disabled={!tempSoundBoard}
          >
            submit
          </Styled.SubmitSB>
        </Styled.FileFieldWrapper>
      </Styled.ProfileNewSBForm>

      <StyledNewButton.ProfileNewButtons
        onClick={() => handleLeave(profileModes.New)}
      >
        <div>
          <ArrowLeftCircle />
        </div>
        <div>Back</div>
      </StyledNewButton.ProfileNewButtons>

      <StyledNewButton.ProfileNewButtons
        onClick={() => handleLeave(profileModes.View)}
      >
        <div>
          <XCircleFill />
        </div>
        <div>Close</div>
      </StyledNewButton.ProfileNewButtons>
    </Styled.ProfileNewSBWrapper>
  );
};

export default ProfileNewSoundBoard;
