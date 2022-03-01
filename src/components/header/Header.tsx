import React, {useState, useEffect, ReactElement} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Menu from '../Menu';

export type MenuState = {
    initial?: boolean;
    clicked: boolean | null;
    name: string;
};
export default function Header(): ReactElement {
    const history = useHistory();

    const [state, setState] = useState<MenuState>({
        initial: false,
        clicked: null,
        name: 'Menu'
    });

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        // Listening for page changes.
        history.listen(() => {
            setState({clicked: false, name: 'Menu'});
        });
    }, [history]);

    /**
     * Toggle menu
     */
    function handleMenu() {
        disableMenu();
        if (state.initial === false) {
            setState({
                clicked: true,
                name: 'Close'
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                name: 'Menu'
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                name: 'Close'
            });
        }
    }

    /**
     * Determine if out menu button should be disabled
     */
    function disableMenu() {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    }

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link style={{fontStyle: 'italic'}} to="/">
                                SANDR.
                            </Link>
                        </div>
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>
                                {state.name}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Menu state={state} />
        </header>
    );
}
