import React, { memo } from 'react'

const SectionCard = memo(({section}) => {
  return (
    <div className="flex items-center justify-center border border-black rounded-md m-2 w-48 cursor-pointer">
        <span className="">{section.title}</span>
    </div>
  )
})

export default SectionCard