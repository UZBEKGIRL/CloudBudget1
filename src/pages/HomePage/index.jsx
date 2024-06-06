import clsx from "clsx";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import TexnologiCard from "../../components/TexnologiCard";
import TypographyFun from "../../components/Typography";
import cn from "./style.module.scss";
import Img from "../../components/Img/Img";
import Card from "../../components/Card";

function HomePage(props) {
    
    return (
        <Layout>
            <Showcase></Showcase>
            <div className={clsx(cn['second'])}>
                <div className={clsx(cn['inner'])}>
                    <TypographyFun tag='h1' classname='header'>Простое приложение для управления бюджетом</TypographyFun>
                    <div className={clsx(cn['in1'])}>
                    <TypographyFun tag='p' classname='p'>Наше приложение создано, чтобы вы могли в реальном времени управлять своим бюджетом и расходами в режиме онлайн с любого устройства. Оно предоставляет подробные отчеты о доходах и расходах с графиками, чтобы вы сразу могли увидеть расходы и бюджет. Читайте ниже, чтобы узнать больше.</TypographyFun>
                    <a href="#">Узнать подробнее</a>
                    </div>
                </div>
                <Img width = '445px' height='311px' radius = '15px' img='/src/assets/Video_bg.png'></Img>
            </div>

            <div className={clsx(cn['third'])}>
                <TypographyFun tag='h1' classname='header'>Возможности</TypographyFun>
                <div className={clsx(cn['inner'])}>
                    <Card header='Поддерживает все валюты и карты' img='/src/assets/Bg (1).png'>Мы поддерживаем все популярные валюты и полностью настраиваем, чтобы добавить</Card>
                    <Card header='Управляйте своими расходами на ходу' img='/src/assets/Bg (2).png'>Вы можете получить доступ к своей учетной записи из любой точки мира на любом устройстве</Card>
                    <Card header='Управление бюджетом осуществляется в облаке' img='/src/assets/Bg.png'>Наше приложение создано для того, чтобы вы могли управлять управлять своим бюджетом. </Card>
                </div>
            </div>

            <div className={clsx(cn['texnologi'])}>
                <TypographyFun tag='h1' classname='header'>Технологии</TypographyFun>
                <div className={clsx(cn['in'])}>
                    <TexnologiCard header='Облачное хранение' img='/src/assets/Frame 5.png' num = '01'>Доступ из любой точки мира с любого устройства</TexnologiCard>
                    <TexnologiCard header='Безопастность' img='/src/assets/Frame 5.png' num = '02'>Вся  информация хранится на защищенных облачных серверах</TexnologiCard>
                    <TexnologiCard header='PDF Отчеты' img='/src/assets/Frame 5.png' num = '03'>Скачивайте ваши отчеты в удобном формате PDF</TexnologiCard>
                    <TexnologiCard header='CSV  Отчеты' img='/src/assets/Frame 5.png' num = '04'>Скачивайте ваши отчеты в удобном формате CSV</TexnologiCard>

                </div>
            </div>

            <div className={clsx(cn['five'])}>
                <div className={clsx(cn['inner'])}>
                    <TypographyFun tag='h1' classname='headerw'>Сосредоточьтесь на экономии денег</TypographyFun>
                    <TypographyFun tag='p' classname='pw'>Мы помогаем вам отслеживать ваши привычки в расходах, чтобы вы могли легко определить и сократить ненужные расходы. Просто присоединяйтесь сегодня, чтобы начать!</TypographyFun>
                    <div className={clsx(cn['in1'])}>
                        <a href="#"><i class="fa-brands fa-app-store"></i></a>
                        <a href="#"><i class="fa-brands fa-google-play"></i></a>
                    </div>
                </div>
                <Img width = '445px' height='311px' radius = '15px' img='/src/assets/Slider.png'></Img>
            </div>

            <div className={clsx(cn['six'])}>
                <div className={clsx(cn['inner'])}>
                    <TypographyFun tag='h1' classname='header'>Напишите нам</TypographyFun>
                    <TypographyFun tag='p' classname='p'>Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.</TypographyFun>
                </div>
                <form action="">
                </form>
            </div>
        </Layout>
    )
}

export default HomePage;