"use client"
import WidgetsPage from "@/components/Cards/page";
import MainContent from "@/components/HomeMainSection/MainContent";
import {HomeContainer} from "@/app/styled.components";
import ContactForm from "@/components/ContactForm/ContactForm";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
        <HomeContainer>
            <NavBar/>
            <WidgetsPage/>
            <MainContent/>
            <ContactForm/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home;
