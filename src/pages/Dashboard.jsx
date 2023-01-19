import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAgentAction, GetMessageAction } from '../redux/action/chatAction';
import { GetHostelAction } from '../redux/action/hostelAction';

const Dashboard = () => {
  const dispatch = useDispatch()
  const { hostel } = useSelector((state) => state.HostelReducer)
//   useEffect(() => {
//     const hostel = dispatch(GetHostelAction())
//     console.log(hostel);
// }, [])
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
