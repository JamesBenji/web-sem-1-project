import { Button } from "../interactives/Button"

export const NavBar = () => {
    return (
        <nav className="bg-gray-50 px-0 py-3 flex items-center justify-between">
        <span className="text-2xl font-bold tracking-wide text-brand-700 font-molle">MummyCares</span>
        <div className="flex gap-8 text-sm tracking-widest uppercase">
          <a href="#" className="hover:text-brand-400 transition-colors">Home</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Recipes</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Nutrition Plans</a>
          <a href="#" className="hover:text-brand-400 transition-colors">About</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Contact</a>
        </div>
        <Button>Find Recipes</Button>
        {/* <button className="bg-brand-500 hover:bg-brand-400 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-colors">
          Find Recipes
        </button> */}
      </nav>
    )
}