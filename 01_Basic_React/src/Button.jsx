function printHello(){
    console.log("HELLO!");
    
}

function para(){
    console.log("Para is clicked");
    
}

function handledbl(){
    console.log("Double clicked");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={para}>This para is for event demo</p>
            <p onMouseOver={para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor et minus laboriosam iusto eos inventore tempora laudantium a asperiores. Eum mollitia numquam nobis est neque maxime minus earum tempore?</p>
            <button onDoubleClick={handledbl} >Double Click BTN</button>
        </div>
    )
}