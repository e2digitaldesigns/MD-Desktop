import React from "react";
import {
  Folder2,
  MusicNote,
  Twitch,
  XCircleFill,
  XDiamond,
  Icon
} from "react-bootstrap-icons";
import * as Styled from "./ProfileNew.styles";
import { useProfile } from "../../../../../hooks";

import { profileDefaultsOptions, profileModes } from "../../../../../types";

interface IntProfileNew {
  setProfileMode: (type: profileModes) => void;
}

interface IntProfileTypes {
  type: profileDefaultsOptions;
  name: string;
  icon: Icon;
}
const ProfileTypes: IntProfileTypes[] = [
  {
    type: profileDefaultsOptions.ProfileEmpty,
    name: "Empty Profile",
    icon: Folder2
  },
  {
    type: profileDefaultsOptions.ProfileStream,
    name: "Streaming Profile",
    icon: Twitch
  },
  {
    type: profileDefaultsOptions.ProfileMD,
    name: "MD Profile",
    icon: XDiamond
  },
  {
    type: profileDefaultsOptions.ProfileMediaControls,
    name: "Media Controls",
    icon: MusicNote
  },
  {
    type: profileDefaultsOptions.ProfileSoundBoard,
    name: "MD Sound Board",
    icon: MusicNote
  }
];

const ProfileNew: React.FC<IntProfileNew> = ({ setProfileMode }) => {
  const { createProfile } = useProfile();

  const gotoView = () => {
    setProfileMode(profileModes.View);
  };

  const handleCreateProfile = (type: profileDefaultsOptions): void => {
    if (type === profileDefaultsOptions.ProfileSoundBoard) {
      setProfileMode(profileModes.NewSoundBoard);
    } else {
      createProfile(type);
      gotoView();
    }
  };

  return (
    <Styled.ProfileNewWrapper>
      {ProfileTypes.map(({ type, name, icon: Icons }: IntProfileTypes) => (
        <Styled.ProfileNewButtons
          key={name}
          onClick={() => handleCreateProfile(type)}
        >
          <div>
            <Icons />
          </div>
          <div>{name}</div>
        </Styled.ProfileNewButtons>
      ))}

      <Styled.ProfileNewButtons onClick={gotoView}>
        <div>
          <XCircleFill />
        </div>
        <div>Close</div>
      </Styled.ProfileNewButtons>
    </Styled.ProfileNewWrapper>
  );
};

export default ProfileNew;
