import { shoe4, shoe5, shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us" className="max-container max-sm:mt-12 flex justify-between gap-10 items-center w-full max-lg:flex-col  ">

            <div className=" flex flex-col ">
                <h2 className="text-4xl font-palanquin font-bold mb-4">We Provide You <span className="text-coral-red">Super <br /> Quality </span>
                    Shoes</h2>

                <p className="mt-4 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim animi vitae culpa assumendaLorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim animi vitae culpa assumenda,<br /><br /> eligendi aliquid minus quia numquam dignissimos earum quo doloremque explicabo molestiae odit debitis labore voluptates veniam.</p>

                <div className="mt-11 flex justify-center items-center flex-1">
                    <Button label="view details" />

                </div>
            </div>

            <div>
                <img src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain" />
            </div>

        </section>
    )
}

export default SuperQuality