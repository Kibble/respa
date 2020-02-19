import {Button, Toolbar} from 'react-md';
import React from 'react';
import '../style/layout.scss';

const NavBar = () => <Toolbar className="app-toolbar" colored>
    <Button className="app-toolbar__page-button" flat>Home</Button>
    <Button className="app-toolbar__page-button" flat>News</Button>
    <Button className="app-toolbar__page-button" flat>Gallery</Button>
    <Button className="app-toolbar__page-button" flat>About</Button>
</Toolbar>;

export default NavBar;