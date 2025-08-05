export const DataCard = ({ label, value }) => {
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
                    <div className="gnss-data-card__value">{value}</div>
                </div>
            </div>
        </div>
    )
}
