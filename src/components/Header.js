import React from 'react';


 const Header=(props)=>{

    return(
    <div>
    <h1>Hello {props.name} - {props.last}</h1>
             {props.children}
             </div>
    )
}
export default Header;


//agar export ko function ke sath use karte h to App.js me(import {} brakets ke sath karenge)-
// import {Header} from './components/Header'
