import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    
    setTimeout(() => {
      navigate("/")
    }, 3000)

  }, [])

  return (
    <div>404 - page not found</div>
  )
}

export default PageNotFound