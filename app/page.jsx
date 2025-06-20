import Landing from '../components/Landing';
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import ClientScroll from '../components/ClientScroll';
import InfiniteScroller from './components/InfiniteScroller';
import { FeaturesSectionDemo } from './components/feature-section';
import StackedCardsScroll from './components/StackingCards';
import GramerzComponent from './components/about-us';

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full relative">
        <Landing />
        
        {/* Section Break - Gradient Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Glowing Divider Element */}
      <div className="relative h-16 w-full -mt-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>

      <section className="w-full bg-black relative -mt-16 pt-16">
        <ClientScroll />
      </section>


      <section className="w-full bg-black py-24 px-4 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">AnextInfotect</span> delivers digital precision
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            At Anext Infotech, we merge data-driven digital marketing with smart tech solutions to help businesses grow and scale. From SEO, PPC, and social media to AI-driven automation, web development, and analytics, our future-ready strategies are built to deliver real ROI and keep your brand ahead of the curve.
          </p>

          <div className="group">
            <button className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 border-2 border-white hover:bg-transparent hover:text-white">
              Start Building →
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="w-full bg-black py-12">
        <div >
          
          <InfiniteScroller />
        </div>
      </section>

      <FeaturesSectionDemo/>
      
      <StackedCardsScroll />

      <GramerzComponent/>
    </main>
  );
} 