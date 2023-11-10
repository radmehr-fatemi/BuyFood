//Style
import styles from "./DetailsPage.module.scss";

//ICON
import LocationICON from "../../icons/Location";
import DollarICON from "../../icons/Dollar";

const DetailsPage = (props) => {
    const {
        id,
        name,
        price,
        discount,
        introduction,
        details,
        ingredients,
        recipe,
    } = props;
    console.log(props)
    return (
        <div className={styles.details} >

            <h3>Details</h3>

            <div className={styles.banner} >
                <div className={styles.field1} >
                    <img src={`/images/${id}.jpeg`} alt={name} />
                </div>

                <div className={styles.field2} >
                    <h4> {name} </h4>

                    <span>
                        <LocationICON />
                        {details[0].Cuisine}
                    </span>

                    <p>
                        <DollarICON />
                        {!!discount ? price * (100 - discount) / 100 : price} $
                    </p>

                    {!!discount && <h5> {discount} % OFF </h5>}
                </div>
            </div>

            <div className={styles.introduction} >
                <p> {introduction} </p>
            </div>

            <div className={styles.detailsField} >
                <h4>Details</h4>

                {
                    details.map((item, index) => (<li key={index} >
                        {Object.keys(item)}
                        <span> {Object.values(item)} </span>
                    </li>))
                }
            </div>

            <div className={styles.introduction} >
                <h4>Ingredients</h4>

                {
                    ingredients.map((item, index) => (<li key={index} > {item} </li>))
                }
            </div>

            <div className={ styles.recipe } >
                <h4>Recipe</h4>

                {
                    recipe.map((item, index) => <li key={index} className={ index % 2 ? styles.odd : styles.couple } >
                        <span> {index + 1} </span>
                        <p> {item} </p>
                    </li>)
                }
            </div>

            <div className={ styles.button } >
                <button> Add to car </button>
            </div>
        </div>
    );
};

export default DetailsPage;