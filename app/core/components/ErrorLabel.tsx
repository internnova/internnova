import React from "react"

export const ErrorLabel = ({ error }: { error: string }) => (
  <div role="alert" className="pt-2">
    <p className="text-sm italic text-red-500">{error}</p>
  </div>
)
