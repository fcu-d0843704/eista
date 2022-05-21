import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Product.module.css';

export default function Product() {
    return (
        <div className={styles.products_section}>
            <h1>出資專案</h1>
            
            <div className={styles.product_box}>
                <div className={styles.column}>
                    <h1>彰化雞舍001號</h1>
                    <div className={styles.picture_section}>
                        <Image src="/product_pic_1.jpeg" alt="product 1" layout="fill" objectFit="cover" className={styles.product_image} />
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>案埸地點</h3>
                    <p>彰化縣 - 埔鹽鄉</p>
                    <h3>日照時數</h3>
                    <p>平均有效3.59小時/kWp</p>
                    <h3>裝置容量</h3>
                    <p>64kWp: (單片330Wp)</p>
                    <h3>售電單價</h3>
                    <p>$4.6136/kWh(度)</p>
                    <h3>預估年發電量</h3>
                    <p>83.904/kWh(度)</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>單片售價</h3>
                    <p>$17.325/片</p>
                    <h3>片數</h3>
                    <p>192片</p>
                    <h3>預估年收益</h3>
                    <p>＄296.131</p>
                    <h3>內年報酬率</h3>
                    <p>5.58%</p>
                    <h3>回本年限</h3>
                    <p>12年</p>
                </div>
            </div>

            <div className={styles.product_box}>
                <div className={styles.column}>
                    <h1>彰化雞舍002號</h1>
                    <div className={styles.picture_section}>
                        <Image src="/product_pic_2.jpeg" alt="product 1" layout="fill" objectFit="cover" className={styles.product_image} />
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>案埸地點</h3>
                    <p>彰化縣 - 埔鹽鄉</p>
                    <h3>日照時數</h3>
                    <p>平均有效3.59小時/kWp</p>
                    <h3>裝置容量</h3>
                    <p>64kWp: (單片330Wp)</p>
                    <h3>售電單價</h3>
                    <p>$4.6136/kWh(度)</p>
                    <h3>預估年發電量</h3>
                    <p>83.904/kWh(度)</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>單片售價</h3>
                    <p>$17.325/片</p>
                    <h3>片數</h3>
                    <p>192片</p>
                    <h3>預估年收益</h3>
                    <p>＄296.131</p>
                    <h3>內年報酬率</h3>
                    <p>5.58%</p>
                    <h3>回本年限</h3>
                    <p>12年</p>
                </div>
            </div>

            <div className={styles.product_box}>
                <div className={styles.column}>
                    <h1>彰化雞舍003號</h1>
                    <div className={styles.picture_section}>
                        <Image src="/product_pic_3.png" alt="product 1" layout="fill" objectFit="cover" className={styles.product_image} />
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>案埸地點</h3>
                    <p>彰化縣 - 埔鹽鄉</p>
                    <h3>日照時數</h3>
                    <p>平均有效3.59小時/kWp</p>
                    <h3>裝置容量</h3>
                    <p>64kWp: (單片330Wp)</p>
                    <h3>售電單價</h3>
                    <p>$4.6136/kWh(度)</p>
                    <h3>預估年發電量</h3>
                    <p>83.904/kWh(度)</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.column}>
                    <h3>單片售價</h3>
                    <p>$17.325/片</p>
                    <h3>片數</h3>
                    <p>192片</p>
                    <h3>預估年收益</h3>
                    <p>＄296.131</p>
                    <h3>內年報酬率</h3>
                    <p>5.58%</p>
                    <h3>回本年限</h3>
                    <p>12年</p>
                </div>
            </div>
            
        </div>
    )
}
