import React from 'react'
import style from './style.module.css'
import { useHistory } from 'react-router-dom'
export default (props) => {
    const history = useHistory()
    return (
        <div className={style.order}> 
            <h1>WE DELIVER!</h1>        
            <h3>Order Online for pickup or delivery</h3>
            <button className={style.start} onClick={()=>history.push("/order")}>start online order</button>
            <p>Delivery available from participating locations only. Delivery fees apply. Plus tax.</p>
        </div>
    )
}
