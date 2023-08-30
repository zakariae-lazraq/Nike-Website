import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
    return (
        <section className="flex justify-center 
         items-center max-xl:flex-col-reverse gap-10 max-container ">
            <div className="flex-1">
                <img src={offer}
                    width={773}
                    height={687}
                    className="object-contain w-full " />
            </div>

            <div className=" flex flex-col ">
                <h2 className="text-4xl font-palanquin font-bold mb-4">Special <span className="text-coral-red">Offer</span></h2>

                <p className="mt-4 lg:max-w-lg info-text">Special shoes hold a unique place in our wardrobes and hearts. They're the pair that marks a milestone – be it the elegant dance of wedding shoes. <br /><br />
                    Every step taken in special shoes feels like a journey of its own. They're the embodiment of personal style, passions, and adventures.</p>

                <div className="mt-11 flex  flex-wrap gap-4">
                    <Button label="Shop Now" iconURL={arrowRight} />
                    <Button label="Learn More"
                        backgroundColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray" />

                </div>
            </div>


        </section>
    )
}

export default SpecialOffer