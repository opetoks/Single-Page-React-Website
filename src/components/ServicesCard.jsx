import { quotes } from "../assets";

const ServicesCard = ({ service, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[260px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    
    <img src={img} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    <div className="flex flex-row">
      <div className="flex flex-col ml-10">
        <h4 className="absolute font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {service}
        </h4>
      </div>
    </div>
  </div>
);


export default ServicesCard;