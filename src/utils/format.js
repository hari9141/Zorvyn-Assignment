export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value)

export const monthShort = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: 'short' })
