import React from 'react'
import products from './productsArray'
import style from './style.module.css'
import Card from './Card'
// import firebase from '../firebase'

// function useProducts(){
    // const [products, setProducts] = React.useState([])
//     React.useEffect(() => {
//         firebase.firestore().collection('Products').onSnapshot((snapshot) => {
//             const updatedProducts = snapshot.docs.map(doc=>({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setProducts(updatedProducts)
//         })
//     },[])
//     return products
// }

export default (() => {
    // const products = useProducts()
    
    return (
        <div className={style.products}> 
            {products.map((item)=><Card item={item} key={`${item.id}+${item.title}`}/>)}
        </div>
    )
})
