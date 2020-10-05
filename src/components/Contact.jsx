import React from 'react';
import styled from 'styled-components';
import GetInTouch from './GetInTouch';


const Contact = styled.div`
  margin: 30vh auto;
`;

function ContactPage() {
  return (
    <Contact className="Contact-Page">
      <GetInTouch/>
    </Contact>
  );
}

export default ContactPage;
