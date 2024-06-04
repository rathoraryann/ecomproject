import { LuMailOpen } from "react-icons/lu";

const Newsletter = () =>{
    return (
        <div className="bg-accentDark mt-16">
            <div className="container py-8 flex flex-col justify-between items-center gap-4 text-white md:flew-row">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen className="text-[60px]"/>
                    <div className="">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            Sign up to Our Newletters
                        </h3>
                        <p>...and receive $49 coupon for first shopping</p>
                    </div>
                </div>
                <div className="w-full relative max-w-[500px]">
                    <input type="text" placeholder="Your Email Address..." className="py-4 px-6 w-full rounded-full" />
                    <button className="bg-accentDark absolute right-2 py-2 px-4 rounded-full top-[50%] translate-y-[-50%] hover:bg-accent">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;