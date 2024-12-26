import React from 'react'
import {useNavigate} from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
  return (
    <div>
  <h3>Home</h3> <h3 onClick={() => navigate("/products")}>Products</h3>
    </div>
  )
}

export default HomePage