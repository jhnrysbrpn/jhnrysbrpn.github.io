import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function LightMeUp({ onFinished }) {
  const [isLight, setIsLight] = useState(false);
  const [rotIndex, setRotIndex] = useState(-1);
  const [showSwitch, setShowSwitch] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const rotRef = useRef(null);
  const prevBody = useRef({ bg: "", color: "", transition: "" });

  const rotatingMessages = [
    "Hi There! It is dark in here, right?",
    "What do you think if the world is dark?",
    "What would you feel if the world is dark?",
    "That's what my world feels like without you",
    "Cringe right? but that's how it is HAHAHAHHAHA",
    "Now, Would you light my World Up?"
  ];

  useEffect(() => {
    if (prevBody.current.bg === "") {
      prevBody.current.bg = document.body.style.background || "";
      prevBody.current.color = document.body.style.color || "";
      prevBody.current.transition = document.body.style.transition || "";
    }
  }, []);

  useEffect(() => {
    document.body.style.transition = "background 300ms ease, color 300ms ease";
    if (isLight) {
      document.body.style.background =
        "linear-gradient(180deg, #ffffff 0%, #f5f7fb 100%)";
      document.body.style.color = "#111827";
    } else {
      document.body.style.background = "#242424";
      document.body.style.color = "rgba(255, 255, 255, 0.87)";
    }
  }, [isLight]);

  useEffect(() => {
    return () => {
      document.body.style.background = prevBody.current.bg;
      document.body.style.color = prevBody.current.color;
      document.body.style.transition = prevBody.current.transition;
    };
  }, []);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setRotIndex(0);
    }, 1000);
    return () => clearTimeout(firstTimeout);
  }, []);

  useEffect(() => {
    if (rotIndex === -1) return;
    if (rotIndex === rotatingMessages.length - 1) {
      const reveal = setTimeout(() => setShowSwitch(true), 8000);
      return () => clearTimeout(reveal);
    }
    const interval = setInterval(() => {
      setRotIndex((i) => (i + 1) % rotatingMessages.length);
    }, 9000);
    rotRef.current = interval;
    return () => clearInterval(interval);
  }, [rotIndex, rotatingMessages.length]);

  const handleSwitch = () => {
    setIsLight((s) => !s);
    setIsHidden(true);
    setTimeout(() => {
      if (onFinished) onFinished();
    }, 2000);
  };

  return (
    <StyledWrapper isLight={isLight} showSwitch={showSwitch} isHidden={isHidden}>
      <div className={`content ${isHidden ? "fade-out" : ""}`}>
        <div className="text">
          <div className="rotator" aria-live="polite" aria-atomic="true">
            {rotatingMessages.map((msg, i) => (
              <p
                key={i}
                className={`rot-msg ${i === rotIndex ? "visible" : ""}`}
                role="status"
              >
                {msg}
              </p>
            ))}
          </div>
        </div>

        <div className={`switch-wrap ${showSwitch ? "visible" : ""}`}>
          <input
            name="switch"
            id="switch"
            type="checkbox"
            checked={isLight}
            onChange={handleSwitch}
            aria-label={isLight ? "Turn lights off" : "Turn lights on"}
          />
          <label className="switch" htmlFor="switch" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: center;
  color: ${(p) => (p.isLight ? "#111827" : "rgba(255, 255, 255, 0.87)")};
  transition: color 1500ms ease;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    opacity: 1;
    transition: opacity 2000ms ease;
  }

  .content.fade-out {
    opacity: 0;
    pointer-events: none;
  }

  .rotator {
    position: relative;
    width: 100%;
    height: 1.5rem;
  }

  .rotator .rot-msg {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) scale(0.95);
    opacity: 0;
    transition: opacity 3000ms ease, transform 3000ms ease;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  .rotator .rot-msg.visible {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    transition-delay: 4000ms;
  }
  .switch-wrap {
    position: relative;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    opacity: 0;
    transition: opacity 2000ms ease;
  }

  .switch-wrap.visible {
    opacity: 1;
  }

  #switch {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
    white-space: nowrap;
  }

  .switch {
    display: block;
    width: 130px;
    height: 60px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(
      90deg,
      #2a3235 0%,
      #3a4245 29%,
      #2d3335 34%,
      #3a4245 62%,
      #4a4a4a 68%,
      #3a4245 74%,
      #1a1d1e 100%
    );
    transition: all 0.2s ease-out;
    cursor: pointer;
    border-radius: 0.35em;
    box-shadow:
      0 0 1px 2px rgba(255, 255, 255, 0.08),
      inset 0 2px 0 rgba(255, 255, 255, 0.06),
      inset 0 -1px 0 1px rgba(0, 0, 0, 0.25),
      0 8px 10px rgba(0, 0, 0, 0.25);
  }

  .switch:before {
    display: block;
    position: absolute;
    left: -10px;
    right: -10px;
    top: -10px;
    bottom: -10px;
    z-index: -2;
    content: "";
    border-radius: 0.4em;
    background: linear-gradient(#1a1d1e, #2a3235);
    box-shadow:
      inset 0 2px 0 rgba(255, 255, 255, 0.08),
      inset 0 -1px 1px 1px rgba(0, 0, 0, 0.25),
      0 0 8px 2px rgba(0, 0, 0, 0.35),
      0 2px 4px 2px rgba(0, 0, 0, 0.25);
    pointer-events: none;
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
      -47px 32px 15px 13px rgba(0, 0, 0, 0.35);
  }

  #switch:checked ~ .switch {
    background: linear-gradient(
      90deg,
      #1a1d1e 0%,
      #3a4245 26%,
      #4a4a4a 32%,
      #3a4245 38%,
      #2d3335 66%,
      #3a4245 71%,
      #2a3235 100%
    );
  }

  #switch:checked ~ .switch:after {
    background: ${(p) => (p.isLight ? "#ffd54f" : "#00c8ff")};
    transform: translateX(-4px);
  }

  @media (max-width: 420px) {
    .switch {
      width: 110px;
      height: 52px;
    }
    .rotator {
      height: 1rem;
    }
    .rotator .rot-msg {
      font-size: 0.95rem;
    }
  }
`;

export default LightMeUp