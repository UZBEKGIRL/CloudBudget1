import clsx from "clsx";
import cn from "./style.module.scss";

function Button(props) {
    const { children } = props;
    // const { href } = props;
    console.log({ children });

    return( 
        <> 
            {/* <a href={ href } className={clsx(cn['a'], ['btn'])}>{ children }</a> */}
            <button className={clsx(cn['a'], ['btn'])}>{children}</button>
        </>
    )
}
export default Button;