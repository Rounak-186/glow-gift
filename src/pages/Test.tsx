import { useState } from 'react'
import { Dropdown } from '../components/UI/DropDown'
import { Button } from '../components/UI/Button'
import Coupon from '../components/UI/Coupon'


export default function Test() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full p-20'>
      <Coupon />

    </div>
  )
}
