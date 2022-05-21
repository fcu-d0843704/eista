import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Calculator = dynamic(
  () => import('../components/Calculator/Calculator'),
  { ssr: false }
)

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Eista G</title>
          <meta name="description" content="Eista G website 2021" />
          <meta name="keywords" content="Eista, Eista G, solar" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.photo_section}>
            <Image src="/solar.jpeg" alt="solar" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.overlay_text}>
            <h1>
              成為陽光電廠大亨
            </h1>
            <p>
              就在彈指之間您可以透過參與出資來共享綠電收益、<br/>
              參與捐款來放大公益行動的價值，<br/>
              或是出租屋頂來收綠色租金。
            </p>
          </div>
          <h1>賺取綠色收益其實很簡單</h1>
          <p>
            面對全球的氣候變遷，你是否也想做些什麼？<br />
            陽光伏特家提供簡單的太陽能出資平台，邀請你輕鬆晉升陽光電廠主人，<br />
            我們相信減碳不只是口號，追求環境永續時，你我也能共創有溫度的綠色收益！
          </p>
          <Calculator />
          <div className={styles.profit_detail_view}>
            <h2>
              假設一片太陽能板金額為 15,000 元<br />
              假設內部報酬率為 6.5 %
            </h2>
            <p>
              出資者可以依照個人需求選擇太陽能板片數，<br />
              預估20年的出資效益，你將獲得的，是長期穩定的綠電收益，<br />
              與耕耘環境的美好期待！
            </p>
          </div>
          <Link href="/product">
            <a>
              <button className={styles.more_button}>了解更多</button>
            </a>
          </Link>
        </main>
      </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      
    }
  }
}
