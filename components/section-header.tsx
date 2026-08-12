interface SectionHeaderProps {
  label: string
  title: string
  description: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="block text-xs sm:text-sm font-mono text-purple-500 dark:text-purple-400 tracking-[0.2em] uppercase mb-3">
        {label}
      </span>
      <h2 className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold">
        <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
          {title}
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full" />
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-6 px-2">
        {description}
      </p>
    </div>
  )
}
