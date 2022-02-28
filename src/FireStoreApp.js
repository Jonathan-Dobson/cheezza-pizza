import React from 'react'
import firebase from './firebase'

// test add
// firebase.firestore().collection('Products').add({name:'Hula Hawaiian',price:61})

function useProducts(){
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        firebase.firestore().collection('Products').onSnapshot((snapshot) => {
            const updatedProducts = snapshot.docs.map(doc=>({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(updatedProducts)
        })
    },[])
    return products
}


export default function App() {
    const products = useProducts()

    console.log(products)
    return (<div>
        {products.map(item=><div key={item.id}>{item.name} ${item.price}
            <img src={`/img/${item.img}.webp`} width="100" alt={item.name}></img></div>)}
    </div>)
}
