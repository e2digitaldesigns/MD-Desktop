import React from "react";
import { PlusCircle } from "react-bootstrap-icons";
import * as Styled from "./profileButton.style";

import { profileModes } from "../../../../../../types";

interface IntProfileButton {
  setProfileMode: (tyep: profileModes) => void;
}

const ProfileButton: React.FC<IntProfileButton> = ({ setProfileMode }) => {
  return (
    <>
      <Styled.NewProfileButton onClick={() => setProfileMode(profileModes.New)}>
        <div>
          <PlusCircle />
        </div>
        <div>New Profile</div>
      </Styled.NewProfileButton>
    </>
  );
};

export default ProfileButton;
