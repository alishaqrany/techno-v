// ** MUI Imports
import Grid from '@mui/material/Grid'


import Switch from '@mui/material/Switch'
import { useSettings } from 'src/@core/hooks/useSettings'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import Quiz from 'src/views/subjects/maintenance/quiz'
const Dashboard = () => {


  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <embed src="http://ai.edu-ali.tk/2/2/" />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
