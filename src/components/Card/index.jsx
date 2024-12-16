import * as React from "react"

export const Card   =({
className,
contentCard,
})=> {
  return (
    <div
    className={`
    bg-white
    rounded-md
    py-1
    shadow-x1
    ${className}
    `}
    >
{contentCard}
    </div>
  )
}
