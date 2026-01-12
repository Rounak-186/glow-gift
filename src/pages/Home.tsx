import React from 'react'
import { Button } from '../components/UI/Button'
import { ArrowRight, Gift, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    // hero part
    <div className='relative flex items-center gap-8 w-full max-w-7xl mx-auto py-10'>
      {/* buttons and texts */}
      <div className='space-y-9 text-left w-1/2'>
        <div className='!rounded-full shadow-md flex items-center gap-2 p-2 px-4 w-fit'>
          <span className='text-[var(--primary)] '><Sparkles size={15} /></span>
          Premium Quality Gifts
        </div>
        <h1 className='font-semibold text-6xl'>Perfect Gifts for Every Occasion</h1>
        <p className="text-gray-600">
          Discover our curated collection of thoughtful gifts that bring joy to your loved ones. From birthdays to corporate events, find the perfect gift with GiftAura.
        </p>
        {/* shop now and custom gifts button */}
        <div className="flex items-center gap-4">
          <Button className='!rounded-full'>
            Shop Now
            <ArrowRight />
          </Button>
          <Button variant='outline' className='!rounded-full !bg-white'>
            Custom Gifts
          </Button>
        </div>
      </div>
      {/* image and discount tag */}
      <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='aspect-square rounded-xl object-cover w-1/2 shrink-0' />
      {/* discount tag */}
      <div className="shadow-lg absolute bottom-3 right-100 flex items-center justify-center gap-3  bg-white rounded-lg p-4">
        <div className="rounded-full p-3 text-[var(--primary)] bg-amber-50">
          <Gift size={25}/>
        </div>
        <div className='text-left space-y-1'>
          <div>Special Offer</div>
          <div className='font-semibold'>10% Off on First Order</div>
        </div>
      </div>

    </div>
  )
}
