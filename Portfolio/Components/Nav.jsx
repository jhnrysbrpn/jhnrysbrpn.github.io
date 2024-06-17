import { useState } from "react";
import { Link } from "react-scroll";

const nav = () => {
    const [click, setClick] = useState(false);
    const content = <>
       <div>
          <ul>
            <Link spy={true} smooth={true}    to="Home">
              <li>Home </li>
            </Link>
            <Link spy={true} smooth={true}    to="About">
              <li>About </li>
            </Link>
            <Link spy={true} smooth={true}    to="Skills">
              <li>Skills </li>
            </Link>
            <Link spy={true} smooth={true}    to="Services">
              <li>Services </li>
            </Link>
            <Link spy={true} smooth={true}    to="Contact">
              <li>Contact </li>
            </Link>
          </ul>
        </div>
   </>

  return (

   <nav>
    <div>
      <ul>
        <Link spy={true} smooth={true} to="Home">
             <li>Home </li>
        </Link>
        <Link spy={true} smooth={true} to="About">
             <li>About </li>
        </Link>
        <Link spy={true} smooth={true} to="Skills">
             <li>Skills </li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
             <li>Services </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
             <li>Contact </li>
        </Link>
      </ul>
    </div>
    <div>
      {click && content}
    </div>


   </nav>
  );
};

export default nav;