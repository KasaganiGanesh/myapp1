import React from 'react'
// import Home from './Home'
// import Login from './Login'

export default function App2(props) {
 
//   if(props.userName===""){
// return <Login/>
//   }
//   else{
//     return <Home output={props.userName}/>
//   }

// return(
//     (props.userName==="" ? <Login/> : <Home output={props.userName}/>)
// )



// return(
//     (props.userName==="" 
//     ? 
//     <div>
//     <h2>LOGIN FORM</h2>
//     <p><input type="text" /><br/></p>
      
//     <p><input type="password" /><br/></p>
//     <input type="submit" value="login"/>
//   </div>
//    : 
//   <div>Hello {props.userName}</div>)
// )
// }
return(
    (props.userName==="" 
    && 
    <div>
    <h2>LOGIN FORM</h2>
    <p><input type="text" /><br/></p>
      
    <p><input type="password" /><br/></p>
    <input type="submit" value="login"/>
  </div>))
   
}
