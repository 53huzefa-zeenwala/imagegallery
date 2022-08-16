import React, { useState } from 'react'
import Form from './Form'
import ProgressList from './progressList/ProgressList'

export default function Upload() {
  const [files, setFiles] = useState([])
  return (
    <div>
      <Form setFiles={setFiles} />
      <ProgressList files={files}/>
    </div>
  )
}
