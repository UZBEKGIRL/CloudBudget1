import clsx from "clsx";
import TypographyFun from "../../../Typography";
import cn from "./style.module.scss";

function Footer(props) {
    const {children, header } = props;
    return (
        <div className={clsx(cn['div'])}>
            <div className={clsx(cn['inner'])}>
                <TypographyFun tag = 'h1' classname = 'cardheader'>{ header }</TypographyFun>
                <TypographyFun tag = 'p' classname = 'pf'>{ children }</TypographyFun>
            </div>
        </div>
    )
}

export default Footer;