import React from 'react'
import FinanceProvider from './context/FinanceContext'
import Dashboard from './components/Dashboard'

export default function App() {
  return <FinanceProvider><Dashboard /></FinanceProvider>
}
