import './App.css'
import { Header } from './components/Header.jsx'
import { DataCard } from './components/DataCard.jsx'
import { TemperatureGauge } from './components/TemperatureGauge.jsx'
import ExploreIcon from '@mui/icons-material/Explore'
import PublicIcon from '@mui/icons-material/Public'
import { useGnssData } from './hooks/useGnssData.js'

function App() {
  const { data } = useGnssData()

  console.log(data)

  return (
    <div className='main-container'>
      <Header />
      <div className='metrics-container'>
        <DataCard
          label='Latitud'
          value='-34.6037'
          icon={<ExploreIcon color='primary' />}
        />
        <DataCard
          label='Longitud'
          value='-58.3816'
          icon={<PublicIcon color='primary' />}
        />
        <DataCard
          label='Temperatura'
          value='6°C'
          icon={<TemperatureGauge temp={6} />}
        />
      </div>
    </div>
  )
}

export default App
