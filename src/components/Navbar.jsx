import React from 'react';
import {MenuItems} from './MenuItems';
import styled from 'styled-components';
import Toggle from './Toggle';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #112d4e;
    height: 80px;
    font-size: 1.2rem;
	font-family: 'Josefin Sans', sans-serif;


    .nav-menu {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin-right: 2rem;
    }

    .navbar-logo {
        color: #f9f7f7;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        letter-spacing: 2px;
    }

    .nav-menu {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin-right: 2rem;
    }

    .nav-links {
        color: #f9f7f7;
        text-decoration: none;
        ${'' /* padding: 0.5rem 1rem; */}
        justify-content: space-around;
        padding: 10px 20px;
        letter-spacing: 1px;
        transition: 0.3s ease;

    }

    .logo-link {
        color: #f9f7f7;
        text-decoration: none;
    }

    .nav-links:hover {
        background-color: #3f72af;
        ${'' /* color: #112d4e; */}
        border-radius: 5px;
    }

    .fa-bars {
        color: #f9f7f7;
    }

    .menu-icon {
        display: none;
    }

    @media screen and (max-width:768px) {
        .NavbarItems {
            position: relative;
        }

        .nav-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }

        .nav-menu.active {
            background-color: #112d4e;
            left: 0;
            width: 100%;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 0;
        }

        .nav-links {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
        }

        .nav-links:hover {
            background-color: #3f72af;
            border-radius: 0;
        }

        .active {
            color: #3f72af;
        }

        .navbar-logo {
            position: absolute;
            padding-top: 12.5px;
            letter-spacing: 2px;
            top: 0;
            left: 0;
        }

        .menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 20px;
            transform: translate(-100%, 70%);
            font-size: 1.8rem;
            cursor: pointer;
        }

        .fa-times {
            color: #f9f7f7;
            font-size: 2rem;
        }

    }
    @media screen and (max-width:1024px) {
        
        
        .NavbarItems {
            position: relative;
        }

        .nav-menu {
            width: 70vw;
            justify-content: end;
            margin-right: 2rem;
        }
        
        .nav-links {
        }

        .nav-links:hover {
            background-color: #3f72af;
            border-radius: 0;
        }

        .navbar-logo {
            position: absolute;
            padding-top: 12.5px;
            top: 0;
            left: 0;
        }

    }
`;

function Navbar() {

    const [isToggled, switchToggle] = Toggle();

    return(
       <Nav className="NavbarItems">
           <h1 className="navbar-logo"><Link className="navbar-logo logo-link" to="/">Nick Hodge</Link></h1>
           <div className="menu-icon" onClick={switchToggle}>
               <i className={isToggled ? "fas fa-times" : "fas fa-bars"}></i>
           </div>
           <ul className={isToggled ? 'nav-menu active' : 'nav-menu'}
           onClick={switchToggle}>
               {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link
                            className={item.cName}
                            to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    );
               })}
           </ul>
       </Nav> 
    );
}

export default Navbar;