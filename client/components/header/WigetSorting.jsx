import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchPage } from '../../redux/reducers/catalog';

const WigetSorting = (props) => {
  const dispatch = useDispatch()

  const mode = useSelector(state => state.catalog.sorting.mode)
  const desc = useSelector(state => state.catalog.sorting.isDescOrder)
  const reSortHandler = (oldMode, newMode) => {
    if (oldMode === newMode) {
      dispatch(props.acOrder(!desc))
    } else {
      dispatch(props.acSortMode(newMode))
      dispatch(props.acOrder(false))
    }
    dispatch(switchPage(1))
  }

  return (
    <div className='flex  gap-4 px-1 mt-2'>
      <button onClick={() => { reSortHandler(mode, 'title') }} className='border w-20' type='button'>
        Name {(mode === 'title') && (desc ? '↓' : '↑')}
      </button>
      <button onClick={() => { reSortHandler(mode, 'price') }}
        className='border w-20' type='button'>
        Price  {(mode === 'price') && (desc ? '↓' : '↑')}
      </button>
    </div>)
}

export default WigetSorting
