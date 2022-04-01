import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const Customlink = ({ children, to, ...props }) => {

    const MATCH = useMatch(to)

    return (
        <Link 
            to={ to } 
            style={{ 
                color: MATCH ? 'var(--color-active)' : 'white'
            }}
            {...props}>
            { children }
        </Link>
    );
}

export default Customlink;
