// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'


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

const Dashboard = () => {

const { settings, saveSettings } = useSettings()

  const handleDirectionChange = value => {
    saveSettings({ ...settings, direction: value })
  }
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12}>
          <Table />
           
    <FormControlLabel
      label='RTL'
      control={
        <Switch
          checked={settings.direction === 'rtl'}
          onChange={e => handleDirectionChange(e.target.checked ? 'rtl' : 'ltr')}
        />
      }
    />
    
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
