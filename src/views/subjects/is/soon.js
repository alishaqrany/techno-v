// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'



const Soon = () => {
  // ** State
  const [date, setDate] = useState(null)

  return (
    <CardContent>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='Phone' placeholder='(123) 456-7890' />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
    </CardContent>
  )
}

export default Soon
