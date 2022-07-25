import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store'
import { selectProcessList, stopProcess } from '../../store/process/processSlice'

const Explorer = () => {
  const processList = useSelector(selectProcessList)
  const dispatch = useAppDispatch()
  return <>{processList.map((pcs) => pcs.render(pcs, () => dispatch(stopProcess(pcs.id))))}</>
}

export default Explorer
