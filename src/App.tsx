// import { NavBar } from "./components/layout/NavBar";
// import IngredientsPhoto from "./assets/images/ingredients.jpg"
// import SoupPhoto from "./assets/images/soup.jpg"
// import BabyEatingPhoto from "./assets/images/baby-eating-food.jpg"
// import HappyBaby from "./assets/images/happy-baby-1.jpg"
// import { Button } from "./components/interactives/Button";

// function App() {


//   return (
//     <div className="min-h-screen bg-gray-50 font-sans px-28">
//       <NavBar />

//       {/* Main Grid */}
//       <div className="block mx-auto ">
//         <main className="p-0 grid grid-cols-3 grid-rows-[3fr_2fr] gap-4 h-[calc(100vh-72px)]">

//           {/* Row 1, Col 1 — Ingredients */}
//           <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">
//             <img src={IngredientsPhoto} alt="Ingredients" className="w-full h-full object-cover" />
//           </div>

//           {/* Row 1, Col 2 — Dish */}
//           <div className="bg-stone-900 rounded-2xl shadow-md overflow-hidden">
//             <img src={SoupPhoto} alt="Dish" className="w-full h-full object-cover" />
//           </div>

//           {/* Row 1, Col 3 — Feeding Time */}
//           <div className="bg-amber-100 rounded-2xl shadow-md overflow-hidden">
//             <img src={BabyEatingPhoto} alt="Feeding Time" className="w-full h-full object-cover" />
//           </div>

//           {/* Row 2, Col 1–2 — Search (spans 2 cols) */}
//           <div className="col-span-2 rounded-2xl overflow-hidden flex flex-col ">
//             <h1 className="font-semibold text-8xl text-brand-900">
//               Find Your Baby's{" "}
//               <span className="">Next Dish</span>
//             </h1>
//             <div className="flex items-center justify-between bg-white border border-brand-400 rounded-full px-3 py-2 mt-4 w-[90%] gap-2">
//               <input
//                 type="text"
//                 placeholder="Search for recipes..."
//                 className="bg-transparent outline-none  text-stone-700 text-lg placeholder-stone-400 placeholder:font-light px-2 w-full"
//               />
//               <Button>Search</Button>
//             </div>
//           </div>

//           {/* Row 2, Col 3 — Happy Baby */}
//           <div className="bg-green-50 rounded-2xl shadow-md overflow-hidden">
//             <img src={HappyBaby} alt="Happy Baby" className="w-full h-full object-cover" />
//           </div>

//         </main>
//       </div>
//     </div>
//   )
// }

// export default App

import { motion, type Variants } from "framer-motion";
import { NavBar } from "./components/layout/NavBar";
import IngredientsPhoto from "./assets/images/ingredients.jpg"
import SoupPhoto from "./assets/images/soup.jpg"
import BabyEatingPhoto from "./assets/images/baby-eating-food.jpg"
import HappyBaby from "./assets/images/happy-baby-1.jpg"
import { Button } from "./components/interactives/Button";

const Squiggle = () => (
  <div className="absolute left-0 right-0 overflow-hidden" style={{ top: "60%" }}>
    <svg
      viewBox="0 0 1200 40"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0,20 C50,5 100,35 150,20 C200,5 250,35 300,20 C350,5 400,35 450,20 C500,5 550,35 600,20 C650,5 700,35 750,20 C800,5 850,35 900,20 C950,5 1000,35 1050,20 C1100,5 1150,35 1200,20"
        fill="none"
        stroke="#f6339a"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-300 0"
          to="0 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.55 },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans px-28">
      <NavBar />

      <div className="block mx-auto">
        <motion.main
          className="p-0 grid grid-cols-3 grid-rows-[3fr_2fr] gap-4 h-[calc(100vh-72px)]"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1, Col 1 — Ingredients */}
          <motion.div variants={imageVariants} className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">
            <img src={IngredientsPhoto} alt="Ingredients" className="w-full h-full object-cover" />
          </motion.div>

          {/* Row 1, Col 2 — Dish */}
          <motion.div variants={imageVariants} className="bg-stone-900 rounded-2xl shadow-md overflow-hidden">
            <img src={SoupPhoto} alt="Dish" className="w-full h-full object-cover" />
          </motion.div>

          {/* Row 1, Col 3 — Feeding Time */}
          <motion.div variants={imageVariants} className="bg-amber-100 rounded-2xl shadow-md overflow-hidden">
            <img src={BabyEatingPhoto} alt="Feeding Time" className="w-full h-full object-cover" />
          </motion.div>
          
          

          {/* Row 2, Col 1–2 — Hero text */}
          <motion.div variants={heroVariants} className=" col-span-2 rounded-2xl overflow-hidden flex flex-col">
            <h1 className="font-semibold text-8xl text-brand-900">
              Find Your Baby's{" "}
              <span className="">Next Dish</span>
            </h1>
            <div className="flex items-center justify-between bg-white border border-brand-400 rounded-full px-3 py-2 mt-4 w-[90%] gap-2">
              <input
                type="text"
                placeholder="Search for recipes..."
                className="bg-transparent outline-none text-stone-700 text-lg placeholder-stone-400 placeholder:font-light px-2 w-full"
              />
              <Button>Search</Button>
            </div>
          </motion.div>

          {/* Row 2, Col 3 — Happy Baby */}
          <motion.div variants={imageVariants} className="bg-green-50 rounded-2xl shadow-md overflow-hidden">
            <img src={HappyBaby} alt="Happy Baby" className="w-full h-full object-cover" />
          </motion.div>

        </motion.main>
      </div>
    </div>
  );
}

export default App;