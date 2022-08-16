import { Send } from '@mui/icons-material'
import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import { deleteUser } from 'firebase/auth'
import { useAuth } from '../../../context/AuthContext'
import deleteUserFile from '../../../firebase/deleteUserFile'

const DeleteAccount = () => {
    const { currentUser, setLoading, setAlert, setModal, modal } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await deleteUserFile('gallery', currentUser)
            await deleteUser(currentUser)
            setModal({ ...modal, isOpen: false })
            setAlert({ isAlert: true, severity: 'success', message: 'Your Account Has Been Deleted', timeout: 8000, location: 'main' })
        } catch (error) {
            setAlert({ isAlert: true, severity: 'error', message: error.message, timeout: 5000, location: 'modal' })
            console.log(error)
        }

        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <DialogContentText>
                    Are You Sure You Want To Delete Your Account? This Action Will Delete All Of Your Files And Records:
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' endIcon={<Send />} type="submit">
                    Confirm
                </Button>
            </DialogActions>
        </form>
    )
}

export default DeleteAccount