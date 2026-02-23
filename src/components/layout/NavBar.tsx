import { Search } from "lucide-react"

export const NavBar = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-12 py-8 relative z-10 bg-brand-50 font-sans text-brand-950 selection:bg-brand-200">
      <div className="text-2xl font-bold tracking-tighter uppercase text-brand-900">Tiny Spoon.</div>
      <div className="flex align-middle justify-center gap-8">
        <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-brand-700 my-auto ">
          <a href="/recipes" className="hover:text-brand-500 transition-colors">Recipes</a>
          <a href="/about" className="hover:text-brand-500 transition-colors">About</a>
          <a href="/contact" className="hover:text-brand-500 transition-colors">Contact</a>
        </div>

        <button className="flex align-baseline bg-brand-900 text-brand-50 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-700 transition-all shadow-md rounded-full border-3 border-white shadow-brand-200">
          <Search />&nbsp;<span className="my-auto">Find Recipes</span>
        </button>
      </div>
    </nav>
  )
}