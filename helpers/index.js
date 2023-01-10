export const formatDate = (date) => {
  return date.split('T')[0].split('-').reverse().join('.')
}

export const formatCurrency = (sum) => {
  return sum ? sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽' : '0 ₽'
}
