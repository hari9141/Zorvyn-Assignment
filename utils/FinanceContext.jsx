import React, { createContext, useContext, useMemo, useState } from 'react'
import { initialTransactions } from '../data/transactions'

const FinanceContext = createContext(null)

export const useFinance = () => useContext(FinanceContext)

export default function FinanceProvider({ children }) {
  const [role, setRole] = useState('viewer')
  const [theme, setTheme] = useState('light')
  const [transactions, setTransactions] = useState(initialTransactions)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortField, setSortField] = useState('date')
  const [sortDir, setSortDir] = useState('desc')
  const [activeView, setActiveView] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  const value = useMemo(() => ({
    role, setRole, theme, setTheme, transactions, setTransactions, search, setSearch,
    typeFilter, setTypeFilter, categoryFilter, setCategoryFilter, sortField, setSortField,
    sortDir, setSortDir, activeView, setActiveView, mobileOpen, setMobileOpen
  }), [role, theme, transactions, search, typeFilter, categoryFilter, sortField, sortDir, activeView, mobileOpen])

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
}
