import Image from 'next/image'
import Link from "next/link";
import {Header} from "@/src/shared/ui";
import {Hero} from "@/src/widgets/hero";
import {HomeMenu} from "@/src/widgets/home-menu";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <HomeMenu/>
        </>
    )
}
