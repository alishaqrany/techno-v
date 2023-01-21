// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'


import Sub1Quiz from './quizzes/quiz-1'
// import Sub1Quiz from './quizzes/quiz-2'
// import Sub1Quiz from './quizzes/quiz-final'

const Quiz = () => {
  return (
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
        </Grid>

        <Sub1Quiz />
      <Divider sx={{ margin: 0 }} />

      </CardContent>
  )
}

export default Quiz
