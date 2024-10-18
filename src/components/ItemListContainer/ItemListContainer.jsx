import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [productos,setProductos]= useState([]);
  const[nombre,setNombre]=useState("productos");
  const [loading,setLoading]=useState(true);
  const categoria= useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    setLoading(true); 
    fetchData()
      .then((res)=>{
        if(categoria){
          setProductos(res.filter((prod)=>prod.categoria===categoria));
          setNombre(categoria);
        }else{
          setProductos(res);
          setNombre("Productos");
        }
          
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [categoria])
  

return (
  <div>
     {loading ? (
        <Loading /> 
      ) : (
        <ItemList productos = {productos} nombre={nombre}/> 
      )}
      
  </div>
)
}

export default ItemListContainer
