
import './App.css';
import { useState } from 'react';
import Axios from 'axios';
function App() {
const [quote,setquote]=useState("Quote");
const [author,setauthor]=useState("Author");

const fetchquote =()=>{
  Axios.get("https://api.quotable.io/random").then((res)=>{
    setquote(res.data.content);
    setauthor(res.data.author);
    });
}



  return (
    <div className='App'>
   <div class='overflow-hidden'>
   <h1 class=' mt-[80px]  text-[70px] sm:text-[40px]  md:text-[60px] lg:text-[80px]' >Tip of the day !</h1>
   </div>
   <div class='shadow-[50px_-16px_#FBFFB1]  rounded-tl-[50px]  mt-[150px] bg-[#B4FF9F] mx-[300px]  md:mx-[100px] sm:mt-[60px] sm:mx-[50px] lg:mt-[150px] lg:mx-[300px]'>
<h1 class='text-[60px] items-center justify-center sm:text-[30px] md:text-[40px] lg:text-[60px]'>{quote}</h1>
<h2 class='text-[40px] sm:text-[20px] mr-[100px] lg:text-[60px]'>~ {author}</h2>

   </div>
   <button onClick={fetchquote} class='text-[30px] mt-[150px] border-none  shadow-md shadow-[#00FFCA] rounded-3xl border-2 p-[10px] bg-[#FEFF86] font-sans cursor-pointer sm:mt-[50px] sm:text-[20px] md:mt-[60px] md:text-[25px] lg:text-[30px] lg:mt-[150px]'>Generate New Quote</button>
 </div>
   
  )
}

export default App;





