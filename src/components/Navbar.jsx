import React from 'react';
import {MenuItems} from './MenuItems';
import styled from 'styled-components';
import Toggle from './Toggle';

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

    .fa-react {
        margin-left: 0.5rem;
        font-size: 1.6rem;
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
        padding: 0.5rem 1rem;
        letter-spacing: 1px;
    }

    .nav-links:hover {
        background-color: #3f72af;
        border-radius: 5px;
        transition: all 0.25s ease-out;
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
            height: 500px;
            position: absolute;
            top: 78px;
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

        .navbar-logo {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0%, 70%);
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
`;

function Navbar() {

    const [isToggled, switchToggle] = Toggle();

    return(
       <Nav className="NavbarItems">
           <h1 className="navbar-logo">Nick Hodge</h1>
           <div className="menu-icon" onClick={switchToggle}>
               <i className={isToggled ? "fas fa-times" : "fas fa-bars"}></i>
           </div>
           <ul className={isToggled ? 'nav-menu active' : 'nav-menu'}>
               {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a
                            className={item.cName}
                            href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
               })}
           </ul>
       </Nav> 
    );
}

export default Navbar;