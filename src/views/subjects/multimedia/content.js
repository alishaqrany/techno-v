// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import React from 'react'
import ReactPlayer from 'react-player/lazy'



const Content = () => {

  return (
    <CardContent>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant='h3' sx={{ marginTop: 5 }}>
                  Adobe Director - الدرس الاول
                </Typography>
              </Box>
              
            </Box>
            <Box>
             <Card sx={{ maxWidth: 345 }}>
        <ReactPlayer
        url='https://.youtu.be/EKpoE6q0Bfs'
        width='100%'
        pip='true'
        controls='true'
        // {light='true'}
        />      
        </Card>

            </Box>
            </Grid>
      </Grid>
    </CardContent>
  )
}

export default Content
