interface ButtonProps {
  children: string
  onClick?: () => void
  options?: string
  bg?: string
  foreground?: string
}

export const Button = ({
  bg = "bg-[#5c6cff]",
  foreground = "text-[#ffffff]",
  children,
  onClick,
  options,
  ...props
}: ButtonProps) => (
  <button
    className={`py-2 text-[16px] rounded-md ${bg} ${foreground} ${options}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
