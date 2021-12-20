import React,{useState,useEffect} from 'react'
import { db } from '../firebase/config'
import {collection, getDocs} from 'firebase/firestore'
export const Menu = () =>{

    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const useRef =  collection(db,'productos')

        getDocs(useRef)
        .then(resp=>{
            const array = resp.docs.map(resp=>({
                    id:resp.id,
                    ...resp.data()
            }))
    
            setProductos(array)
        })
    },[])

    

    return(
        <div>
            {productos.map(produc=>{
                return (
                    <div key={produc.id}>
                    <h1>{produc.id}</h1>
                    <h2>{produc.nombre}</h2>
                    <h3>{produc.precio}</h3>
                    </div>
                    )
            })}
        </div>
    )
}