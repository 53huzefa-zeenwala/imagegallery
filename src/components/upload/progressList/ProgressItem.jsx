import { Box, ImageListItem } from '@mui/material'
import React, { useState } from 'react'
import CircularProgressWithPercentage from './CircularProgressWithPercentage'
import { CheckCircleOutline } from '@mui/icons-material'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import uploadFileProgress from '../../../firebase/uploadFileProgress'
import addDocument from '../../../firebase/addDocument'

const ProgressItem = ({ file }) => {
  const [progress, setProgress] = useState(0)
  const [imageUrl, setImageUrl] = useState(null)
  const currentUser = {uid: 'userId'}
  console.log(file, 'singleFile')
  useEffect(() => {
    const uploadImage = async () => {
         const imageName = uuidv4() + "." + file.name.split(".").pop()
         try {
          const url = await uploadFileProgress(
            file,
            `gallery/${currentUser.uid}`,
            imageName,
            setProgress
          )

          const galleryDoc = {
            imageUrl: url,
            uid: currentUser.uid,
            uEmail: 'test@test.com',
            uName: 'test',
            uPhoto: ''
          }
          await addDocument('gallery', galleryDoc, imageName)
          console.log(url)
          setImageUrl(null)
         } catch (error) {
          alert(error.message)
          console.log(error)
         }
    }
    setImageUrl(URL.createObjectURL(file))
    uploadImage()
  }, [file])

  return (
    imageUrl && (<ImageListItem>
      <img src={imageUrl} alt="gallery" loading='lazy' />
      <Box
        sx={backDrop}
      >
        {progress < 100 ? (<CircularProgressWithPercentage value={progress} />) : (
          <CheckCircleOutline sx={{
            width: 60,
            height: 60,
            color: 'lightGreen'
          }} />
        )}
      </Box>
    </ImageListItem>)
  )
}

export default ProgressItem

const backDrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0, .5)'
}