import clsx from "clsx";
import cn from "./style.module.scss";


function TypographyFun(props) {
    const { children, tag = 'p', classname } = props;
    
    let Tag = tag;
    return (
        <>
        <Tag className = {clsx(cn[classname])}>{ children }</Tag>
        </>
    )
}

export default TypographyFun;