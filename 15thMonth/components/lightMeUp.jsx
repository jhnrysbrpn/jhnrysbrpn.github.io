import React from 'react'
import styled from 'styled-components';

function lightMeUp() {
  return (
   <StyledWrapper className='flex translate-[3em] translate-y-[8em]'>
      <div>
        <input name="switch" id="switch" type="checkbox" />
        <label className="switch" htmlFor="switch" />
      </div>
    </StyledWrapper>
  )
}

<div> 
  <p>
    Hi there! It is dark in here, right?
  </p>
</div>

const StyledWrapper = styled.div`
  #switch {
    visibility: hidden;
    clip: rect(0 0 0 0);
    position: absolute;
    left: 9999px;
  }
  .switch {
    display: block;
    width: 130px;
    height: 60px;
    margin: 70px auto;
    position: relative;
    background: #2a3235;
    background: linear-gradient(
      left,
      #2a3235 0%,
      #3a4245 29%,
      #2d3335 34%,
      #3a4245 62%,
      #4a4a4a 68%,
      #3a4245 74%,
      #1a1d1e 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a3235', endColorstr='#1a1d1e',GradientType=1 );
    transition: all 0.2s ease-out;
    cursor: pointer;
    border-radius: 0.35em;
    box-shadow:
      0 0 1px 2px rgba(255, 255, 255, 0.1),
      inset 0 2px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 1px rgba(0, 0, 0, 0.3),
      0 8px 10px rgba(0, 0, 0, 0.3);
  }
  .switch:before {
    display: block;
    position: absolute;
    left: -35px;
    right: -35px;
    top: -25px;
    bottom: -25px;
    z-index: -2;
    content: "";
    border-radius: 0.4em;
    background: #1a1d1e;
    background: linear-gradient(#1a1d1e, #2a3235);
    box-shadow:
      inset 0 2px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 1px 1px rgba(0, 0, 0, 0.3),
      0 0 8px 2px rgba(0, 0, 0, 0.4),
      0 2px 4px 2px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    transition: all 0.2s ease-out;
  }
  .switch:after {
    content: "";
    position: absolute;
    right: -25px;
    top: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #4a4a4a;
    margin-top: -8px;
    z-index: -1;
    box-shadow:
      inset 0 -1px 8px rgba(0, 0, 0, 0.7),
      inset 0 -2px 2px rgba(0, 0, 0, 0.2),
      0 1px 0 #2a3235,
      0 -1px 0 rgba(0, 0, 0, 0.5),
      -47px 32px 15px 13px rgba(0, 0, 0, 0.4);
  }
  #switch:checked ~ .switch {
    background: #1a1d1e;
    background: linear-gradient(
      to right,
      #1a1d1e 0%,
      #3a4245 26%,
      #4a4a4a 32%,
      #3a4245 38%,
      #2d3335 66%,
      #3a4245 71%,
      #2a3235 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a1d1e', endColorstr='#2a3235',GradientType=1 );
  }
  #switch:checked ~ .switch:after {
    background: #00c8ff;
    box-shadow:
      inset 0 -1px 8px rgba(0, 0, 0, 0.7),
      inset 0 -2px 2px rgba(0, 0, 0, 0.2),
      0 1px 0 #2a3235,
      0 -1px 0 rgba(0, 0, 0, 0.5),
      -110px 32px 15px 13px rgba(0, 0, 0, 0.4);
  }`;


export default lightMeUp
