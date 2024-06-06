import cn from "./style.module.scss";

function Input(props) {
    const { children, type } = props;

    return (
        <input type={type} placeholder={ children } />
    )
}

export default Input;