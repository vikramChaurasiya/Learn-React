import './Hello.css';


function Hello({name,place,skills , skills2}){
    const list = skills.map((ele)=> <li> {ele} </li> ) ;
    
    return <>
        <h1 className="Hello">Hello my name is {name}, I'm from {place}.
        skills:{list} obj:{skills2}
        </h1>
       
    </>
} 

export default Hello;