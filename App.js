import {React} from 'react'
import Header from './components/Header'
import './App.scss'

const App = () => {
  return (
  <>
   <Header />
   <Balance />
   <IncomeExpence />
   <History />
   <AddTransaction />
  </>
  )
}

export default App