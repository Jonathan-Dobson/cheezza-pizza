import React from 'react'
import style from './numpad.module.css'
import trash from '../graphics/trash.svg'
export default ({setNumpad,changeQuantity,itemId}) => {
    return (
        <div className={style.container}>
            <div>
                <button className={style.button} onClick={()=>changeQuantity(itemId,1)}>1</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,2)}>2</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,3)}>3</button>
            </div>
            <div>
                <button className={style.button} onClick={()=>changeQuantity(itemId,4)}>4</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,5)}>5</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,6)}>6</button>
            </div>
            <div>
                <button className={style.button} onClick={()=>changeQuantity(itemId,7)}>7</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,8)}>8</button>
                <button className={style.button} onClick={()=>changeQuantity(itemId,9)}>9</button>
            </div>
            <div>
                <button className={style.button} onClick={()=>{setNumpad(false); changeQuantity(itemId,0)}}><img width="26" src={trash} alt="remove all items" /></button>
                <button className={style.button} onClick={()=>{setNumpad(false); changeQuantity(itemId,0)}}>0</button>
                <button className={style.button} onClick={()=>setNumpad(false)}>&darr;</button>
                
            </div>
            
        </div>
    )
}
