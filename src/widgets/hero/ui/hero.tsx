import Image from "next/image";
import {Right} from "@/src/shared/icons/right";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything <br/>
                    is better <br/>
                    with a&nbsp;<span className="text-primary">Pizza</span></h1>
                <p className="my-4 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                    aut culpa dolorum eaque esse natus
                    quam ullam voluptatem. Alias, voluptate.
                </p>
                <div className="flex gap-4 text-sm font-semibold" >
                    <button className="flex gap-2 bg-primary items-center uppercase px-8 py-2  rounded-full text-white whitespace-nowrap" >
                        Order now
                        <Right/>
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600  items-center whitespace-nowrap">
                        Learn more
                        <Right/>
                    </button>
                </div>
            </div>
            <div className=" relative">
                <Image src="/pizza.png" alt="pizza" className="object-contain w-full" width="360" height="296"/>
            </div>
        </section>
    )
}