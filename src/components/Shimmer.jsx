export default function Shimmer({ className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-slate-200/60 dark:bg-white/10 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent" />
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  )
}
