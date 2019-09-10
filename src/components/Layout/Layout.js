import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (

    <Aux>
    <div>toolbar, sideDrawer, backdrop</div>
    <main class="Content">
        {props.children}
    </main>
    </Aux>
    
);

export default layout;