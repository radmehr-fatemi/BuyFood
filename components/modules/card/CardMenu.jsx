//Style
import styles from "./CardMenu.module.scss";

//ICON
import Location from "../../icons/Location";
import Dollar from "../../icons/Dollar";
import Link from "next/link";

const CardMenu = (props) => {

    const { name, price, discount, id, details } = props;

    return (
        <div className={styles.cardMenu} >
            <img src={`/images/${id}.jpeg`} alt={name} />

            {
                !!discount && <div className={styles.discount} > {discount}% </div>
            }

            <div className={styles.fields} >
                <div className={styles.field1} >
                    <h4> {name} </h4>
                    <span>
                        <Location />
                        {details[0].Cuisine}
                    </span>
                </div>

                <div className={styles.field2} >
                    <span style={!!discount ? { color: "red" } : { color: "black" }} >
                        <Dollar />
                        {!!discount ? price * (100 - discount) / 100 : price} $
                    </span>
                </div>
                
                <Link href={ `/menu/${id}` } >See Details</Link>
            </div>
        </div>
    );
};

export default CardMenu;