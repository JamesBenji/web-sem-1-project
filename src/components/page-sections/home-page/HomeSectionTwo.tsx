import WorldMapTransparentPhoto from '../../../assets/images/world-map-transparent.svg'
import HomeFloatingCommunity from './HomeFloatingCommunity'

export const HomeSectionTwo = () => {
    return (
        <div className="bg-brandBlue-50 py-18">
            <h2 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5">A Recipe for <span className="text-brand-600">

                <u className="relative no-underline inline-block px-1 py-4">
                    Every Baby
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
                            stroke="#510424"
                            strokeWidth="6"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </u>

            </span></h2>
            <h2 className="text-[9vw] font-bold leading-none tracking-tight text-brand-950 my-5">From  <span className="text-brand-600">Every Country</span>.</h2>

            <div>
                <HomeFloatingCommunity />

            </div>

        </div>)
}