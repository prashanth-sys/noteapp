import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  NoteHeading,
  NoteCardContainer,
  InputEle,
  AddButton,
  FormContainer,
  CommentsList,
  CommentsEmtContainer,
  ImageEle,
  EmptyHeading,
  NoteAppear,
  TextArea,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [titleNote, setTitleNote] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTitleNote = event => {
    setTitleNote(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      titleNote,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setTitle('')
    setTitleNote('')
  }

  return (
    <BgContainer>
      <NoteHeading>Notes</NoteHeading>
      <NoteCardContainer>
        <FormContainer onSubmit={onSubmitForm}>
          <InputEle
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TextArea
            type="text"
            placeholder="Take a Note..."
            onChange={onChangeTitleNote}
            value={titleNote}
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
      </NoteCardContainer>
      {commentsList.length === 0 ? (
        <CommentsEmtContainer>
          <ImageEle
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <NoteAppear>Notes you add will appear here</NoteAppear>
        </CommentsEmtContainer>
      ) : (
        <CommentsList>
          {commentsList.map(eachComment => (
            <NoteItem key={eachComment.id} commentDetails={eachComment} />
          ))}
        </CommentsList>
      )}
    </BgContainer>
  )
}

export default Notes
