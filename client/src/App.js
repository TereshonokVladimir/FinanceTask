import './App.css'
import Container from './components/Container'

const stocks = ['GOOG', 'AAPL', 'FB', 'AMZN', 'NFLX','IBEX']

const App = () => {
  return (
    <div className='App'>
        <h1>Stock Tracker</h1>
        <div className='stocks'>
            {stocks.map(stock => <Container key={stock} stock={stock} />)}
        </div>
    </div>
  )
}

export default App