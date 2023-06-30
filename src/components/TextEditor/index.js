import {Component} from 'react'
import {
  BgContainer,
  TextBody,
  TextInstructionCard,
  Heading,
  Image,
  TextCard,
  ButtonsCard,
  ButtonItem,
  BoldIcon,
  ItalicIcon,
  UnderLineIcon,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  TextAreaElement,
} from './componentStyle'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false, textEntered: ''}

  onChangeOfText = event => {
    this.setState({textEntered: event.target.value})
  }

  onBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline, textEntered} = this.state
    return (
      <BgContainer>
        <TextBody>
          <TextInstructionCard>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="text-image"
              alt="text editor"
            />
          </TextInstructionCard>
          <TextCard>
            <ButtonsCard>
              <ButtonItem>
                <BoldButton
                  type="button"
                  onClick={this.onBold}
                  data-testid="bold"
                  bold={bold}
                >
                  <BoldIcon />
                </BoldButton>
              </ButtonItem>
              <ButtonItem>
                <ItalicButton
                  type="button"
                  onClick={this.onItalic}
                  data-testid="italic"
                  italic={italic}
                >
                  <ItalicIcon />
                </ItalicButton>
              </ButtonItem>
              <ButtonItem>
                <UnderLineButton
                  type="button"
                  onClick={this.onUnderline}
                  data-testid="underline"
                  underline={underline}
                >
                  <UnderLineIcon />
                </UnderLineButton>
              </ButtonItem>
            </ButtonsCard>
            <TextAreaElement
              row="10"
              col="50"
              bold={bold}
              italic={italic}
              underline={underline}
              onChange={this.onChangeOfText}
              value={textEntered}
            />
          </TextCard>
        </TextBody>
      </BgContainer>
    )
  }
}

export default TextEditor
