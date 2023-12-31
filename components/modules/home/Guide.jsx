import Link from 'next/link';

//Style
import styles from "./Guide.module.scss";

const Guide = () => {
    return (
        <div className={styles.guide}>
          <Link href="/menu">Menu</Link>
          <Link href="/category">Categories</Link>
          <Link href="/">Discount</Link>
        </div>
      );
};

export default Guide;