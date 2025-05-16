import React, { useRef, useEffect } from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import JobPostingSection from '../../components/student/JobPostingSection';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import StepsSection from '../../components/student/StepsSection';
import ErrorBoundary from "../../components/student/ErrorBoundary";
import Navbar from '../../components/student/Navbar';
import { assets } from '../../assets/assets';

const Home = () => {
  const jobsRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (jobsRef.current) {
        jobsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToJobsSection', scrollHandler);
    return () => window.removeEventListener('scrollToJobsSection', scrollHandler);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-7 text-center px-4 md:px-8 lg:px-16">
        <Hero />
        <ErrorBoundary>
          <Companies />
        </ErrorBoundary>
        <div ref={jobsRef}>
          <JobPostingSection />
        </div>
        <CoursesSection />
      </div>
      {/* New Video Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-black">
        <video
          className="w-auto h-full max-w-full object-contain"
          src={assets.videolms}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </section>
      {/* Other sections below the video */}
      <StepsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
