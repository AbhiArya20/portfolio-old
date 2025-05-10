import ContactCards from '@components/contact-form/contact-cards';
import ContactForm from '@components/contact-form/contact-form';
import HeroSection from '@components/hero-section/hero-section';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import type { DarkModeHook } from '@hooks/use-dark-mode';
import ProjectSection from "@/components/projects-section/project-section";
import Motivation from "@/components/motivation/motivation";
import styles from "@/components/home/home.module.css";

export default function Home({ isDarkMode, toggleDarkMode }: DarkModeHook) {
    return (
        <>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <HeroSection />
            <main className={styles.main}>
                <div className={styles.container}>
                    <ProjectSection />
                    <Motivation />
                    <ContactCards />
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
