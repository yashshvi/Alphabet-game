import React, { useEffect, useState } from 'react'
import "./css/firstpage.css"
export default function Firstpage() {
    const [bt, setbt] = useState(0);
    const [minute, setminute] = useState(0);
    const [seconds, setseconds] = useState(0);
    const [stop, setstop] = useState(true);
    var timer;
    const [besttime, setbesttime] = useState(0);
    // const[neg,setnegetive]=useState(0);
    const [mycount, setmycount] = useState(0);
    const [success, setsuccess] = useState(false);
   
    const [flag, setflag] = useState(false);
   useEffect(()=>{
        console.log("best effect");
        console.log(besttime);
   },[besttime])
   
    useEffect(() => {
        if (stop == false) {
            // successfun();
            timer = setInterval(() => {
                setseconds(seconds + 1);
                if (seconds === 59) {
                    setminute(minute + 1);
                    setseconds(0);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, )

    const Timerfunction = () => {
        setstop(false);
    }
    const stopclock = () => {
        setstop(true);
    }
    const [initialval, setinputval] = useState("");
    
    const handle = (event) => {
        if (flag == true) {
            setinputval(event.key);
        } else {
         
            alert("press start button to start the game");
            document.getElementById("myinput").value = "";
        }
    }

    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];

    const getRandomResearchletter = () => {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    const [getrandomval, setval] = useState('A')
    const setletterfun = () => {
        const randomletters = getRandomResearchletter();
        setval(randomletters);
    }
    const startgame = async (e) => {
        document.getElementById("myinput").value = "";
        setsuccess(false);
        setflag(true);
        // alert("Lets start the game");
        setletterfun();
        //calling timer function
        Timerfunction();
    };
var temp=0;
if(flag==true && initialval!="" ){
    if (getrandomval == initialval) {
        setletterfun();
        setmycount(mycount + 1);
         
        if (mycount == 1) {
             temp=(minute*60+seconds);
            //  console.log(temp);
             
             if(besttime==0){
                setbesttime(temp);
                // console.log("here"+besttime);
             }else if(temp<besttime){
                setbesttime(temp);
              
             }
            // reduce();
            //  console.log(bt);
            // alert("winner");
            setsuccess(true)
            stopclock();
            setseconds(0);
            setminute(0);
            setmycount(0);
            setflag(false);
        }
    }
   
}

    return (
        <div className='wholecontainer'>
            <h1>Type the alphabet</h1>
            <h5>
                Typing game to see how fast you can type .Timer start when you :)
            </h5>
            <div className='mybox'>
                <p className='mypara'>{success == true ? <p className='onsuccess'>"SUCCESS"</p>
                    : getrandomval}</p>

            </div>
            <h5>Time : {minute < 10 ? "0" + minute : minute}:{seconds < 10 ? "0"+ seconds : seconds} </h5>
           
            {/* <h5>My best Time {minute*60 +seconds} seconds </h5> */}
            <h5>My best Time {besttime} seconds </h5>
            

            <button className='startbutton' onClick={startgame}>Start</button>
            <input className='myinput' id='myinput' autoComplete='off' onKeyPress={(e) => handle(e)} placeholder='enter alphabet'></input>
        </div>
    )
}
