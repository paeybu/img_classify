import React, { useContext } from 'react'

const PredictUrlItem = ({ item }) => {
  return (
    <li className="collection-item">
      {item.name}
      <span className="secondary-content">
        {(item.value * 100).toFixed(2)}%
      </span>
    </li>
  )
}

export default PredictUrlItem
