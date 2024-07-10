// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const NoteHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
  font-size: 37px;
`
export const NoteCardContainer = styled.div`
  background-color: #ffffff;
  width: 55%;
  height: 35%;
  align-self: center;
  margin-top: 33px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 9px;
  padding: 9px;
  display: flex;
  flex-direction: column;
`
export const InputEle = styled.input`
  margin: 15px;
  width: 50%;
  height: 35px;
  padding: 15px;
  color: #475569;
  font-weight: bold;
  font-family: 'Roboto';
  border: 0px solid;
`

export const TextArea = styled.textarea`
  margin: 15px;
  width: 50%;
  height: 95px;
  padding: 15px;
  color: #475569;
  font-weight: bold;
  font-family: 'Roboto';
  border: 0px solid;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const AddButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4c63b6;
  color: #ffffff;
  border-width: 0px;
  border-radius: 5px;
  align-self: flex-end;
  margin: 15px;
  margin-top: 22px;
`
export const CommentsList = styled.ul`
  display: flex;
  width: 55%;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 45px;
  padding: 5px;
`
export const CommentsEmtContainer = styled.div`
  align-self: center;
  width: 55%;
`

export const ImageEle = styled.img`
  width: 150px;
  margin-top: 45px;
`

export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 25px;
`

export const NoteAppear = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
