import React from "react";
import Style from "./FloatingButton.module.scss";
import { Box } from "@mui/material";
import resumeFile from "../../assets/resume.pdf"; // Update the path to your resume file
import whatsappLogo from "../../assets/Digital_Glyph_Black.svg";

const FloatingButton = ({ type }) => {
  let buttonLabel = <></>;

  switch (type) {
    case "resume":
      buttonLabel = (
        <a
          href={resumeFile}
          download="Utkarsh-Gangwar-www.gangwar.dev.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "inherit",
          }}
        >
          <div style={{ fontSize: "1.2rem" }}>⬇️</div>
          <span style={{ fontSize: "1rem" }}>resume</span>
        </a>
      );
      break;
    default:
      buttonLabel = (
        <a
          href="https://api.whatsapp.com/send?phone=8827768227&text=Hello%21%20Coming%20from%20your%20website."
          class="float"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappLogo} alt="whatsapp" width={40} height={40} />
        </a>
      );
      break;
  }

  return (
    <Box className={Style.floatingButton + " " + Style[type]}>
      <button className={Style.floatingBtn}>{buttonLabel}</button>
    </Box>
  );
};

export default FloatingButton;
