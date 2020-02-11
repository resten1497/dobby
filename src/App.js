import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import cat from './slave_nonsan.jpg'
import stop from './stop_it.jpg'

function App() {
  const countDownDate = new Date("March 19, 2020 11:00:00").getTime();
  const countDownNonsanDate = new Date("February 18, 2020 14:00:00").getTime();
  const countDownAllDate = new Date(" December 18, 2021 00:00:00").getTime();
 

  const now = new Date();
  // const [Time,setTime] = useState(countDownDate-now.getTime())
  // const [allTime,setAllTime] = useState(countDownAllDate - now.getTime())
  // const [NonsanTime,setNonsanTime] = useState(countDownNonsanDate - now.getTime())
  const [times, setTimes] = useState({
    time: countDownDate-now.getTime(),
    allTime: countDownAllDate - now.getTime(),
    nonsanTime: countDownNonsanDate - now.getTime(),
  });
  
  useEffect(() => {
    let test = setInterval(()=>{
      let now = Date.now()
      let distance = countDownDate - now;
      let alldistance = countDownAllDate - now;
      let Nonsandistance = countDownNonsanDate - now;
      setTimes({
        time: distance,
        allTime: alldistance,
        nonsanTime: Nonsandistance,
      })

    },1000);

   return () => {
      clearInterval(test)
   }
  }, [])
 
  console.log(times)

  return (
    <div className="App">
      <div style={{position: "relative"}}>
        <div style={{position:"absolute",width:"100vw",paddingTop:"40vh"}}>
           <span style={{zIndex:100,color:"white",fontSize:"2.3rem",position:"absolute",textAlign:"center",width:"100%",lineHeight:"0%"}}>전역까지</span>
           <span style={{zIndex:100,color:"white",fontSize:"9.5rem",position:"absolute",textAlign:"center",width:"100%",lineHeight:"120%"}}>{date(times)}</span>

           
        </div>
        <img src={cat} alt={"123"} style={{width: "100vw",height:"100vh",position:"absolute",left:0,}}/>
        <div style={{width:"100vw",height:"100vh",backgroundColor:"black",position:"absolute",opacity:"50%",}}/>
        
       
      </div>
   
    


    </div>
  );
}
const InputDate = (date) => {
  return(      
    <>   
      <input placeholder="_" color={"white"}style={{fontSize:"2.3rem",textAlign:"center",width:30,margin:10,border:0,color:'white'}} maxLength={1}></input>
      <input placeholder="_" style={{fontSize:"2.3rem",textAlign:"center",width:30,margin:10,border:0}} maxLength={1}></input>
      <input placeholder="_" style={{fontSize:"2.3rem",textAlign:"center",width:30,margin:10,border:0}} maxLength={1}></input>
      <input placeholder="_" style={{fontSize:"2.3rem",textAlign:"center",width:30,margin:10,border:0}} maxLength={1}></input>
    </>
  )

}




const date = (times) => {
  let answer = Math.floor(times.allTime / (1000 * 60 * 60 * 24)) +"일 "
  answer += Math.floor((times.allTime  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "시간 "
  answer += Math.floor((times.allTime  % (1000 * 60 * 60)) / (1000 * 60))+ "분 "
  answer += Math.floor((times.allTime   % (1000 * 60)) / 1000) + "초"
  

  return answer

}


export default App;
