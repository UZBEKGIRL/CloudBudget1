import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
    const { width } = props;
    const { height } = props;
    const { radius } = props;
    const { img } = props;

    return (
        <div style={{
            width: { width},
            height: { height},
            borderRadius: { radius }
        }} className={clsx(cn["img"])}>
            <img src={ img } alt=""  style={{
            borderRadius: { radius }
        }}/>
        </div>
    )
}

export default Img;