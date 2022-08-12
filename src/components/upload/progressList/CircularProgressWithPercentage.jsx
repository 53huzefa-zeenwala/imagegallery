import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

const CircularProgressWithPercentage = ({ value }) => {
    return (
        <Box>
            <CircularProgress size={60} thickness={5} variant='determinate' value={value} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant='caption' component='div' col0e='white' fontSize='1rem'>
                    {Math.round(value)}%
                </Typography>
            </Box>
        </Box>
    )
}

export default CircularProgressWithPercentage