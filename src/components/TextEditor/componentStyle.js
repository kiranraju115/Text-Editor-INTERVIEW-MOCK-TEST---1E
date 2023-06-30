import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const BgContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextBody = styled.div`
  width: 60%;
  height: 70vh;
  background-color: #1b1c22;
  padding: 10px;
  display: flex;
  align-items: center;
`
export const TextInstructionCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-weight: 500;
  font-size: 30px;
`

export const Image = styled.img`
  width: 100%;
`

export const TextCard = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid #334155;
  border-radius: 5px;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ButtonsCard = styled.ul`
  width: 100%;
  height: 10%;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #334155;
`

export const ButtonItem = styled.li``

export const BoldButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.bold ? '#faff00' : ' #f1f5f9')};
`

export const ItalicButton = styled(BoldButton)`
  color: ${props => (props.italic ? '#faff00' : ' #f1f5f9')};
`

export const UnderLineButton = styled(BoldButton)`
  color: ${props => (props.underline ? '#faff00' : ' #f1f5f9')};
`

export const BoldIcon = styled(VscBold)``

export const ItalicIcon = styled(GoItalic)``

export const UnderLineIcon = styled(AiOutlineUnderline)``

export const TextAreaElement = styled.textarea`
  font-family: 'Roboto';
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 90%;
  color: #f8fafc;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
