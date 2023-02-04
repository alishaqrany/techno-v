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
import Content from 'src/views/subjects/multimedia/content'
import Quiz from 'src/views/subjects/multimedia/quiz'
import Soon from 'src/views/subjects/multimedia/soon'

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
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Maintenance = () => {
  // ** State
  const [value, setValue] = useState('content')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='content'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                المحتوى
                <TabName></TabName>
              </Box>
            }
          />
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

      </TabContext>
    </Card>
  )
}

export default Maintenance
