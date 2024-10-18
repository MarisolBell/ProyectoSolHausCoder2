import data from "../data/productos.json";

// funcion fetch (logica para obtener el listado de productos)


export const fetchData = () =>{
    return new Promise((resolve,reject)=>{
        //simulo consumir los productos de manera asincrónica
        setTimeout(() => {
            //si no hay data o no encuentra los productos
            if (!data || data.length === 0) {
                reject("Error: No se encontraron productos.");
            } else {
                resolve(data);
            }
        }, 2000); 
    });
    
}

// Simulacion de fetch por producto

export const fetchItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = data.find((el) => el.id === id);
            if (item) {
                resolve(item);
            } else {
                reject({ error: "No se encontró el producto" });
            }
        }, 2000); // Simulación de un retraso de 2 segundos
    });
};
