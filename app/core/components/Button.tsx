interface ButtonProps {
  children: string
  onClick?: () => void
  options?: string
  bg?: string
  foreground?: string
}

export const Button = ({
  bg = "bg-primary",
  foreground = "text-white",
  children,
  onClick,
  options,
  ...props
}: ButtonProps) => (
  <button
    className={`my-2 sm:text-sm rounded-sm ${bg} ${foreground} px-4 py-2 rounded-md ${options}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
