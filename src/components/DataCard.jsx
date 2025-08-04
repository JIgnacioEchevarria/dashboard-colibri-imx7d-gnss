import { Box } from "@mui/material"

export const DataCard = ({ label, value, icon }) => {
    return (
        <div>
            <div className='gnss-data-card'>
                <div className="gnss-data-card__label">{label}</div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    {icon &&
                        <Box display="flex" justifyContent="center" alignItems="center">
                            {icon}
                        </Box>
                    }
                    <div className="gnss-data-card__value">{value}</div>
                </div>
            </div>
        </div>
    )
}
