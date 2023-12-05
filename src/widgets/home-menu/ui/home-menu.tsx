import Image from "next/image";
import {MenuItem} from "@/src/widgets/home-menu/ui/menu-item";
import {SectionHeader} from "@/src/shared/ui";

export const HomeMenu = () => {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full ">
                <div className="absolute left-0 -top-24 text-left -z-10">
                    <Image src="/sallad1.png" alt="sallad" width={100} height={100} className=" object-contain"/>
                </div>
                <div className="h-48 w-max -top-24 absolute right-0 -z-10 ">
                    <Image src="/sallad2.png" alt="sallad" width={100} height={100} className=" object-contain"/>
                </div>
            </div>
            <SectionHeader subtitle="Check out" title="Menu"/>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    )
}