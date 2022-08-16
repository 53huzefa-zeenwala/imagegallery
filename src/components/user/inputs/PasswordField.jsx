import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment } from "@mui/material"
import { useState } from "react"
import { TextField } from "@mui/material"


const PasswordField = ({ passwordRef, id = 'password', label = 'password', autoFocus = true }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDown = (e) => {
    e.preventDefault()
  }
  return (
    <TextField autoFocus={autoFocus} margin="normal" variant="standard" id={id} label={label} type={showPassword ? 'text' : 'password'} fullWidth required inputRef={passwordRef} inputProps={{ minLength: 6, }} InputProps={{
      endAdornment: <InputAdornment position="end" >
        <IconButton aria-label="Toggle Password visibility" onClick={handleClick} onMouseDown={handleMouseDown}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }} />
  )
}

export default PasswordField