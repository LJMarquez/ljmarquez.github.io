import { useEffect, useState } from "react"
import "../styles/LoadingScreen.css"

const LoadingScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            finishLoading()
          }, 500)
          return 100
        }
        return prevCounter + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [finishLoading])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <h1 className="loading-logo">LM</h1>
          <div className="logo-shadow"></div>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${counter}%` }}></div>
        </div>
        <p className="loading-text">Loading Experience {counter}%</p>
      </div>
    </div>
  )
}

export default LoadingScreen
