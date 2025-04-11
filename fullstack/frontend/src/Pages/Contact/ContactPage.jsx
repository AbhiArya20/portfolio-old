import React from 'react';
import SectionWrapper from '../../Components/SectionWrapper/SectionWrapper';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactCards from '../../Components/ContactForm/ContactCards';
export default function ContactPage({ isDarkMode }) {
  return (
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
  );
}
