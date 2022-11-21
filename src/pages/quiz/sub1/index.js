import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Quiz from '../lib/Quiz';
import quiz from './quiz'; 

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'



const Sub1Quiz = () => {
// ** Hook
  const theme = useTheme() ;
  
    return (
        
    <Card sx={{ position: 'relative' }}>
      <CardContent>
    <Quiz
      quiz={quiz}
      shuffle
       showInstantFeedback
       continueTillCorrect
       //onComplete={setQuizResult}
      onQuestionSubmit={(obj) => console.log('user question results:', obj)}
       disableSynopsis
     //   revealAnswerOnSubmit
      // allowNavigation
    />

              </CardContent>
    </Card>
    )
  }
  
  export default Sub1Quiz
  