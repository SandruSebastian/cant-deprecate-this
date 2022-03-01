import React, {useRef, useEffect, ReactElement} from 'react';
import {gsap} from 'gsap';
import {Link} from 'react-router-dom';

import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    staggerRevealClose
} from '../animations/Animations';
import {MenuState} from './header/Header';

export default function Menu(props: {state: MenuState}): ReactElement {
    /**
     * Dom nodes references
     */
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open and click the menu button to close it.
        if (props.state.clicked === false) {
            // If menu is closed and want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, {duration: 1, css: {display: 'none'}});
        } else if (
            props.state.clicked === true ||
            (props.state.clicked === true && props.state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, {duration: 0, css: {display: 'block'}});
            // Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: '100%'
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            staggerText(line1, line2, line3);
        }
    }, [props.state]);

    function menuContent() {
        // container wrapper
        //
        return (
            <div className="">
                <div className="wrapper">
                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        /* @ts-ignore */
                                        onMouseEnter={e => handleHover(e)}
                                        /* @ts-ignore */
                                        onMouseOut={e => handleHoverExit(e)}
                                        /* @ts-ignore */
                                        ref={el => (line1 = el)}
                                        to="/projects"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={e => handleHover(e)}
                                        onMouseOut={e => handleHoverExit(e)}
                                        /* @ts-ignore */
                                        ref={el => (line2 = el)}
                                        to="/freelance"
                                    >
                                        Freelance
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onMouseEnter={e => handleHover(e)}
                                        onMouseOut={e => handleHoverExit(e)}
                                        /* @ts-ignore */
                                        ref={el => (line3 = el)}
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* @ts-ignore */}
                        <div ref={el => (info = el)} className="info">
                            <h3>
                                “Bad ideas is good, good ideas is terrific, no ideas is terrible.”
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        /* @ts-ignore */
        <div ref={el => (menuLayer = el)} className="hamburger-menu">
            {/* @ts-ignore */}
            <div ref={el => (reveal1 = el)} className="menu-secondary-background-color" />
            {/* @ts-ignore */}
            <div ref={el => (reveal2 = el)} className="menu-layer">
                {/* @ts-ignore */}
                <div className="menu-city-background" />
                {menuContent()}
            </div>
        </div>
    );
}
