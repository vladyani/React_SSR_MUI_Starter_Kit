import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Navbar = () => {
    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Typography>
                        React Starter Pack
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Navbar;