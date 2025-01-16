import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                <meta name="description" content="Welcome to the portfolio page of my React app." />
                <meta name="keywords" content="React, SEO, Helmet, gangwar, portfolio, utkarsh" />
                <link rel="canonical" href="https://www.gangwar.dev/portfolio" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="gangwardev" />
                <meta name="publisher" content="Utkarsh Gangwar" />
            </Helmet>
            <Box id={'portfolio'} ref={innerRef}>
                <Grid container display={'flex'} justifyContent={'flex-start'} padding={'2rem'}>
                    {info.portfolio.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
};