import React, {useState} from 'react'
import style from './style.module.css'
import card from './card.module.css'
import {connect} from 'react-redux'
import Numpad from './Numpad'

export default connect(state=>({items:state.itemCount,animate:state.startAddAnimation}))(({item,dispatch}) => {
    const [quantity, setQuantity] = useState(0)
    const [showNumpad, setNumpad] = useState(false)
    function handleAddItem(item,amount=1) {
        if(!showNumpad){
            setQuantity(quantity+amount)
        }
        else{
            amount=0
        }
        dispatch({type:"addItem",itemId:item,qty:amount})
        setNumpad(false)
    }
    function changeQuantity(item,amount){
        setQuantity(amount)
        dispatch({type:"setItemQty",qty:amount,itemId:item})
    }
    const showQuantity = quantity > 0 ? card.quantityShow : null
    return (
        <div className={style.container}>
                {showNumpad && <Numpad itemId={item.id} setNumpad={setNumpad} setQuantity={setQuantity} changeQuantity={changeQuantity}/>}
                <div className={style.title}>
                    {item.name} 
                </div>
                <img className={style.item} src={"/img/"+item.img+".webp"} alt={item.title}></img>
                <div className={style.price}>
                    ${item.price} 
                </div>
                <button onClick={ ()=>handleAddItem(item.id) } className={style.addtocart}>ADD TO CART</button>
                <button onClick={ ()=>setNumpad(!showNumpad) } className={`${card.quantity} ${showQuantity}`}>x {quantity}</button>
            </div>
    )
})
