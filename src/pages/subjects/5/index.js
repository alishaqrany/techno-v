// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** icons



// ** Demo Tabs Imports
import Content from 'src/views/subjects/maintenance/content'
import Quiz from 'src/views/subjects/5/quiz'
import Soon from 'src/views/subjects/maintenance/soon'

// ** Third Party Styles Imports

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '1.5rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Maintenance = () => {
  // ** State
  const [value, setValue] = useState('quiz')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='المحتوى'
          sx={{ borderBottom: theme => `2px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='quiz'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              
                امتحانات
                
                <TabName></TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='content'>
          <Content />
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='quiz'>
            <Quiz />
        </TabPanel>

      

        <TabPanel sx={{ p: 0 }} value='soon'>
          <Soon/>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Maintenance
