//Style
import styles from "./HomePage.module.scss";

//Component
import Banner from '../../modules/home/Banner';
import WhyUs from '../../modules/home/WhyUs';
import Definition from '../../modules/home/Definition';
import Companies from '../../modules/home/Companies';
import Instruction from '../../modules/home/Instruction';
import Restriction from '../../modules/home/Restriction';
import Guide from '../../modules/home/Guide';

const HomePage = () => {
    return (
        <div className={ styles.container } >
            <Banner />
            <WhyUs />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restriction />
        </div>
    );
};

export default HomePage;