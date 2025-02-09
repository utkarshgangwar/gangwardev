import self from "../img/self.png"
import altRadar from '../img/altRadar.png';
import assistbuddi from '../img/assistbuddi.png';
import ss from '../img/simpleShiksha.png';
import picxele from '../img/picxele.png';
import mooncake from '../img/mooncake.png';
import nodejs from '../img/Node.js_logo.png';
import aspdotnet from '../img/aspdotnet.jpg';
import leetcode from '../assets/leetcode.svg';
import hrmsWsr from '../img/hrms-wsr.webp';
import cwb from '../img/logo.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

export const info = {
    firstName: "Utkarsh",
    lastName: "Gangwar",
    initials: "UG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a MERN Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            "emoji": "🌎",
            "text": "Based in India."
        },
        {
            "emoji": "☕",
            "text": "Javascript and C#"
        },
        {
            "emoji": "💼",
            "text": "MERN Stack Developer"
        },
        {
            "emoji": "🧠",
            "text": "Also practicing asp dot net."
        },
        {
            "emoji": "📧",
            "text": "Reach out at utkarshonwork@gmail.com."
        },
        {
            "emoji": "👀",
            "text": "Passionate about mobile app and web development."
        },
    ],
    socials: [
        {
            link: "https://leetcode.com/u/gangwarutkarsh/",
            icon: leetcode,
            label: 'leetcode'
        },
        // {
        //     link: "https://instagram.com/wolf_rayet",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/utkarshgangwar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/ukonwork",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/gangwarutk",
            icon: "fa fa-twitter",
            label: 'X'
        }
    ],
    bio: "Hello, I have completed my Bachelors of Engineering in Computer Science and Engineering from RGPV University (OCT). Currently I am working as Full Stack developer.",
    skills:
    {
        proficientWith: ['javascript', 'c#', 'nodejs', 'react', 'redux toolkit', 'react-redux', 'mongodb', 'git', 'bootstrap', 'Material UI', 'tailwind', 'html', 'css', 'figma'],
        exposedTo: ['dot net', 'c, c++', 'vue.js', 'angular', 'python', 'django', 'mysql', 'adobe photoshop']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'writing',
            emoji: '🎭'
        },
        {
            label: 'painting',
            emoji: '🎥'
        },
        {
            label: 'adventure sports',
            emoji: '🏄‍♂️'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "HRMS/WSR",
            // live: "https://dev.altradar.org/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: hrmsWsr,
        },
        {
            title: "altRadar",
            live: "https://dev.altradar.org/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: altRadar,
        },
        {
            title: "mooncake",
            live: "http://3.7.189.17:3000/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mooncake,
        },
        {
            title: "Picxele",
            live: "https://picxele.com/",
            // source: "https://github.com/paytonjewell",
            image: picxele,
        },
        {
            title: "Assist Buddi",
            live: "https://www.assistbuddi.com/features",
            // source: "https://github.com/paytonjewell",
            image: assistbuddi,
            about: 'Mostly worked on both server side'
        },
        {
            title: "Simple Shiksha",
            live: "https://www.simpleshiksha.com/",
            // source: "https://github.com/paytonjewell",
            image: ss
        },
        {
            title: "Robogenotiater",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: nodejs
        },
        {
            title: "Shoot",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: nodejs
        },
        {
            title: "Car Window Botany",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: cwb
        },
        {
            title: "asp.net MVC CRUD",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: aspdotnet
        }
        ,
        {
            title: "Portfolio Website",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: nodejs,
            live: "https://www.gangwar.dev/"
        }
    ]
}