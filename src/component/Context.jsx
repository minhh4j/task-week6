import React, {createContext , useState , useEffect} from 'react'
import axios from "axios"

export const ProviderContext = createContext()

function Context({children}) {

const [data, setData] = useState([]);
console.log(data)
const FetchData = async () => {
  try {
    const responce = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    setData(responce.data.categories.slice(0,10));
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  FetchData();
}, []);

  return (
    <ProviderContext.Provider value={{data}}>
        {children}
    </ProviderContext.Provider>
  )
}

export default Context