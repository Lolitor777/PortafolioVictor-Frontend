import React, { useState } from 'react'
import { Comments } from './comment/Comments'
import { Create } from './comment/Create'
import { FormContact } from './formContact/FormContact';

export const Contact = () => {

  const [newComment, setNewComment] = useState(false);

  const updateComment = () => {
    setNewComment(!newComment)
  }

  return (
    <>
      <FormContact />
      <Comments newComment={newComment}/>
      <Create updateComment={updateComment}/>
    </>
  )
}
