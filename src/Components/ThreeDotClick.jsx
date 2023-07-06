import React from 'react'

export default function ThreeDotClick() {

  return (
    <div>
      <ul className='border space-y-4 p-2 bg-slate-100 relative'>
        <li className='flex space-x-2'>
        <img className='w-5 h-5' width="50" height="50" src="https://img.icons8.com/ios/50/remove-user-group-man-man.png" alt="remove-user-group-man-man"/> <h2>Members</h2>
        </li>
        <li className='flex border-y py-4 space-x-2' >
        <img className='w-5 h-5 ' width="50" height="50" src="https://img.icons8.com/ios/50/phone-disconnected.png" alt="phone-disconnected"/> <h2>Share Number</h2>
        </li>
        <li className='flex space-x-2' >
        <img className='w-5 h-5' width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/delete-message.png" alt="delete-message"/> <h2>Report </h2>
        </li>
      </ul>
    </div>
  )
}
