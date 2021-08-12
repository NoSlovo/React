import React from 'react';
import classes  from './header.module.css';



let Header = ()=>{
    return(
        <header className={classes.header}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/1582174/pub_5da9b4f38600e100afab7d85_5da9b636a3f6e4031d820a09/scale_1200" alt="logo" />
        </header>
    );
}

export default Header;