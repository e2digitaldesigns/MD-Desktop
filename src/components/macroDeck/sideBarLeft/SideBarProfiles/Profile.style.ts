import styled, { keyframes } from "styled-components";

export const ProfileWrapper = styled.div`
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  overflow: hidden;
  position: relative;
  display: flex;
  height: 100%;
  /* min-height: 24.375rem; */
`;

// 24.375rem
/* height: 18.75rem; */

const ProfileToggleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

interface IntWrapper {
  profileMode: string;
}

export const ProfileListWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  animation-name: ${props =>
    props.profileMode === "view" ? slideInAnimation : slideOutAnimation};
`;

export const ProfileEditWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  left: -13.75rem;
  animation-name: ${props =>
    props.profileMode === "edit" ? slideInAnimation : slideOutAnimation};
`;

export const ProfileNewWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  left: -13.75rem;
  animation-name: ${props =>
    props.profileMode === "new" ? slideInAnimation : slideOutAnimation};
`;

export const ProfileNewSBWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  left: -13.75rem;
  animation-name: ${props =>
    props.profileMode === "newSoundBoard"
      ? slideInAnimation
      : slideOutAnimation};
`;

const slideInAnimation = keyframes`
   0% { left: 13.75rem }
   100% { left: 0px }`;

const slideOutAnimation = keyframes`
  0% { left: 0 }
  100% { left: -13.75rem }`;
