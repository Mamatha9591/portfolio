interface Props {
  label: string
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({ label, title, subtitle, light = false }: Props) {
  return (
    <div className="mb-12">
      <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${light ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}`}>
        {label}
      </p>
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-gray-50'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 rounded-full ${light ? 'bg-blue-400' : 'bg-blue-600 dark:bg-blue-500'}`} />
    </div>
  )
}
