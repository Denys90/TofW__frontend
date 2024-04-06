import {
  ButtonCancel,
  ButtonDelete,
  ContainerPopUp,
  TextContainer,
  ButtonContainer,
} from './DeleteEntry.styled';
export const DeleteEntry = () => {
  return (
    <>
      <ContainerPopUp>
        <TextContainer>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
        </TextContainer>
        <ButtonContainer>
          <ButtonCancel>Cancel</ButtonCancel>
          <ButtonDelete>Delete</ButtonDelete>
        </ButtonContainer>
      </ContainerPopUp>
    </>
  );
};
