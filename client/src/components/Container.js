import { useState, useEffect, useCallback } from 'react'
import Stock from "../components/Stock"
import getPrice from '../components/Price'

const Container = ({ stock }) => {
    const [price, setPrice] = useState(0)
    const updatePrice = useCallback(async () => {
        const newPrice = await getPrice(stock)
        if (price !== newPrice) {
            return setPrice(newPrice)
        }
    }, [stock, price])
    useEffect(() => {
        const interval = setInterval(updatePrice, 1000)
        return () => clearInterval(interval) 
    }, [updatePrice])
    return (
        <Stock stock={stock} price={price}/>
    )
}

export default Container
