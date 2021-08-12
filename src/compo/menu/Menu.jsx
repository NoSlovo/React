import React from 'react';
import classes from './menu.module.css'

let Menu = ()=>{
    return(
        <div className={classes.link}>
                <a className={classes.link_hover} href="#">profile</a>
                <a className={classes.link_hover} href="#">Messages</a>
                <a className={classes.link_hover} href="#">News</a>
                <a className={classes.link_hover} href="#">Music</a>

                <button className={classes.button}>settings</button>

        </div>



    );
}

export default Menu;