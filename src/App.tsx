import React, { FC ,useEffect} from 'react';
import "./App.css"
import { chatServices } from './api/chatServices';
import Routing from './pages';

const App:FC=()=> {


const sendMessage=async()=>{
  try{
   const res= await chatServices.sendMessage({
    chatId: "37498823987@c.us",
    message: "Barev Styop Jan"
   }) 
       console.log(res)
     }catch(e){
    console.log(e)
      }
}
  useEffect(()=>{ 
     //sendMessage()
    //getMyAccount()

  },[])
    return (
      <div className="App">
        <Routing />
    </div>
    )
  
}

export default App;
