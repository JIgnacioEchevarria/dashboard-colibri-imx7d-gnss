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

                const jsonData = await res.json()
                console.log(jsonData)
                setData(jsonData)
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { data }
}
