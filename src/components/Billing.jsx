import { apple, bill, google, brijsavefast } from '../assets';
import styles, { layout } from '../styles'

const billing = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={brijsavefast} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 buttom-0 w-[50%] rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Make payments across <br className="sm:block hidden" /> Africa with ease
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Travelling, shopping, paying bills, sending money back home, you name it! We’ve made it affordable, 
        friction-free, and painless to make payments anywhere in Africa. Simply fund your balance via bank, 
        mobile money, or card and you are good to go. 
        We’ve got you covered every step of the way.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>

  );

export default billing