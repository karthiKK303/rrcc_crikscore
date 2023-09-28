import './App.css';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {

  const [TeamOne,setTeamOne] = useState("");
  const [TeamTwo,setTeamTwo] = useState("");
  const [Entryview, setEntryview] = useState(false);
  const [TeamDetails, setTeamDetails] = useState(false);
  const [loginpage, setloginpage] = useState(null);
  const [signuppage, setsignuppage] = useState(null)
  const [loginstatus, setloginstatus] = useState(null)
  const [Homeview, setHomeview] = useState(null)
  const [overs, setovers] = useState("0")
  const [wideballrun, setwideballrun] = useState("1")
  const [noballrun, setnoballrun] = useState("1")
  const [Numofrun, setNumofrun] = useState(Number(0));
  const [balls, setballs] = useState(Number(0))
  const [curntover, setcurntover] = useState(Number(0))
  const [totalballs, settotalballs] = useState(Number(0))
  const [partnershipballs, setpartnershipballs] = useState(Number(0))
  const [partnershipruns, setpartnershipruns] = useState(Number(0))
  const [extrs, setextrs] = useState(Number(0));
  const [rns, setrns] = useState(Number(0)) 
  const [Wicket, setWicket] = useState(Number(0))

//   useEffect(() => {
//   localStorage.clear() 
// }, [])


  useEffect(() => {
    if(localStorage.length > 0){
   setloginpage(true);
   setsignuppage(false);
  //  console.log("true");
  }else{
    setloginpage(false);
    setsignuppage(true);
    // console.log("false");
  }
  
if(localStorage.getItem('login')){
  let login = localStorage.getItem('login');

  if (login === "loggedin"){
    setloginstatus(true);
    setloginpage(false);
    setHomeview(true)
  }
 
}

  }, [])

  

let signup=(e)=>{
  e.preventDefault();
let username = document.getElementById('Username').value;
let password = document.getElementById('Password').value;

// console.log(username,"username");
// console.log(password,"password");

localStorage.setItem('username',username);
localStorage.setItem('password',password);

setsignuppage(false);
setloginpage(true)

}

let   startmatch = (e) => {
  e.preventDefault()
    let  Team1=document.getElementById("Team1").value;
    let  Team2=document.getElementById("Team2").value;
    let  overs=document.getElementById("overs").value;
    let  wideballrun=document.getElementById("wideballruns").value;
    let  noballrun=document.getElementById("noballruns").value;

  setTeamOne(Team1);
  setTeamTwo(Team2);
  setEntryview(false);
  setTeamDetails(true);
  setovers(overs);
  setwideballrun(wideballrun);
  setnoballrun(noballrun)
  }
// console.log(wideballrun,"wideballrun");
// console.log(noballrun,"noballrun");

  const Enterrun = (e) =>{
     e.preventDefault();
     
        const checkradio = document.querySelectorAll('input[type = radio]:checked').length;
        const extraslength = document.querySelectorAll('input[type = checkbox]:checked').length;      
        // console.log(checkradio,"radio");

        // let partnershipballs = 0;

        console.log(extraslength,"extraslength");
              
        if ((checkradio > 0)&&(extraslength && extraslength < 2)){
          const Numofruns= Number(document.querySelector('input[type = radio]:checked').value);
          const extras = Number(document.querySelector('input[type=checkbox]:checked').value);    
          console.log("wide and run");
                  if ((Numofruns >= 0 && extras)){
            
            setNumofrun(Numofrun + (Numofruns + extras));
            setextrs(extras);
            setrns(Numofruns)

            if (Numofruns >= 0){
              document.querySelector('input[type = radio]:checked').checked = false;
              document.getElementById('numofruns').checked = false
              // console.log(document.getElementById('numofruns').checked = false,"ok  ");  
            }
               if (extraslength > 0){
                document.querySelector('input[type = checkbox]:checked').checked = false;
              }
            }

        }
        
        else if (checkradio > 0){
        const Numofruns= Number(document.querySelector('input[type = radio]:checked').value);
// console.log(Numofruns,"Numofruns"); 
          
          settotalballs( totalballs =>Number(totalballs) + 1) 
         console.log(totalballs,"totalballs");
        
        if (Numofruns >= 0){
          setNumofrun(Numofrun + Numofruns);
                setrns(Numofruns);
                setextrs(0)
              
  if (Numofruns >= 0){
    document.querySelector('input[type = radio]:checked').checked = false;
    document.getElementById('numofruns').checked = false ; 
  }
  } 
  //  console.log(Numofrun,"in run");
}else if (extraslength){
  if(extraslength > 1)
  {
    alert("Please Enter any one extras type")
  }
   if(extraslength === 1){
  const extras = Number(document.querySelector('input[type=checkbox]:checked').value);
   
  console.log(extras,"extras");
  
   setNumofrun(Numofrun + extras);
   if(extraslength > 0){
    setextrs(extras)
    setrns(0)
    //console.log("con1");
  }
  
   console.log(Numofrun,"wideruns");
 }
if (extraslength > 0){
  document.querySelector('input[type = checkbox]:checked').checked = false;
}
}else{
  alert('Please select number of runs')
}
// console.log(Numofrun,"in extras");
}  

useEffect(() => {
  
  if (totalballs > 0){
    let wicket = document.getElementById('select').value;

          console.log(wicket,"wicket");
    if (wicket === "Wicket"){
      setpartnershipballs(partnershipballs + 1);
      
      console.log(partnershipballs,"partnershipballs");
      console.log(partnershipruns,"partnershipruns");
    }else{
      setpartnershipballs(0);
      setpartnershipruns(0)
      setWicket(Wicket + 1)
      console.log(partnershipballs,"partnershipballs else");
    }

     if(Number(totalballs) % 6 === 0){
   console.log(Number(totalballs) % 6 === 0);
    setcurntover(curntover + 1) ;
     console.log("passed")
     setballs(0)
    }else{
      setballs(balls + 1) ;
       
    console.log(balls,"balls");
    }
  }
  
}, [totalballs])

useEffect(() => {
  if (Numofrun >0){
    let wicket = document.getElementById('select').value;

    console.log(wicket,"wicket");
if (wicket === "Wicket"){
  const extraslength = document.querySelectorAll('input[type = checkbox]:checked').length;
  setpartnershipruns(partnershipruns + extrs  + rns)
  console.log(partnershipruns,"paertruns");
  console.log(extrs,"extrs");
  console.log(rns,"rns");
}else{
 
  setpartnershipruns(0)
 
}
  }
}, [Numofrun,extrs,rns])

useEffect(() => {
  let wicket = document.getElementById('select');
  if(Wicket){
  wicket.selectedIndex = 0;}
}, [Wicket])


let validlogin=(e)=>{
e.preventDefault()

let username1= document.getElementById('Username1').value;
console.log(username1,"username1");
let password1= document.getElementById('Password1').value;
console.log(password1,"pasword1");
let username2= localStorage.getItem('username');
console.log(username2,"username2");
let password2= localStorage.getItem('password');
console.log(password2,"password2"); 

((username1 === username2)&&(password1 === password2)) ? alert('logged in succesfully'): alert("username or password is incorrect")

if ((username1 === username2)&&(password1 === password2)){
  setloginpage(false);
  setHomeview(true);
  localStorage.setItem('login','loggedin')
  setloginstatus(true)
}
 }

 const newmatch =()=>{
  setEntryview(true);
  setHomeview(false)
 }
 let logout = (e)=>{
  e.preventDefault()
localStorage.removeItem('login');
setloginpage(true);
setHomeview(false);
setEntryview(false)
 } 
  return (
    <div>
      <img className='img1'alt='BGimage' src="https://i.pinimg.com/originals/78/1d/67/781d6783a1465bcfd437146c334f783c.jpg"/>

{signuppage && 
<div className="App">
<div className="maindiv" >
  <div>
<h1>SIGNUP PAGE</h1>
<form onSubmit={(e)=>signup(e)}>
<label className="Label1" >Username</label>
          <br></br>
        <input className="input1" id="Username" type="text" placeholder="Enter user name"></input>
        <br></br>
        <br></br> 
        <label className="Label1">Password</label>
          <br></br>
        <input className="input1" id="Password" type="text" placeholder="Enter Password"></input> 
        <br></br>
        <button className="Button1">SIGNUP</button> 
</form>
</div>
</div>


</div>
}

 { loginpage &&
<div className="App">
<div className="maindiv" >
  <div>
<h1>LOGIN PAGE</h1>
<form onSubmit={(e)=>validlogin(e)}>
<label className="Label1" >Username</label>
          <br></br>
        <input className="input1" id="Username1" type="text" placeholder="Enter user name"></input>
        <br></br>
        <br></br> 
        <label className="Label1">Password</label>
          <br></br>
        <input className="input1" id="Password1" type="text" placeholder="Enter Password"></input> 
        <br></br>
        <button className="Button1">LOGIN</button> 
</form>
</div>
</div>
</div>
}

   
{(Homeview && loginstatus) && 
<div className='main-tile'>
   <div className='tile' onClick={(e)=>newmatch(e)}>
NEW MATCH
   </div>
   <div className='tile'>
OPEN MATCH
   </div>
   <div className='tile'>
STATS
   </div>
   <div className='tile'>
SETTINGS
  </div>
  <div className='tile'>
RANKINGS
  </div>
</div>
}
{Entryview && 
    <div className="App">
            <div className="maindiv" >
      
       <div>
        <h1>RRCC Score card</h1>
        <div className='maindiv'>
        <form onSubmit={(e)=>startmatch(e)}  >
          <label className="Label1" >Team 1</label>
          <br></br>
        <input className="input1" id="Team1" type="text" placeholder="Enter team name"></input>
        <br></br>
        <br></br> 
        <label className="Label1">Team 2</label>
          <br></br>
        <input className="input1" id="Team2" type="text" placeholder="Enter team name"></input> 
        <br></br>
        <br></br> 
        <label className="Label1">OVERS</label>
          <br></br>
        <input className="input1" id="overs" type="number" placeholder="Enter Overs"></input> 
        <br></br>
        <br></br> 
        <label className="Label1">Runs on No Ball</label>
          
        <input className="input2" id="noballruns" placeholder='1' type="number" ></input> 
        <br></br> 
        <label className="Label1">Runs on wide ball</label>
        
        <input className="input3" id="wideballruns" placeholder='1' type="number" ></input>
        <br></br>
        <button className="Button1">START MATCH</button> 
        </form>
       </div>
       <div style={{display:"flex",justifyContent:"center"}}>
       <button onClick={(e)=>logout(e)} className="Button2">Logout</button>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="Note1"><b>Note:Team1 will bat first</b></div>
        </div>
        </div> 
        
      </div>
      
    </div>
}
{TeamDetails &&
<div className='maindiv'>
<div className='score-header'>
  <div >
      <div className='teamname'>
        {TeamOne?TeamOne:"Team1"}
      </div>
      <div className='scoreandover'>
        {Numofrun}-{Wicket}({curntover?curntover:"0"}.{balls?balls:"0"}/{overs?overs:"0"})
      </div>
  </div>
  <div >
  <div className='crr'>
        CRR
      </div>
      <div className='crrate'>
        0.0
      </div>
  </div>
</div>
<div className='playersandscore'>
  <div className='player-div'>
      <div className='p-ship'>
        p'ship {partnershipruns} ({partnershipballs})
      </div>
      <div className='player1'>
        player(1)
      </div>
  </div>
  <div className='player2'>
player(2)
  </div>
</div>

<div className='checkbox-div'>
  <div className='check'>
      <div><input type='checkbox' value={wideballrun}></input><span>Wide</span></div>
      <div><input type='checkbox' value={noballrun}></input><span>No ball</span></div>
      <div><input type='checkbox' value={1}></input><span>Byes</span></div>
      <div><input type='checkbox' value={1}></input><span>Leg byes</span></div>
  </div>
  
</div>

<div className='checkbox-div'>
  <div className='radio'>
      <div><input type='radio' value={0} name='runs' id='numofruns'></input><span>0</span></div>
      <div><input type='radio' value={1} name='runs' id='numofruns'></input><span>1</span></div>
      <div><input type='radio' value={2} name='runs' id='numofruns'></input><span>2</span></div>
      <div><input type='radio' value={3} name='runs' id='numofruns'></input><span>3</span></div>
      <div><input type='radio' value={4} name='runs' id='numofruns'></input><span>4</span></div>
      <div><input type='radio' value={5} name='runs' id='numofruns'></input><span>5</span></div>
      <div><input type='radio' value={6} name='runs' id='numofruns'></input><span>6</span></div>

  </div>
  
</div>
<div className='thisover'>
  THIS OVER :
</div>
<div className='buttonrow1'>
  <div className='retire'>
Retire
  </div>
<div className='wicket'>
<select id='select' className='select'>
  <option value={"Wicket"}>Wicket</option>
  <option value={"Caught"}>Caught</option>
  <option value={"Bowled"}>Bowled</option>
  <option value={"Stumped"}>Stumped</option>
  <option value={"RN-Striker"}>Run out(Striker)</option>
  <option value={"RN-NonStriker"}>Run out(Non Striker)</option>
  <option value={"LBW"}>LBW</option>
</select>
</div>
<div className='retire' onClick={(e)=>Enterrun(e)}>
ok
</div>
  </div>
<div className='buttonrow1'>
  <div className='retire'>
END INNINGS
  </div>
  <div className='retire'>
SWITCH BAT
  </div>
  <div className='retire'>
EDIT BALL
  </div>
</div>

<div className='batandbowl'>
  <div className='battingdiv1'>
    <div className='batting1image'>
<img className='img2' alt='Battingimage' src='https://t4.ftcdn.net/jpg/04/99/62/59/240_F_499625910_ghBBxV9RsHAWLQVPJdTpF49ioBP9ak1Z.jpg'></img>
    </div>
    <div className='batting1score'>
      <div className='player1name'>
          player1*
      </div>
      <div className='player1score'>
          0(0)
      </div>

    </div>

  </div>
  <div className='bowlingdiv1'>
  <div className='bowling1image'>
    <img className='img2'alt='Bowlingimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq3xJrag48lEJ4D8rS6wdaewbzxYoaAPnOxS45kw&s'></img>
</div>
<div className='bowling1score'>
<div className='player3name'>
player3
</div>
<div className='player3score'>
0.0-0-0-0
</div>
</div>

  </div>

  <div className='battingdiv1'>
    <div className='batting1image'>
    <img className='img2' alt='Battingimage' src='https://t4.ftcdn.net/jpg/04/99/62/59/240_F_499625910_ghBBxV9RsHAWLQVPJdTpF49ioBP9ak1Z.jpg'></img>
    </div> 
    <div className='batting1score'>
      <div className='player1name'>
          player2
      </div>
      <div className='player1score'>
          0(0)
      </div>

    </div>

  </div>
  <div className='bowlingdiv1'>
  <div className='bowling1image'>
    <img className='img2' alt='Bowlingimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq3xJrag48lEJ4D8rS6wdaewbzxYoaAPnOxS45kw&s'></img>
</div>
<div className='bowling1score'>
<div className='player4name'>
player4
</div>
<div className='player3score'>
0.0-0-0-0
</div>
</div>

  </div>
</div>
<div>
  <p>Total balls bowled :{totalballs}</p>
  <p>{TeamTwo?TeamTwo:"TEAM-2"} will bat next</p>
</div>
</div>
}
    </div>
  );
}

export default App;
