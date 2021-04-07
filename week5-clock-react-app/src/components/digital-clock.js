import {useState} from 'react'



export default function DigitalClock(){

    const [minutes, setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);

    setInterval(() =>{
        const date = new Date();
        setMinutes(date.getMinutes())
        setSeconds(date.getSeconds());
    }, 1000);

    return(
        <section>
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
        </section>
    )
}