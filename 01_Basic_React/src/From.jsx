function handelFrom(event){
    event.preventDefault();  //it is used some default function for stop.
    console.log("from was clicked");
    
}

export default function From(){
    return(
        <>
            <form onSubmit={handelFrom} >
                <input type="text" placeholder="Write Something" />
                <button>Submit</button>
            </form>
        </>
    );
}