import React from 'react'
import "./statusBar.scss"

const StatusBar = ({status, message}) => {
  return (
    <div className={`statusBar ${status == "success" ? 'statusBar__success' : 'statusBar__failure'}`}>
        {message}
    </div>
  )
}

export default StatusBar