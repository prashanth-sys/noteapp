// Write your code here
import {ListItem, TitleName, TitleNote} from './styledComponents'

const NoteItem = props => {
  const {commentDetails} = props
  const {title, titleNote} = commentDetails
  return (
    <ListItem>
      <TitleName>{title}</TitleName>
      <TitleNote>{titleNote}</TitleNote>
    </ListItem>
  )
}
export default NoteItem
