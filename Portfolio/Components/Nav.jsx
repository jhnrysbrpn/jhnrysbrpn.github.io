import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div>

      <ul>
        <li>
        <Link  smooth={true}>Home </Link>
        </li>
         <li>
        <Link  smooth={true}>Services </Link>
        </li>
        <li>
        <Link  smooth={true}>About me </Link>
        </li>
        <li>
        <Link  smooth={true}>Contact </Link>
        </li>
        <li>
        <Link  smooth={true}>Resume </Link>
        </li>
      </ul>

    </div>
  )
}

export default Nav
