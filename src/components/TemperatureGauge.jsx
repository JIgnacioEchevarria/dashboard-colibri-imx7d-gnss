import { Box, CircularProgress, Typography } from '@mui/material'

export const TemperatureGauge = ({ temp }) => {
  const normalized = Math.min(Math.max(temp, 0), 40)
  const percentage = (normalized / 40) * 100

  let color = '#1976d2'
  if (temp < 10) color = '#0288d1'
  else if (temp >= 10 && temp < 25) color = '#2e7d32'
  else color = '#d32f2f'

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        size={70}
        thickness={5}
        sx={{
          color: '#222',
        }}
      />

      <CircularProgress
        variant="determinate"
        value={percentage}
        size={70}
        thickness={5}
        sx={{
          color: color,
          position: 'absolute',
          left: 0,
        }}
      />
    </Box>
  );
};
