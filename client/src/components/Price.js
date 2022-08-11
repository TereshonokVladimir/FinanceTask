// const API_KEY = process.env.REACT_APP_API_KEY

const getPrice = async (stock) => {
    const responsePrice = await fetch(`https://cloud.iexapis.com/v1/stock/${stock}/quote/latestPrice?token=pk_27304baa68894ac791be267d96fc7d67`)
    return responsePrice.text() 
}

export default getPrice


