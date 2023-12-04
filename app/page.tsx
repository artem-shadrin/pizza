import Image from 'next/image'
import Link from "next/link";
import {Header} from "@/src/shared/ui";
import {Hero} from "@/src/widgets/hero";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
        </>
    )
}
