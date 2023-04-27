import React from "react";
import _map from "lodash/map";
import { IntActions } from "../../../../../../types/globalContextType";

import * as Styled from "../actionForm.styles";

interface IMediaControlActionParser {
  state: IntActions;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MediaControlActionParser: React.FC<IMediaControlActionParser> = ({
  state,
  onChange
}) => {
  interface IntDataSet {
    display: string;
    subAction: string;
  }
  const dataSet: IntDataSet[] = [
    { display: "Next Song", subAction: "mcAudioNext" },
    { display: "Pause / Resume", subAction: "mcAudioPause" },
    { display: "Stop", subAction: "mcAudioStop" },
    { display: "Play", subAction: "mcAudioPlay" },
    { display: "Previous Song", subAction: "mcAudioPrev" },
    { display: "Mute", subAction: "mcAudioMute" },
    { display: "Volume Down", subAction: "mcAudioVolDown" },
    { display: "Volume Up", subAction: "mcAudioVolUp" }
  ];

  return (
    <>
      <div />

      <Styled.SelectField
        name="subAction"
        value={state?.subAction}
        onChange={e => onChange(e)}
      >
        {_map(dataSet, (m: IntDataSet) => (
          <option key={m.subAction} value={m.subAction}>
            {m.display}
          </option>
        ))}
      </Styled.SelectField>
    </>
  );
};

export default MediaControlActionParser;
