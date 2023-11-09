import React from 'react';
import Link from 'next/link';

//Style
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={ styles.navbar } >
            <div className={ styles.field1 } >
                <Link href="/" >BuyFood</Link>
            </div>
            <div className={ styles.field2 } >
                <Link href="/menu" >menu</Link>
                <Link href="/category" >category</Link>
            </div>
        </div>
    );
};

export default Navbar;