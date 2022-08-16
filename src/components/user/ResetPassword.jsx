import { DialogActions, DialogContent, DialogContentText } from "@mui/material"
import { useRef } from "react"
import EmailField from './inputs/EmailField'
import { useAuth } from '../../context/AuthContext'
import SubmitButton from "./inputs/SubmitButton"

const ResetPassword = () => {
    const { setLoading, setAlert, setModal, modal, resetPassword } = useAuth()
    const emailRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await resetPassword(emailRef.current.value)
            setModal({ ...modal, isOpen: false })
            setAlert({
                isAlert: true,
                severity: 'info',
                message: 'verification link has been send to your email inbox',
                timeout: 8000,
                location: 'main'
            })

        } catch (error) {
            setAlert({
                isAlert: true,
                severity: 'error',
                message: error.message,
                timeout: 5000,
                location: 'modal'
            })
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <DialogContentText>
                    Please enter your email address:
                </DialogContentText>
                <EmailField {...{ emailRef }} />
                <DialogActions>
                    <SubmitButton />
                </DialogActions>
            </DialogContent>
        </form>
    )
}

export default ResetPassword