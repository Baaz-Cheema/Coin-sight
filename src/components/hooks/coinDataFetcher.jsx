import { useState, useEffect } from "react"
import axios from "axios"

export default function useCoinDataFetcher(coin) {
    const [loading, setLoading] = useState(true)
    const [coinData, setCoindata] = useState(null)
    const [dataType, setDataType] = useState('prices')
    const [duration, setDuration] = useState('hourly')//make a custom hook that gives data accoding to need of component aka need weekly daily or monthly
    const [error, setError] = useState(false)


    function changeDataType(val) {
        if (val === 'prices') {
            setDataType('prices')
        } else if (val === 'total_volumes') {
            setDataType('total_volumes')
        }
    }
    if (error) {
        setTimeout(() => {
            setError(false)
        }, 5000)
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            if (duration === 'hourly') {
                try {
                    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&precision=18`)
                    setCoindata(response.data)
                }
                catch (error) {
                    setError(true)
                }
            } else if (duration === 'daily') {
                try {
                    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30&interval=daily&precision=18`)
                    setCoindata(response.data)
                } catch (err) {
                    setError(true)
                }
            } else if (duration === 'weekly') {
                try {
                    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=120&interval=daily&precision=18`)
                    const obj = {
                        'prices': [],
                        'total_volumes': []
                    }
                    for (let i = 0; i < response.data.prices.length; i += 7) { //getting weekly data 
                        obj.prices.push(response.data.prices[i])
                        obj.total_volumes.push(response.data.total_volumes[i])
                    }
                    setCoindata(obj)
                }
                catch (err) {
                    setError(true)
                }
            }
            setLoading(false)
        }
        fetchData()
    }, [duration, coin])

    return {
        loading,
        coinData,
        dataType,
        setDataType,
        duration,
        setDuration,
        changeDataType,
        error
    }
}