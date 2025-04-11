import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion, useIsPresent, AnimatePresence } from 'framer-motion';
import HomePage from './Pages/Home/HomePage';
import ContactPage from './Pages/Contact/ContactPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFound from './Pages/NotFound/NotFound';
import BlogPage from './Pages/Blog/BlogPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import ArticleDetailPage from './Pages/articleDetail/ArticleDetailPage';
import ProfilePage from './Pages/Profile/ProfilePage';
import AdminLayout from './Pages/admin/AdminLayout';
import Admin from './Pages/admin/screens/Admin';
import Comments from './Pages/admin/screens/comments/Comments';
import ManagePosts from './Pages/admin/screens/posts/ManagePosts';
import EditPost from './Pages/admin/screens/posts/EditPost';
import About from './Pages/About/About';
import Portfolio from './Pages/PortFolio/Portfolio';
import usePreLoading from './Hooks/usePreLoading';
import PreLoading from './Components/PreLoading/PreLoading';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Forgot from './Pages/Forgot/Forgot';
import Topic from './Pages/TopicArticles/Topic';
import useDarkMode from './Hooks/useDarkMode';
import useScrollCheck from './Hooks/useScrollCheck';
import { Toaster } from 'react-hot-toast';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const preLoading = usePreLoading();
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { isVisible } = useScrollCheck();

  return (
    <>
      {preLoading ? (
        <PreLoading isDarkMode={isDarkMode} />
      ) : (
        <>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isVisible={isVisible} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage isDarkMode={isDarkMode} />} />
            <Route path='/resume' element={<ResumePage isDarkMode={isDarkMode} />} />

            <Route path='/portfolio' element={<Portfolio />} />

            <Route path='/about-me' element={<About />} />
            <Route path='/test' element={<ExtremeScrollEffect />} />
            <Route path='/blog'>
              <Route index element={<BlogPage />} />
              <Route path=':topic'>
                <Route index element={<Topic />} />
                <Route path=':slug' element={<ArticleDetailPage />} />
              </Route>
              <Route path='forget-password' element={<Forgot />} />
              <Route path='register' element={<RegisterPage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='dashboard' element={<AdminLayout />}>
                <Route index element={<Admin />} />
                <Route path='comments' element={<Comments />} />
                <Route path='posts/manage' element={<ManagePosts />} />
                <Route path='posts/manage/edit/:slug' element={<EditPost />} />
              </Route>
              <Route path='**' element={<NotFound />} />
            </Route>
            <Route path='/*' element={<Navigate to='/' replace={true} />} />
          </Routes>
          <Toaster />
          <Footer />
        </>
      )}
    </>
  );
}

gsap.registerPlugin(ScrollTrigger);

const ExtremeScrollEffect = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(sectionsRef.current).forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: true,
            markers: true // Remove this line in production
          }
        }
      );
    });
  }, []);

  return (
    <div className='min-h-screen bg-gray-100'>
      <section ref={(el) => (sectionsRef.current[0] = el)} className='h-screen flex items-center justify-center text-2xl bg-red-300'>
        Section 1
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)} className='h-screen flex items-center justify-center text-2xl bg-green-300'>
        Section 2
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} className='h-screen flex items-center justify-center text-2xl bg-blue-300'>
        Section 3
      </section>
    </div>
  );
};

export default App;
