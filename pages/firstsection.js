import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


{/* Section after navbar.banner section*/}
export default function FirstSection() {
    return (
        <>

        <section className="box box-a bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-main">Best German furniture from Bonn at good price</h2>
          <p className="text-md">
           Good deals. <a href="#" className="button">Learn more</a> 
           <a>Learn more</a>
          </p>
        </div>

      </section>
      
        </>
    )
}