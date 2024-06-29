
import styles from "./Products.module.css"
import Image from "next/image";
export default function Shop(){
    return(
        <div className={styles.productsPage}>
            <h1 className={styles.title}>Products</h1>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <span>Filter:</span>
                    <select>
                        <option>Availability</option>
                    </select>
                    <select>
                        <option>Price</option>
                    </select>
                </div>
                <div className={styles.sort}>
                    <span>Sort by:</span>
                    <select>
                        <option>Alphabetically, A-Z</option>
                    </select>
                    <span className={styles.productCount}>1 product</span>
                </div>
            </div>
            <div className={styles.productsList}>
                <div className={styles.productCard}>
                    <Image src="/pexels-karolina-grabowska-4202480.jpg"
                           alt="Bamboo Toothbrush"
                           className={styles.productImage}
                           width={300} height={350}
                    />
                    <h2 className={styles.productName}>Bamboo Toothbrush</h2>
                    <p className={styles.productPrice}>₹20.0</p>
                </div>
            </div>
        </div>
    );
}