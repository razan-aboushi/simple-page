"use client"
import dynamic from "next/dynamic";
import {CardsContainer} from "@/components/Cards/styled.components";

const OrangeCardComp = dynamic(() => import("@/components/Cards/RedCard/RedCard"), {suspense: false});
const YellowCardComp = dynamic(() => import("@/components/Cards/YellowCard/YellowCard"), {suspense: false});


const CardsPage = () => {
    return (
        <CardsContainer>
            <OrangeCardComp/>
            <YellowCardComp/>
        </CardsContainer>
    )
}

export default CardsPage;