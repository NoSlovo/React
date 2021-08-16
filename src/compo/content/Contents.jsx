import React from 'react';
import Posts from '../MyPosts/Posts';
import  classes  from './content.module.css';

let Contents = ()=>{
    return(
        <div className={classes.profile}> 
           <img className={classes.banner} src="https://otzyvy.postroyforum.ru/photo/otzyvy-tovars/3/besmer-23841.jpg" alt="baners" />
           <div className = {classes.header }>
           <div className="icon">
            <img src="https://cs16planet.ru/steam-avatars/images/avatar1833.jpg" alt="logo" />
            </div>
            
            <div className={classes.Name}>
                <h2>Daniil</h2>
                <h2>Kuritsin</h2>
            </div>
            </div>
           <div className={classes.post}>
                <div>
                <div className={classes.text}>
                <textarea></textarea>
                <div className={classes.button}>
                <button>Add post</button>
                <button>remove</button>
                </div>
            </div>
                    <Posts/>
                   

                </div>
           </div>
        
        </div>
    );
}

export default Contents;