import React from "react"

export const ErrorLabel = ({ error }: { error: string }) => (
  <div role="alert" className="mt-2">
    <p className="text-sm italic text-red-500">{error}</p>
  </div>
)
