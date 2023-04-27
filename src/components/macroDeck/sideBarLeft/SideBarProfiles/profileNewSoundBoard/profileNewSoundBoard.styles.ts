import styled from "styled-components";
import {
  ButtonDefaults,
  SelectField,
  SubmitButton,
  TextField
} from "../../../../../styles/form.styles";

export const ProfileNewSBWrapper = styled.div`
  height: 24.375rem;
  width: 13.75rem;
  border-bottom: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileEdit.wrapper.border.normal};
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.wrapper.bg.normal};
  position: relative;
`;

export const ProfileNewSBForm = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;

  border-bottom: 0.0625rem solid
    ${props => props.theme.modules.sidebarLeft.profileNew.colors.border};

  padding: 0.25rem 0;
`;

export const FileInputWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 0.25rem;
`;

export const FileInputButton = styled(ButtonDefaults)`
  margin: 0;
  width: 100%;
  height: 2rem;
`;

export const FileInputText = styled(TextField)`
  margin: 0;
  width: 100%;
  font-size: 0.75rem;
`;

export const FileFieldWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 0.25rem;
`;

export const SelectFieldSB = styled(SelectField)`
  margin: 0;
  width: 100%;
  font-size: 0.75rem;
`;

export const SubmitSB = styled(SubmitButton)`
  margin: 0;
  width: 100%;
`;
