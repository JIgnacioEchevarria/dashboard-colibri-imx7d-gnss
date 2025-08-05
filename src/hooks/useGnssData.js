import { useEffect, useState } from "react"

export const useGnssData = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://192.168.0.177:1234/api/gnss')
                
                if (!res.ok) {
                    setError(error)
                }

                const data = await res.json()

                setData(data)
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { data }
}
