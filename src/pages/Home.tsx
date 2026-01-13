import { Fragment } from 'react'
import { Button } from '../components/UI/Button'
import { ArrowRight, Edit3, Gift, Heart, Palette, Sparkles } from 'lucide-react'

export default function Home() {

  const whyChooseUs = [
    {
      icon: <Palette />,
      title: "Unique Handmade Gifts",
      reason: "Shadow boxes, light etch art, pyrography, and more — each piece is truly one of a kind."
    },
    {
      icon: <Edit3 />,
      title: "Fully Customized",
      reason: "Personalize every detail, from quotes to portraits, to make it uniquely yours."
    },
    {
      icon: <Heart />,
      title: "Handcrafted With Love",
      reason: "Carefully handmade with attention to detail and heartfelt craftsmanship."
    },
    {
      icon: <Sparkles />,
      title: "Made for Meaningful Moments",
      reason: "Designed to turn special moments into lasting memories."
    },
  ]

  return (
    <Fragment >
      {/* // hero part */}
      <div className='relative flex items-center gap-8 w-full max-w-7xl mx-auto py-10'>
        {/* buttons and texts */}
        <div className='space-y-9 text-left w-1/2'>
          <div className='!rounded-full shadow-md flex items-center gap-2 p-2 px-4 w-fit bg-white'>
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
            <Gift size={25} />
          </div>
          <div className='text-left space-y-1'>
            <div>Special Offer</div>
            <div className='font-semibold'>10% Off on First Order</div>
          </div>
        </div>
      </div>
      {/* Shop by Category */}
      <div className='space-y-3 w-full max-w-7xl mx-auto py-10'>
        <h3 className='text-4xl font-semibold'>Shop by Category</h3>
        <p className='text-gray-600'>Explore different kinds of Unique Gifts</p>
        <div className='flex items-center justify-evenly gap-3'>
          {
            Array(5).fill(null).map(() => {
              return (
                <CategoryCard />
              )
            })
          }
        </div>
      </div>

      {/* Why choose Glowgift */}
      <div className='space-y-3 w-full max-w-7xl mx-auto py-10'>
        <h3 className='text-4xl font-semibold'>Why Chosse GlowGift?</h3>
        <p className='text-gray-600'>We make gift-giving easy and joyful</p>
        <div className='grid-cols-4 grid gap-3'>
          {
            whyChooseUs.map((reason, i) => {
              return (
                <WhyChooseUsCard data={reason} key={i} />
              )
            })
          }
        </div>
      </div>

      <div className='w-full bg-linear-to-br from-(--primary) to-(--secondary) p-5 flex flex-col items-center py-6 my-8'>
        <h1 className='font-semibold text-4xl text-white mb-4'>Ready to Find the Perfect Gift?</h1>
        <p className='text-gray-600 max-w-4xl mx-auto mb-8'>
          Browse our collection and make someone's day special
        </p>
        <Button className='!px-5 !rounded-full'>Start Shopping <ArrowRight /></Button>
      </div>

    </Fragment>

  )
};

const CategoryCard = ({ data = { label: "Glass Painting" } }: { data?: Record<string, any> }) => {
  return (
    <div className='w-full relative group overflow-hidden h-fit rounded-lg'>
      <img
        src='https://u-mercari-images.mercdn.net/photos/m66350704918_1.jpg'
        className='aspect-[1] w-full object-cover group-hover:scale-108 transition-all duration-300 overflow-hidden' />
      {/* tag or type */}
      <Button className='absolute bottom-4 left-1/2 -translate-x-1/2  !px-2 !py-0 rounded-full !bg-[var(--accent)] opacity-100 scale-90'>
        {data.label}
      </Button>
    </div>
  )
};

const WhyChooseUsCard = ({ data }: { data: Record<string, any> }) => {
  return (
    <div className="space-y-4 rounded-xl shadow-lg bg-white p-6 flex flex-col items-center">
      <div className="rounded-full bg-amber-50 p-3 w-fit text-[var(--primary)]">
        {data.icon}
      </div>
      <h4 className='font-semibold'>{data.title}</h4>
      <p className="text-gray-600">{data.reason}</p>
    </div>
  )
};
