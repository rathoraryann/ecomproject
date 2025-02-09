import {LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid} from "react-icons/lia"
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";
const data = [
    {
        title: "Free Shippping",
        icon: <LiaShippingFastSolid/>
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid/>
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid/>
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall/>
    }
]

const FeatureSection = () =>{
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map(el=> <FeatureCard key={el.title} icon={el.icon} title={el.title}/>)}
            </div>
        </div>
    )
}

export default FeatureSection;