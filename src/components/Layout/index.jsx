import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import cn from "./style.module.scss";

function Layout(props) {
    const { children } = props;
    return (
        <>
        <Navbar></Navbar>
        { children }
        <Footer>Pipang Ltd, Griva Digeni, <br />81-83 Jacovides Tower, 1st Floor <br />1090 Picosia USA</Footer>
        </>
    )
}

export default Layout;