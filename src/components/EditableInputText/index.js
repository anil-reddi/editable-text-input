import {Component} from 'react'

import {
  MainContainer,
  CardContainer,
  MainHeading,
  InputContainer,
  DisplayInputText,
  UserInput,
  Button,
} from './styledComponents'

class EditableInputText extends Component {
  state = {userInput: '', isButtonClicked: false}

  onChangeInputText = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <MainContainer>
        <CardContainer>
          <MainHeading>Editable Text Input</MainHeading>
          <InputContainer>
            {isButtonClicked ? (
              <DisplayInputText>{userInput}</DisplayInputText>
            ) : (
              <UserInput
                type="text"
                value={userInput}
                onChange={this.onChangeInputText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default EditableInputText
