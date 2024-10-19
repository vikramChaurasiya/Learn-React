import {useState} from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false); //initialization.
    let [Click, setClick] = useState(0);

    let toggelLiked = () => {
        // console.log("btn is clickd");
        setIsLiked(!isLiked);
        setClick(Click+1);
    }

    let styles = {color:"red"};

    return(
        <>
            <p>click ={Click} </p>
            <p onClick={toggelLiked}>
                {isLiked?
                    (<i className="fa-solid fa-heart"style={styles} ></i>

                    ) : (<i className="fa-regular  fa-heart"></i>

                )}
            </p>
        </>
    );
}