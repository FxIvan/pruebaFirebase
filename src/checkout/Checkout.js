import React,{useState,useEffect} from 'react'
import { db } from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'

export const Checkout = () =>{

    const [form,setForm] = useState({
        nombre:'',
        precio:''
    })

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    console.log(form)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const productRef = collection(db,'ordenes')

        addDoc(productRef,form)
        .then(resp=>{
            console.log(resp.id)
        })
    }
     return(
        <form onSubmit={handleSubmit}>
        <label>Producto</label>
        <input type="string" name='nombre' onChange={handleChange}/>
        <label>Precio</label>
        <input type="number" name='precio' onChange={handleChange}/>
        <button type='submit'>Cargar</button>
        </form>
    )
}