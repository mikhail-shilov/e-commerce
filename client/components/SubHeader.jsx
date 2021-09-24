import React from 'react'

import WigetSorting from './header/WigetSorting'

const SubHeader = (props) => {
  return (
    <div className="subheader flex flex-col items-center px-2 mx-20 mb-4">
      <h2 className="text-lg">{props.title}</h2>
      <WigetSorting acSortMode={props.acSortMode} acOrder={props.acOrder} />
    </div>
  )
}

export default SubHeader
