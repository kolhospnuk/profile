
import React, {useContext} from "react";
import "./start.css";
import Context from "../../../../context/context";

const Start = () => {

    const openMenu = useContext(Context);

    return (
        <div className="start">
            Hi, I am Anton<br/>
            Click <a className="start-link"
                     onClick={openMenu}>
            Menu
                </a> for information
        </div>
    )
}

export default Start;