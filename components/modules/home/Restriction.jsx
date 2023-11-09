import React from 'react';

//Style
import styles from "./Restriction.module.scss";

const Restriction = () => {
    return (
        <div className={styles.restriction}>
            <h3>Restrictions</h3>
            <p>
                Prohibited items. Merchants may only offer to sell items expressly
                permitted by their agreement with Uber. A merchant cannot offer
                specially regulated or illicit items, like cannabidiol (CBD) and
                tetrahydrocannabinol (THC), on their Uber Eats menu.
            </p>
        </div>
    );
};

export default Restriction;