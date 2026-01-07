import { useState } from 'react'
import { Dropdown } from '../components/UI/DropDown'
import { Button } from '../components/UI/Button'


export default function Test() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='w-full'> 
      <div className='relative'>
        <Button onClick={(o)=>setIsOpen(!isOpen)}>profile</Button>
        <Dropdown open={isOpen} onClose={()=>setIsOpen(false)}>
        hello I am dropdown
      </Dropdown>
      </div>
    </div>
  )
}
