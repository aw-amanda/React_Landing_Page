interface ContainerProps {
  children?: React.ReactNode
  title?: string
  className?: string
  description?: string
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-3/4 px-5 sm:px-8 md:px-14 lg:px-5 box-style ${className}`}
    >
      {children}
    </div>
  )
}