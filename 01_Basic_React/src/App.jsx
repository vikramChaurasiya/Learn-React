// import './App.css';
import Hello from './Hello';

function App() {
  // let skill = [<li>"HTML"</li>,<li>"CSS"</li>,<li>"JS"</li>];
  let skill = ["html" ,"css" , "js"]
  let skill2 = {H:"HTML", C:"CSS" ,J:"JS" } 
  return (
    <>
     {/*  <h1>hello world</h1> */}
     <Hello name="vikram" place="dbg" skills = {skill} skills2 = {skill2.H} />
    </>
  )
}

export default App
