//Style
import styles from "./WhyUs.module.scss";

//ICON
import FastICON from "../../icons/Fast";
import ClockICON from "../../icons/Clock";
import ChoiceCON from "../../icons/Choice";
import FoodICON from "../../icons/Food";

const WhyUs = () => {
    return (
        <div className={ styles.whyUs } >
            <div className={ styles.field1 } >
                <h3>Why us ?</h3>
            </div>

            <div className={ styles.field2 } >
                <div className={ styles.card } >
                    <FastICON />
                    <span> fast </span>
                </div>


                <div className={ styles.card } >
                    <ClockICON />
                    <span> 24-7 </span>
                </div>

                <div className={ styles.card } >
                    <ChoiceCON />
                    <span> Your Choice </span>
                </div>

                <div className={ styles.card } >
                    <FoodICON />
                    <span> Best Restaurants </span>
                </div>


            </div>
        </div>
    );
};

export default WhyUs;