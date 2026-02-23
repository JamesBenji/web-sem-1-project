import { motion } from "framer-motion";
import WorldMapTransparentPhoto from '../../../assets/images/world-map-transparent.svg'

const GRID_SIZE = 10;
const photos = Array.from({ length: 100 }, (_, i) => {
    const depth = Math.random();
    const row = Math.floor(i / GRID_SIZE);
    const col = i % GRID_SIZE;

    const xBase = (col * 10) + 5;
    const yBase = (row * 10) + 5;

    return {
        id: i,
        src: `https://i.pravatar.cc/150?u=baby${i}`,
        x: xBase + (Math.random() - 0.5) * 8,
        y: yBase + (Math.random() - 0.5) * 8,
        driftX: [(depth * 30) - 15, (depth * -30) + 15],
        driftY: [(depth * 30) - 15, (depth * -30) + 15],
        duration: 12 + Math.random() * 8 - (depth * 5),
        size: 35 + (depth * 65), // Range: 35px to 100px
        blur: depth < 0.3 ? "blur-[3px]" : depth > 0.45 ? "blur-0" : "blur-[1px]",
        baseOpacity: 0.5 + (depth * 0.5), // Forces front photos to be 1.0 opacity
        zIndex: Math.round(depth * 100),
    };
});

export default function HomeFloatingCommunity() {
    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="w-full bg-brandBlue-600 my-8 h-[80dvh] bg-center bg-no-repeat bg-contain relative overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: `url(${WorldMapTransparentPhoto})` }}
            >
                {photos.map((photo) => (
                    <motion.div
                        key={photo.id}
                        className={`absolute ${photo.blur} flex items-center justify-center`}
                        style={{
                            zIndex: photo.zIndex,
                            left: `${photo.x}%`,
                            top: `${photo.y}%`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: photo.baseOpacity,
                            x: [photo.driftX[0], photo.driftX[1], photo.driftX[0]],
                            y: [photo.driftY[0], photo.driftY[1], photo.driftY[0]],
                        }}
                        whileHover={{
                            opacity: 1,
                            filter: "blur(0px)",
                            zIndex: 500
                        }}
                        transition={{
                            opacity: { duration: 0.2 },
                            x: { duration: photo.duration, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: photo.duration, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.8,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="rounded-full border-2 border-white shadow-xl overflow-hidden cursor-pointer bg-white"
                            style={{
                                width: `${photo.size}px`,
                                height: `${photo.size}px`
                            }}
                        >
                            <img
                                src={photo.src}
                                alt="Community member"
                                className="w-full h-full object-cover select-none"
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}