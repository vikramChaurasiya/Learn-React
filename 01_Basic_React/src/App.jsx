// import './App.css';
// import Hello from './Hello';
import MsgBox from './MsgBox';

function App() {
  // let skill = [<li>"HTML"</li>,<li>"CSS"</li>,<li>"JS"</li>];
  let skill = ["html" ,"css" , "js"]
  let skill2 = {H:"HTML", C:"CSS" ,J:"JS" } 
  return (
    <>
    
     {/* <Hello name="vikram" place="dbg" skills = {skill} skills2 = {skill2.H} /> */}
     <MsgBox userName="ram" textColor="red" />
     <MsgBox userName="shyam" textColor="pink" />
    </>
  )
}

export default App
