import { servicescard  } from "../constants";
import styles from "../styles";
import ServicesCard from "./ServicesCard";

const Testimonials = () => (
  <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center
     md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Take a closer look, <br className="sm:block hidden" /> One app does all
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {servicescard.map((card) => <ServicesCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;