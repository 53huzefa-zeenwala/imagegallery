import { Fab, Input } from '@mui/material'
import { Add } from '@mui/icons-material'
import React from 'react'
import { useRef } from 'react'

export default function Form({ setFiles}) {
    const fileRef = useRef()
    const handleClick = () => {
        fileRef.current.click()
    }
    const handleChange = (e) => {
      setFiles([...e.target.files])
      fileRef.current.value = null
    }
  return (
    <form>
        <Input inputRef={fileRef} type="file" inputProps={{ multiple: true }} sx={{ display: 'none'}} onChange={handleChange}/>
        <Fab color='primary' aria-label='add' onClick={handleClick}>
            <Add fontSize='large'/>
        </Fab>
    </form>
  )
}
