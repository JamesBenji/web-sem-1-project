
import BouncingFruitsGif from "../../assets/gifs/bouncing-fruits.gif"
import HeartIcon from "../../assets/icons/heart.png"
import FeedingBabyVideo from "../../assets/videos/feeding-baby.webm"
import SoupVideo1 from "../../assets/videos/soup-video-1.mp4"
import CuttingVegetablesVideo from "../../assets/videos/cutting-vegetables.mp4"
import { Search } from "lucide-react"

function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-brand-50 font-sans text-brand-950 selection:bg-brand-200 overflow-hidden relative">

      {/* Decorative Wavy Lines in Brand Accent */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blur-[1px]"
        >
          <path
            d="M0 160 C 250 80 450 240 650 160 S 1000 80 1200 160"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
          />

          <path
            d="M0 260 C 200 320 500 200 700 260 S 1050 320 1200 260"
            fill="none"
            stroke="#fce7f3"
            strokeWidth="2"
          />

          <path
            d="M0 370 C 300 330 600 410 900 370 S 1100 330 1200 370"
            fill="none"
            stroke="#fda5d5"
            strokeWidth="2"
          />
        </svg>
      </div>      

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[75vh] px-12 relative z-10">
      
        <div className="max-w-7xl w-full">

          {/* Headline Line 1 */}
          <div className="flex items-center gap-6 mb-2">
            <div className="w-48 h-36 rounded-full overflow-hidden border-4 border-white shadow-brand-100 shadow-2xl shrink-0">
              <video
                src={CuttingVegetablesVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-[50%_75%]"
              />
            </div>
            <h1 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950">
              From First
            </h1>
          </div>

          {/* Headline Line 2 */}
          <div className="flex items-center gap-6 mb-2">
            <h1 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950">
              <u className="relative no-underline inline-block px-1">
                Bite to
                <svg
                  className="absolute left-0 -bottom-3 w-full h-6 overflow-visible pointer-events-none"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 10 
                      C 5 18, 10 2, 15 10 
                      S 25 2, 30 10 
                      S 40 2, 45 10 
                      S 55 2, 60 10 
                      S 70 2, 75 10 
                      S 85 2, 90 10 
                      S 95 2, 100 10"
                    fill="none"
                    stroke="#f6339a"
                    strokeWidth="6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </u>
            </h1>
            <div className="grow h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ">
              <video
                src={FeedingBabyVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-[50%_75%]"
              />
            </div>
          </div>

          {/* Headline Line 3 */}
          <div className="flex items-center gap-6">
            <div className="w-[30%] h-48 rounded-4xl overflow-hidden border-4 border-white shadow-2xl shrink-0">
              <video
                src={SoupVideo1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-[50%_65%]"
              />
            </div>
            <h1 className="text-[9vw] font-bold leading-none tracking-tight text-brand-600">
              Favorite Food <span>.</span>
            </h1>

          </div>

          {/* Sub-headline & Rotating Badge */}
          <div className="flex justify-between items-center mt-0 ">
            <div className="absolute w-40 h-40  flex items-center justify-center top-0 right-16">

              <div className="absolute inset-0 border-2 border-dashed border-brand-300 rounded-full animate-[spin_20s_linear_infinite] opacity-40"></div>

              <div className="absolute inset-4 border border-brand-200 rounded-full animate-[spin_10s_linear_reverse_infinite] opacity-60"></div>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 group cursor-pointer">
                <img
                  src={BouncingFruitsGif}
                  alt="Bouncing Fruits"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xl">
                    <img
                      src={HeartIcon}
                      alt="Heart Icon"
                    />
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[6px] font-black uppercase tracking-[0.4em] fill-brand-700">
                    <textPath xlinkHref="#circlePath">
                      Healthy Everyday • Healthy Everyday •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* New section after hero */}
            {/* <div className="max-w-lg text-right">
              <p className="text-brand-800 text-xl font-medium leading-tight mb-2">
                The ultimate culinary partner for the transition to solids.
              </p>
              <p className="text-brand-600 text-sm leading-relaxed max-w-sm ml-auto">
                Explore chef-curated recipes, interactive kitchen tools, and expert-led
                nutrition plans designed to create a joyful eating environment.
              </p>
            </div> */}


          </div>

        </div>


      </main>

      
{/* 
      <div className="relative h-32 w-full overflow-hidden bg-white">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300%] bg-white rounded-[100%] border-t-4 border-brand-100 shadow-[0_-20px_50px_-20px_rgba(246,51,154,0.1)]"></div>
      </div> */}

      {/* <div className="bg-white">
        <div className="py-8 text-center">
          <h2 className="text-[9vw] font-semibold ">Your Culinary Partner</h2>
        </div>

        <div className="border-8 border-white shadow-brand-100 shadow-md rounded-full overflow-hidden">
          <img src={HappyBabyPhoto} alt="Happy baby" />
        </div>
      </div> */}



      {/* <section className="bg-white py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">Expert Advisory</h3>
              <p className="text-brand-700 leading-relaxed">
                Navigate the journey to solid food with pediatric-approved nutrition plans and allergen safety guides.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HeroSection;