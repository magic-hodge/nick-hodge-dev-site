import React from 'react';
import styled from 'styled-components';

const year = new Date().getFullYear();

const Bookend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #112d4e; 
    color: #3f72af;
    height: 100px;

    a {
        text-decoration: none;
    }

    .footerLinks, .copyright {
        margin: 5px auto;
    }

    .fab, .fas {
        width: 75px;
        font-size: 25px;
        padding: 10px;
        transition: 0.3s ease;
        color: #3f72af;
    }

    .fab:hover {
        color: #dbe2ef;
    }
`;

function Footer() {
    return (
        <Bookend>
            <div className="footerLinks">
                <a
                    href="https://www.facebook.com/nick.hodge.9"
                    className="fab fa-facebook-f"
                ></a>
                <a
                    href="https://github.com/magic-hodge"
                    className="fab fa-github"></a>
                <a
                    href="https://www.instagram.com/magic.hodge"
                    className="fab fa-instagram"
                ></a>
                <a
                    href="https://www.linkedin.com/in/nicklhodge"
                    className="fab fa-linkedin-in"
                ></a>
            </div>
            <div className="copyright">
                <span className="copyrightText">
                Nicholas Hodge. All rights reserved - Copyright © {year} 
                </span>
            </div>
        </Bookend>
    );
}

export default Footer;