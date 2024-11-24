import React from "react";
import Style from "./FloatingButton.module.scss";
import { Box } from "@mui/material";
import resumeFile from "../../assets/resume.pdf"; // Update the path to your resume file

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
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit'
                    }}
                >
                    <div style={{ fontSize: "1.2rem" }}>⬇️</div>
                    <span style={{ fontSize: "1rem" }}>resume</span>
                </a>
            );
            break;
        default:
            break;
    }

    return (
        <Box className={Style.floatingButton}>
            <button className={Style.floatingBtn}>{buttonLabel}</button>
        </Box>
    );
};

export default FloatingButton;
