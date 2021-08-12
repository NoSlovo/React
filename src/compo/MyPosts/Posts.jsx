import React from 'react';
import s from './posts.module.css'

let Posts = ()=>{
    return(<div>
        <div className={s.conteiner}>
            <div className={s.icon}></div>
                <p className={s.text}>Kutsin Daniil</p>          
                
                <div className={s.text_content}>
                    <p>Hello World</p>
                </div>
                </div>
    </div>
        

    );
}

export default Posts;