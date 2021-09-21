import React from 'react'

import WigetSorting from './header/WigetSorting'

const SubHeader = (props) => {
  return (
    <div className="subheader flex flex-col items-center mt-4 mx-20 px-2 py-2">
      <h2 className="text-lg">{props.title}</h2>
      <WigetSorting acSortMode={props.acSortMode} acOrder={props.acOrder} />
    </div>
  )
}

export default SubHeader
