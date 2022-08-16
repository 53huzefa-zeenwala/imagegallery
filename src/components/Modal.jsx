import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import Notify from './Notify'

const Modal = () => {
  const { modal, setModal, alert, setAlert } = useAuth()
  const handleClose = () => {
    setModal({
      ...modal,
      isOpen: false
    })
  }
     
  useEffect(() => {
      if (modal.isOpen === false) {
        if (alert.isAlert && alert.location === 'modal') {
          setAlert({...alert, isAlert: false})
        }
      }
  }, [modal.isOpen])
  
  return (
    <Dialog open={modal.isOpen} onClose={handleClose}>
      <DialogTitle>
        {modal.title}
        <IconButton
          aria-label="Close"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500]
          }}
          onClick={handleClose}
        >
          <Close
          />
        </IconButton>
      </DialogTitle>
      {alert.location === 'modal' && <Notify />}
      {modal.content}
    </Dialog>
  )
}

export default Modal