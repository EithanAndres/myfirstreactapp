import React, { useState } from "react";

function ShowHide (){
    const [show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow (!show);
    }

    return <div> 
    <button onClick={handleClick}> {show ? "Mirame" : "Haz click aqui"} </button>
    {show && <h2> Gracias por visitar mi pagina </h2>}
    </div>;
}

export default ShowHide;