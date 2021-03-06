import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/landing.module.css'

export default function Home(){
    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
            <img src="/Picture1.png" alt="logo" style={{position:"absolute", top:"5%", width:"50px", height:"50px"}}/>

                <h1 className={styles.title}>
                    Welcome to The Healthy, Hunger-Free kids
                </h1>

                <p className={styles.description}>
                    Get started by Loging in or Signing up
                </p>

                <div className={styles.buttonsgroup}>
                    <Link href="login"><button className={styles.loginbtn}>Login</button></Link>
                    <Link href="signup"><button className={styles.signupbtn}>Sign Up</button></Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}