import React from 'react';
import ReactDOM  from 'react-dom';

// recallable button one way
//const Button = (props) => {
    //pass the value
   // return <button className="button">{props.name}</button>
//}

// recallable button another way
//const Button = ({name}) => {
    //pass the value
   // return <a>
        //<button className="button"> {name} </button>
       // </a>
//}

// recallable button another way with link
const Button = ({name , link}) => {
    //pass the value
    return <a href={link} target="_blank">
        <button className="button"> {name} </button>
        </a>
}
// export default Button;
 export default Button;
 
 