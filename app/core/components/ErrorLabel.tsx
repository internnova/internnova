import React from "react"

export const ErrorLabel = ({ error }: { error: string }) => (
  <div role="alert" className="mt-2">
    <p className="text-red-500 text-sm italic">{error}</p>
  </div>
)
