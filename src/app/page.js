'use client';
import Homepage from './Home/home';
import Projects from './Projects/page';
import Knowledge from './Knowledge/page';
import Contact from './Contact/page';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen flex items-center justify-center text-gray-700 dark:text-white">
          <Homepage />
        </section>
      </div>

      <AnimatedSection className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="px-10 md:px-20 lg:px-40">
          <section id="knowledge" className="text-center text-gray-700 dark:text-white">
            <Knowledge />
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="px-10 md:px-20 lg:px-40">
          <section id="projects" className="text-center text-gray-700 dark:text-white">
            <Projects />
          </section>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="px-10 md:px-20 lg:px-40">
          <section id="contact" className="text-center text-gray-700 dark:text-white">
            <Contact />
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
}