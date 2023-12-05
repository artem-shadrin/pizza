import {Header, SectionHeader} from "@/src/shared/ui";
import {Hero} from "@/src/widgets/hero";
import {HomeMenu} from "@/src/widgets/home-menu";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <HomeMenu/>
            <section className="text-center my-16">
                <SectionHeader subtitle="Our story" title="About"/>
             <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4 " >
                 <p >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet consequatur deserunt ipsa
                     itaque minima obcaecati odio repudiandae ullam velit. Deleniti inventore maxime nostrum tenetur!
                     Blanditiis deleniti ducimus fuga nesciunt.
                 </p>
                 <p >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet consequatur deserunt ipsa
                     itaque minima obcaecati odio repudiandae ullam velit. Deleniti inventore maxime nostrum tenetur!
                     Blanditiis deleniti ducimus fuga nesciunt.
                 </p>
                 <p >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet consequatur deserunt ipsa
                     itaque minima obcaecati odio repudiandae ullam velit. Deleniti inventore maxime nostrum tenetur!
                     Blanditiis deleniti ducimus fuga nesciunt.
                 </p>
             </div>
            </section>
            <section className="text-center">
                <SectionHeader subtitle="Don't hesitate" title="Contact us"/>
                <div className="mt-8">
                    <a className="text-4xl underline text-gray-500" href="tel:79517895956">+7(951)-789-59-56</a>
                </div>
            </section>
            <footer className="border-t p-8 text-center mt-16" >
                &copy; 2023 All rights reserved
            </footer>
        </>
    )
}
