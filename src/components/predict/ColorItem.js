import React, { useState, useEffect } from 'react'
import Tinycolor from 'tinycolor2'

const ColorItem = ({ item }) => {
  const [style, setStyle] = useState({
    background: item.raw_hex
  })

  useEffect(() => {
    Tinycolor(item.raw_hex).isDark()
      ? setStyle({
          ...style,
          color: 'white'
        })
      : setStyle({
          background: item.raw_hex
        })
    // eslint-disable-next-line
  }, [])

  return (
    <div style={style} className="color-block">
      <span>
        {item.w3c.name} {item.raw_hex}
      </span>
      <span className="right">{(item.value * 100).toFixed(2)} %</span>
    </div>
  )
}

export default ColorItem
