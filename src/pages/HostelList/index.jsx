import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUserAction } from '../../redux/action/userAction'
import HostelList from './components/HostelList'

const HostelLists = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUserAction())
  }, [])
  
  return (
    <div>
      <HostelList />
    </div>
  )
}

export default HostelLists
