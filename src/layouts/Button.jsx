import React from "react";
import { Link } from 'react-scroll'
const Button = (props) => {
    return (
        <div>
            <Link to="book" spy={true} smooth={true} duration={500} >
            <button className="btn btn-danger border rounded-pill" type="submit">{props.title}</button>
            </Link>
            
        </div>
    )
}
export default Button