/**
 * App js den gelen bilgilerinde map ile dönüyoruz ve her bir balik türünün bilgisini State kullanilarak asagiya aktariyoruz.
 */
 import {useState} from 'react'
 import Fish from './fish'
 
 const FishList = (props) => {
   const [fishList] = useState(props.fishList)
 return(
    fishList.map((fish,index)=>
   <Fish  key={index} fish={fish} index={index}/>
 ))
 }

 export default FishList;