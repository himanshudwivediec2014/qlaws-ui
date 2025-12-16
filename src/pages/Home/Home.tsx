import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import styles from "./Home.module.css";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import TeamsSection from "./components/TeamsSection/Teams";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from "../../shared/components";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialSection";
import FAQSection from "./components/FAQSection/FAQSection";

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.banner} flex flex-col items-center`}>
                <Navbar />

                <Banner />

                <ChallengesSection />

                <SolutionsSection />

                <div id="about">
                    <TeamsSection />
                </div>

                <div id="features" className="w-full">
                    <ToolsSection />
                </div>

                <BenefitsSection />

                <div id="testimonial" className="w-full">
                    <TestimonialsSection />
                </div>

                <div id="faq" className="w-full">
                    <FAQSection />
                </div>

                <Footer />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default Home;
