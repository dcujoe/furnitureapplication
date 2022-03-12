import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function FooterSection() {
  return (
    <>
      <footer className={styles.footer}> 
      <div>
          <div className="social-icons">
              <a href="">
                  <Image src="/linkedin.svg" 
                  height={40}
                  width={72}
                  alt="linkedIn"/>
              </a>
              <a href="">
                  <Image src="/github.svg" 
                  height={40}
                  width={72}
                  alt="instagram" />
              </a>
              <a href="">
                  <Image src="/instagram.svg"
                  height={40}
                  width={72}
                  alt="instagram"/>
              </a>
              </div>
      </div>
          @2022 all rights reserved Daniel Agbenyega
          <span className={styles.logo}>  
          </span>
      </footer>
    </>
  )
}
