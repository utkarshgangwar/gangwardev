import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About({ innerRef }) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        const n = info.bio.length;  // You can adjust this to suit your needs (e.g., length of the text)

        return (
            <>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="Welcome to the about page of my React app." />
                    <meta name="keywords" content="React, SEO, Helmet, utkarsh, gangwar, portfolio, javascript, developer, frontend, react, dev, front-end, tech, programmer" />
                    <link rel="canonical" href="https://www.gangwar.dev/about" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="gangwardev" />
                    <meta name="publisher" content="Utkarsh Gangwar" />
                </Helmet>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat about{firstName} </p>
                <p><span style={{ color: info.baseColor }}>about{firstName} <span className={Style.green}>(main)</span> $ </span>
                    <span
                        className={`${Style['type']} ${Style['clip']} ${Style['step']}`}
                        style={{ '--n': n }}
                    >
                        {info.bio}
                    </span>
                </p>
            </>
        );
    }


    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}