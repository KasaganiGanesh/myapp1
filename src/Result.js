import React from 'react'
import Pass from './Pass'
import Fail from './Fail'
// import Result from './Result'

export default function Result(props) {
    if(props.marks>40){
return <Pass/>
//  result="passs"
    }
else{
    return <Fail/>
    //  result ="faill"
}
// return(result)
    }
   
  