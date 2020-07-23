import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.module.css'
export default connect(state=>({items:state.itemCount,animate:state.startAddAnimation}))(props=>{

    if(props.animate){
        setTimeout(() => {
            props.dispatch({type:"stopAddAnimation"})
        }
        ,100)
    }

    const bagVisibility = props.items > 0 ? style.cart : `${style.cart} ${style.small}`

    return (
        <div className={style.nav}>
            <div className={style.logo}>CheezaPizza</div>
            <Link className={style.menu} to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </Link>
            <Link className={style.account} to="#">
                <svg className={style.chevron} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                My Account
            </Link>
            {/* { props.items > 0 && */}
            <Link className={bagVisibility} id={props.animate?style.animate:null} href="#">
                <div className={style.bag} to="#"></div>
                <div className={style.items}>{props.items}</div>
            </Link>
            {/* } */}
        </div>
    )
})
