
import React from "react";
import "./imgBlock.css";
import logo from '../../../img/OnixFoto.jpg';
import Context from "../../context/context";

const ImgBlock = () => {

   return (
       <Context.Consumer>
           {
               (openMenu) => {
                   return (
                       <div className="img-block">
                           <img className="img-block-logo" src={logo} alt="no"/>
                           <h4>Who am I</h4>
                           <div className="img-block-text">
                               My name is Anton Momot. Every morning I wake up thinking that I want to write code.
                               Why did I choose React JS? Maybe because React library is a collection of all the most
                               interesting in the Front-end.
                           </div>
                           <button type="button"
                                   className="img-block-btn"
                                   onClick={openMenu}>
                               Menu
                           </button>
                       </div>
                   )
               }
           }
       </Context.Consumer>
   )
}

export default ImgBlock;

// const openMenu = useContext(Context); if useContext
