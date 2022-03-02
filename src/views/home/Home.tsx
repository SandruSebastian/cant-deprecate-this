import contract from '../../resources/images/avatar.webp';
import React from 'react';

export default function Home() {
    return (
        <div className="container" style={{maxWidth: 'unset'}}>
            <div className="wrapper" style={{padding: '28px'}}>
                <h2 style={{paddingBottom: '16px'}}>
                    I've spent the past years creating unique <b>software</b> solutions for a
                    variety of enterprises, ranging from social mobile apps to various tools and
                    online platforms.
                </h2>
                <p>
                    <span role="img" aria-label="strike">
                        ⚡
                    </span>{' '}
                    This website details the highlights of my career, the projects I've worked on,
                    the technologies I've utilized, and my enthusiasm for software. I use this to showcase my work and keep it up to date on a regular basis. Apart than that,
                    feel free to contact me if you're interested in collaborating.
                </p>
            </div>
            <img alt="me" className="image" src={contract} />
        </div>
    );
}
