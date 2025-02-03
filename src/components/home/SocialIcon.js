import React from 'react';

function SocialIcon(props) {
    const { link, icon, label } = props;
    return (
        <a target="_blank" aria-label={label}
            rel="noopener noreferrer" href={link}
            style={{ display: 'flex' }}>
            {
                label === 'leetcode' ? <>
                    <img src={icon} alt="leetcode" width={37} height={37}
                        style={{ opacity: 0.5, transition: "opacity 0.3s ease-in-out" }}
                        onMouseEnter={(e) => e.target.style.opacity = 0.5}
                        onMouseLeave={(e) => e.target.style.opacity = 1}
                    />
                </> : <>
                    <i className={icon} aria-hidden="true" />
                </>
            }
        </a>
    );
}

export default SocialIcon;