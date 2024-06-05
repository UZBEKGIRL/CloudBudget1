import clsx from "clsx";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import TexnologiCard from "../../components/TexnologiCard";
import TypographyFun from "../../components/Typography";
import cn from "./style.module.scss";

function HomePage(props) {
    
    return (
        <Layout>
            <Showcase></Showcase>

            <div className={clsx(cn['texnologi'])}>
                <TypographyFun tag='h1' classname='header'>Технологии</TypographyFun>
                <div className={clsx(cn['in'])}>
                    <TexnologiCard header='Облачное хранение' img='/src/assets/Frame 5.png' num = '01'>Доступ из любой точки мира с любого устройства</TexnologiCard>
                    <TexnologiCard header='Безопастность' img='/src/assets/Frame 5.png' num = '02'>Вся  информация хранится на защищенных облачных серверах</TexnologiCard>
                    <TexnologiCard header='PDF Отчеты' img='/src/assets/Frame 5.png' num = '03'>Скачивайте ваши отчеты в удобном формате PDF</TexnologiCard>
                    <TexnologiCard header='CSV  Отчеты' img='/src/assets/Frame 5.png' num = '04'>Скачивайте ваши отчеты в удобном формате CSV</TexnologiCard>

                </div>
            </div>
        </Layout>
    )
}

export default HomePage;