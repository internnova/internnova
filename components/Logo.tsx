import React from "react"

type LogoProps = {
  big?: boolean
}

export const Logo = ({ big }: LogoProps) => {
  if (big) {
    return <img src="/images/logo.png" alt="" className="h-32 w-32" />
  }
  return <img src="/images/logo.png" alt="" className="h-16 w-16" />
}
