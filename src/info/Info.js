import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"
import altRadar from '../img/altRadar.png';
import assistbuddi from '../img/assistbuddi.png';

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

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Utkarsh",
    lastName: "Gangwar",
    initials: "UG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            "emoji": "☕",
            "text": "Fueled by JavaScript and a good cup of tea."
        },
        {
            "emoji": "👀",
            "text": "Passionate about mobile app and web development."
        },
        {
            "emoji": "🌎",
            "text": "Based in India."
        },
        {
            "emoji": "💼",
            "text": "Fullstack MERN Developer at Deuglo Infosystem Pvt Ltd."
        },
        {
            "emoji": "🤝",
            "text": "Eager to collaborate on exciting Node.js and React projects."
        },
        {
            "emoji": "📧",
            "text": "Reach out at utkarshonwork@gmail.com."
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://instagram.com/_u1karsh_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
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
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Utkarsh Gangwar. I'm a fullstack developer at Deuglo Infosystem Pvt Ltd. I finished my Bachelor's of engineering from RGPV University (OCT 2020), I have a passion for web development with 3 years of experience in MERN stack, and I enjoy long walks on the beach.",
    skills:
    {
        proficientWith: ['javascript', 'nodejs', 'react', 'redux toolkit', 'react-redux', 'mongodb', 'git', 'github', 'bootstrap', 'html', 'css', 'figma'],
        exposedTo: ['c, c++', 'vue.js', 'angular', 'python', 'django', 'sql', 'adobe photoshop']
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
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Company Project 1",
            live: "https://dev.altradar.org/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: altRadar,
            about: 'Worked on both client and server side'
        },
        {
            title: "Company Project 2",
            live: "https://www.assistbuddi.com/features",
            // source: "https://github.com/paytonjewell",
            image: assistbuddi,
            about: 'Mostly worked on both server side'
        },
        {
            title: "more projects will be added on version 2",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}