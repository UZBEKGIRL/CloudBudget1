import clsx from "clsx";
import TypographyFun from "../Typography";
import cn from "./style.module.scss";

function TexnologiCard(props) {
    const { children, img, header, num } = props;

    return (
        <div className={clsx(cn['texCard'])}>
            <TypographyFun tag = 'h1' classname = 'cardNumber'>{ num }</TypographyFun>
            <img src={ img } alt="" className={clsx(cn['img'])}/>
            <TypographyFun tag = "h1" classname = "cardheader">{ header }</TypographyFun>
            <TypographyFun tag = 'p' classname = "p">{ children }</TypographyFun>
        </div>
    )
}

export default TexnologiCard;