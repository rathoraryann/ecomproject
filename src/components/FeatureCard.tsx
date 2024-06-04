interface propsType{
    title: string,
    icon: React.ReactNode,
}

const FeatureCard:React.FC<propsType> =({title, icon})=>{
    return(
        <div className="flex items-center gap-4">
            <div className="bg-gray-300 text-accentDark grid place-items-center rounded-full w-[50px] h-[50px] text-[24px]">{icon}</div>
            <div className="">
                <h3 className="text-accent font-medium text-xl">{title}</h3>
            </div>
        </div>
    )
};

export default FeatureCard;