import './App.css'
import { Header } from './components/Header.jsx'
import { DataCard } from './components/DataCard.jsx'
import { useGnssData } from './hooks/useGnssData.js'

function App() {
  const { data } = useGnssData()

  const createdAt = data?.data?.created_at
    ? new Date(data.data.created_at + ' UTC')
    : null

  const dateStr = createdAt?.toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className='main-container'>
      <Header />
      <div className='metrics-container'>
        <DataCard
          label='Latitud'
          value={data?.data?.latitude ?? 'Cargando...'}
        />
        <DataCard
          label='Longitud'
          value={data?.data?.longitude ?? 'Cargando...'}
        />
        <DataCard
          label='Altitud'
          value={data?.data?.altitude ?? 'Cargando...'}
        />
        <DataCard
          label='Satélites'
          value={data?.data?.satellites ?? 'Cargando...'}
        />
      </div>
      <div style={{ fontWeight: 'bold' }}>Última actualización: {dateStr ?? ""}</div>
    </div>
  )
}

export default App
