import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Tooltip, Typography } from '@mui/material'
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import Options from './Options';
import useFirestore from '../../firebase/useFirestore';

function srcset(image, size, rows = 1, cols = 1) {

  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  const {documents} = useFirestore('gallery')
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {documents.map((item, index) => (
        <ImageListItem key={item?.id} cols={pattern[index - Math.floor(index / pattern.length) * pattern.length].cols} rows={pattern[index - Math.floor(index / pattern.length) * pattern.length].rows} sx={{ position: 'relative', width: '100%', background: '#000' }}>
          <Options imageId={item?.id} />
          <img
            {...srcset(item?.data?.imageUrl, 200, pattern[index - Math.floor(index / pattern.length) * pattern.length].rows, pattern[index - Math.floor(index / pattern.length) * pattern.length].cols)}
            alt={item?.data?.uName || item?.data?.uEmail}
            loading="lazy"
          />
          <Typography variant='body2' component='span' sx={{
            color: 'white',
            position: 'absolute',
            left: 0,
            bottom: 0,
            background: 'rgb(0 0 0/.3)',
            p: ' 5px',
            borderTopRightRadius: '8px',
          }}>
            {moment(item?.data?.timestamp?.toDate()).fromNow()}
          </Typography>
          <Tooltip title='User Name' sx={{
            position: 'absolute',
            bottom: '3px',
            right: '3px',
          }}>
              <Avatar src={item?.data?.uPhoto}/>
           </Tooltip>
        </ImageListItem>
      ))}
    </ImageList>
  );
}



const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },

]


