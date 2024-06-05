import clsx from "clsx";
import Button from "../Button/Button";
import TypographyFun from "../Typography";
import cn from "./style.module.scss";

function Showcase() {
    
    return (
        <div className={clsx(cn['show'])}>
            <div className={clsx(cn['in'])}></div>
            <div className={clsx(cn['main'])}>
                 <TypographyFun tag = 'h1' classname='main'>CLOUDBUDGET</TypographyFun>
                <TypographyFun tag = 'h1' classname='header2'>Управление бюджетом в для всех. <br />Всего 69,95 € в месяц после 7-дневной <br />пробной версии за 4,99 €</TypographyFun>
                <Button href='#'>ПОПРОБОВАТЬ</Button>
            </div>
        </div>
    )
}

export default Showcase;