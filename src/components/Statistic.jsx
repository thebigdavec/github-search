import React from 'react'
import * as Icons from 'react-icons/fa'

export default function Statistic (options) {
  const { title = "Hello", icon = "FaCode", value = "5" } = options

  return (
    <div className="stat">
      <div className="stat-figure text-secondary text-3xl md:text-4xl">
        {React.createElement(Icons[icon])}
      </div>
      <div className="stat-title pr-5">
        {title}
      </div>
      <div className="stat-value pr-5 text-3xl md:text-4xl">
        {value}
      </div>
    </div>
  )
}