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


const Content = () => {

  return (
    <CardContent>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  test.
                </Typography>
              </Box>
            </Box>
            </Grid>
      </Grid>
    </CardContent>
  )
}

export default Content
