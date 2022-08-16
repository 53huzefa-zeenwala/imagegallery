import { Fab, Input } from '@mui/material'
import { Add } from '@mui/icons-material'
import React from 'react'
import { useRef } from 'react'
import {useAuth} from '../../context/AuthContext'
import Login from '../user/Login'

export default function Form({ setFiles}) {
  const {currentUser, setModal} = useAuth()
    const fileRef = useRef()
    const handleClick = () => {
      if (!currentUser) {
        return setModal({ isOpen: true, title: 'Login', content: <Login /> })
      }
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
