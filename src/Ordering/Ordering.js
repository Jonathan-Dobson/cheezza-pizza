import React from 'react'
import products from './productsArray'
import style from './style.module.css'
import Card from './Card'
export default (() => {
    return (
        <div className={style.products}>
            {products.map((item)=><Card item={item} key={`${item.id}+${item.title}`}/>)}
        </div>
    )
})
