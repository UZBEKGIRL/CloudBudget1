import clsx from "clsx";
import Button from "../../../Button/Button";
import TypographyFun from "../../../Typography";
import cn from "./style.module.scss";
import { useState } from "react";

function Navbar() {

    const [class1, setClass1 ] = useState('burger');
    const [class2, setClass2 ] = useState('Y');
    const [class3, setClass3 ] = useState('ul3');
    

    return (
        <nav>
            <div className={clsx(cn["logo"])}>
                <img src="/src/assets/dashicons-cloud.png" alt="" />
                <TypographyFun tag = 'h1' classname = 'cardheader'>CLOUDBUDGET</TypographyFun>
            </div>
            <ul className={clsx(cn['ul'])}>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ОБЗОР</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ОСОБЕННОСТИ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ТЕХНОЛОГИЯ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>КОНТАКТЫ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ВОЙТИ</TypographyFun></a></li>
            </ul>
            <Button href='#' className = {clsx(cn['btn'])}>ВХОД</Button> 
            <h1
                onClick={ ()=>{
                    setClass1('delete');
                    setClass2('X');
                    setClass3("ul2");
                    console.log(class1);
                }}
                className={clsx(cn[class1])} 
            ><i class="fa-solid fa-bars"></i></h1>
            <h1 className={clsx(cn[class2])} 
                onClick={ ()=>{
                    setClass1('burger');
                    setClass2('Y');
                    setClass3("ul3");
                    console.log(class2);
                }}
            ><i class="fa-solid fa-x"></i></h1>

            <ul className={clsx(cn[class3])}>
                 <div className={clsx(cn["logo"])}>
                    <img src="/src/assets/dashicons-cloud.png" alt="" />
                    <TypographyFun tag = 'h1' classname = 'cardheader'>CLOUDBUDGET</TypographyFun>
                </div>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ОБЗОР</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ОСОБЕННОСТИ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ТЕХНОЛОГИЯ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>КОНТАКТЫ</TypographyFun></a></li>
                <li><a href="#"><TypographyFun tag = 'p' classname = 'p14'>ВОЙТИ</TypographyFun></a></li>
                <Button href='#'>ВХОД</Button> 
            </ul>
        </nav>
    )
}

export default Navbar;