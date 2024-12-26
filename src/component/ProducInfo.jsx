import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProviderContext } from './Context'
import axios from 'axios'

function ProducInfo() {

    const {data} = useContext(ProviderContext)

    
    const [color , setColor] = useState(0)


    const {id} = useParams()

    const item = data.find((item) =>  item.idCategory === id )

    const navigate = useNavigate()

    const intialCount = {
        color,
        id:item.idCategory,
    }

    const handleClick = (star) =>{
        setColor(star)
        try{
            axios.post(`http://localhost:3001/count`, {intialCount:star , id })
        }
        catch(error){
            console.error(error)
        }
    }

    const fetchData  = async() => {
        try{
          const responce = await axios.get(`http://localhost:3001/count`)
          const rating = responce.data.find((item) => item.id === id)
          if(rating){
            setColor(rating.intialCount)
          }
          
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    })

  return (
    <div key={item.idCategory}>
        <button onClick={() => navigate("/products")}>Go Home</button>
        <h3>Name:{item.strCategory}</h3>
        <img src={item.strCategoryThumb} alt={item.strCategory} />
        <p>Description: <br /> <br />
        {item.strCategoryDescription}</p>
        
        <div style={{display: "flex", gap: "2px"}}>
            {[1,2,3,4,5].map((star) => (
                <div style={{
                  width:"30px" , height:"30px",
                  border:"2px solid black",
                  backgroundColor: star <= color ? 'yellow' : "grey"}}
                  onClick={()=>handleClick(star)}  >
                  </div>
            ))}
        </div>
    </div>
  )
}

export default ProducInfo
