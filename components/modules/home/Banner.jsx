import Link from 'next/link';

//Style
import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <div className={ styles.banner } >
            <div className={ styles.field1 } >
                <h3>BuyFood</h3>
                <h4>Food Delivery and Takeout!</h4>
                <p>
                    BotoFood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </p>
                <Link href="/mennu" >See All</Link>
            </div>

            <div className={ styles.field2 } >
                <img src="/images/banner.png" alt="Banner photo" />
            </div>
        </div>
    );
};

export default Banner;