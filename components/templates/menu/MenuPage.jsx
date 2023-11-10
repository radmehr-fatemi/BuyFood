//Style
import styles from "./MenuPage.module.scss";

//Component
import CardMenu from '../../modules/card/CardMenu';

const MenuPage = ({ data: products }) => {
    return (
        <div className={styles.menuPage} >
            <h3>Menu</h3>
            <div className={styles.products} >
                {
                    products.map(product => <CardMenu key={product.id} {...product} />)
                }
            </div>
        </div>
    );
};

export default MenuPage;