import React from 'react';

import './menu.scss';

const Menu = ({children}) => (
    <ul className="main-menu">
        {children}
    </ul>
)

export default Menu;