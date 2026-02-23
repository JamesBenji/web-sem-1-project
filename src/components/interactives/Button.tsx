/**
 * DO NOT USE. STILL IN DEVELOPMENT
 */

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="
      px-6 py-3 rounded-full
      bg-linear-to-b from-brand-600 to-brand-800
      border border-brand-600
      text-white font-semibold text-sm
      hover:from-brand-600 hover:to-brand-700
      transition-all duration-300
    ">
      {children}
    </button>
  );
};