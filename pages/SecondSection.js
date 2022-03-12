import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function SecondSection() {
    return (
        <>
       {/* Section A*/}
        <section className="box box-b bg-primary grid-col-2">
        <Image 
        src="/pic1.jpeg" 
        width={1440}
        height={800}
        alt="navimage"
        />
         <div className="box-text">
             <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="" className="btn btn-dark">Just order</a>
        </div>
      </section>


      {/* Section B*/}
      <section className="box box-b bg-secondary grid-col-2 reverse-grid" >
        <Image 
        src="/pic2.jpeg" 
        width={1440}
        height={800}
        alt="sectionimage"
        />
         <div className="box-text">
         <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="" className="btn btn-dark">Just order</a>
        </div>
      </section>


      {/* Section C*/}
      <section className="box box-b bg-primary grid-col-2">
        <Image 
        src="/pic2.jpeg" 
        width={1440}
        height={800}
        alt="sectionimage"
        />
         <div className="box-text">
         <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="" className="btn btn-dark">Just order</a>
        </div>
      </section>


    {/* Section D*/}
      <section className="box box-b bg-secondary grid-col-2 reverse-grid">
        <Image 
        src="/pic3.jpeg" 
        width={1440}
        height={800}
        alt="sectionimage"
        />
         <div className="box-text">
         <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="" className="btn btn-dark">Just order</a>
        </div>
      </section>


    {/* Section Last section*/}

    <section className="box box-f grid-col-2">
      <div>
      <Image 
        src="/pic6.jpeg" 
        width={1440}
        height={800}
        alt="sectionimage"
        />
          <div className="bg-primary py-lg">
        <div className="box-text">
         <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="" className="btn btn-dark">Just order</a>
        </div>
        </div>
      </div>
      <div className="reverse-grid">
      <Image 
        src="/pic7.jpeg" 
        width={1440}
        height={800}
        alt="sectionimage"
        />
        <div className=" bg-primary py-lg">
        <div className="box-text">
         <h2 className="text-md">Products newly added</h2>
             <p className="text-sm">The most improved versions of quality furniture at a great price</p>
             <a href="#" className="btn btn-dark">Just order</a>
        </div>
        </div>
         

        </div>
      </section>
        </>
    )
}