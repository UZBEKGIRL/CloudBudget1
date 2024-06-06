import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
    const { width } = props;
    const { height } = props;
    const { radius } = props;
    const { img } = props;

    return (
        <img src={ img } alt=""  style={{
            width: { width},
            height: { height},
            borderRadius: { radius }
        }} className={clsx(cn["img"])}/>
    )
}

export default Img;