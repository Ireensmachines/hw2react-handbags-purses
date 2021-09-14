import React from "react";




function Buttons({text, isDisabled}) {

    return (

        <button

            type="button"
            disabled={isDisabled}
            onClick={() => console.log(text)}>  {text}

        </button>



    );

}



export default Buttons;



