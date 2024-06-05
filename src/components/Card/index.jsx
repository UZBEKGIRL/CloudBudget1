import Img from "../Img/Img";
import cn from "./style.module.scss";
import clsx from "clsx";
import TypographyFun from "../Typography";

function Card(props) {
    const { children, header, img } = props;
    // console.log({ img });

    return (
        <div className={clsx(cn['card'])}>
            <Img width = '350px' height = '250px' radius = '8px' img = { img }></Img>
            
            <div className={clsx(cn['inner'])}>
                <TypographyFun tag = 'h1' classname = 'cardheader'>{ header }</TypographyFun>
                <TypographyFun tag = 'p' classname = 'p'>{ children }</TypographyFun>
                <a href="#" className={clsx(cn['a'])}>Подробнее</a>
            </div >
        </div>
    )
}

export default Card;