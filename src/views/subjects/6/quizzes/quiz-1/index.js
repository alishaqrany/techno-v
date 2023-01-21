import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
// ** quiz base component
import Quiz from '../../../../../quiz/lib/Quiz';
import quiz from './quiz2'; 

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
        
    <Quiz
      quiz={quiz}
      shuffle
       showInstantFeedback
    //   continueTillCorrect
       //onComplete={setQuizResult}
      onQuestionSubmit={(obj) => console.log('user question results:', obj)}
       disableSynopsis
     //   revealAnswerOnSubmit
      // allowNavigation
    />

    )
  }
  
  export default Sub1Quiz
  