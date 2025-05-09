import ContactCards from '@components/contact-form/contact-cards';
import ContactForm from '@components/contact-form/contact-form';
import FirstSegment from '@components/first-section/first-section';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';

import SecondSection from '@components/second-section/second-section';
import SectionWrapper from '@components/section-wrapper/section-wrapper';
import useDarkMode from '@hooks/use-dark-mode';

export default function Home() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <FirstSegment />
      <SecondSection />
      <div className='relative page-background'>
        {isDarkMode && (
          <div className='hidden md:block fixed left-[-30%] h-[50vh] w-[50%] top-[50%] rounded-full bg-[var(--color-active-opposite)] overflow-hidden filter drop-shadow-[0_0_100rem_var(--color-active-opposite)] blur-[10rem]'></div>
        )}
        {isDarkMode && (
          <div className='hidden md:block fixed right-[-30%] h-[50vh] w-[50%] top-0 rounded-full bg-[var(--color-active)] overflow-hidden filter drop-shadow-[0_0_100rem_var(--color-active-opposite)] blur-[20rem]'></div>
        )}
        <SectionWrapper>
          <ContactCards />
          <ContactForm />
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}
