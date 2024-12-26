import React, { useContext } from 'react'
import { ProviderContext } from './Context'
import { useNavigate } from 'react-router-dom'


function Products() {
    const {data} = useContext(ProviderContext)

    const navigate = useNavigate()

    const handleClik = (id) => {
        navigate(`/${id}`)
    }

  return (
    <div>    
        <h1>Products</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      {data?.map((item) => (
        <tbody key={item.idCategory}>
          <tr onClick={() => handleClik(item.idCategory)}>
            <td>{item.idCategory}</td>
            <td>{item.strCategory}</td>
            <td><img src={item.strCategoryThumb} alt="no image" /></td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
  )
}

export default Products