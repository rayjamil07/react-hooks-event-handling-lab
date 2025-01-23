import React from "react";

function EyesonMe(){
    function Focus(event){
        console.log("Good!")
    }
    function Blur(event){
        console.log("Hey! Eyes on me!")
    }
    return(
        <div>
            <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
        </div>
    )
}

export default EyesonMe;
