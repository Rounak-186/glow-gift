import { Award, Heart, Sparkles, Target, Users } from 'lucide-react'
import React from 'react'
import { Button } from '../components/UI/Button';

const About = () => {

    const values = [
        {
            icon: <Heart size={40} />,
            label: "Customer First",
            description: "Every decision we make starts with thinking about our customers and their gifting needs.",
        },
        {
            icon: <Sparkles size={40} />,
            label: "Quality Excellence",
            description: "We curate only the finest products that meet our rigorous quality standards.",
        },
        {
            icon: <Users size={40} />,
            label: "Community",
            description: "Building lasting relationships with our customers, artisans, and partners.",
        },
        {
            icon: <Award size={40} />,
            label: "Innovation",
            description: "Constantly exploring new ideas to make gifting more meaningful and joyful.",
        },
    ]

    return (
        <>
            <div className='w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 '>
                <h1 className='font-semibold text-4xl text-white mb-4'>Creating Memorable Moments,
                    One Gift at a Time</h1>
                <p className='text-gray-600 max-w-4xl mx-auto'>At GlowGift, we believe every gift tells a story. Our mission is to help you find the perfect way to express your love, gratitude, and celebration through thoughtfully curated gifts.</p>
            </div>
            <div className="flex gap-7 min-h-fit mx-auto max-w-7xl py-10">
                {/* Our Story */}
                <div className=''>
                    <div className='text-left text-4xl font-semibold mb-2'>Our Story</div>
                    {/* photos */}
                    <pre className="whitespace-pre-wrap break-words text-left">
                        {`GlowGift began in 2024 with a simple intention — to find a gift that truly felt personal.
While searching for a unique, handmade birthday gift for my elder brother, I came across a video showcasing a shadow box portrait. Curious and inspired, I decided to create one myself. The result was more than just a gift — it was an emotion. When my brother saw it, his reaction said everything.
That moment became the foundation of GlowGift.

What started as a heartfelt experiment soon turned into a passion for creating meaningful, handcrafted gifts that tell a story. Every GlowGift piece is thoughtfully designed, carefully made, and created to capture memories that last longer than the occasion itself.
At GlowGift, we believe the best gifts aren’t just given — they’re felt.`}
                    </pre>
                    {/* images */}
                </div>
                <div className='relative w-[400px] shrink-0'>
                    <img src="https://images.unsplash.com/photo-1592903297149-37fb25202dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D" className='w-[200px] h-[150px] object-cover absolute top-7 left-5 z-10 rounded-md  border-white border-3' />
                    <img src="https://images.unsplash.com/photo-1592903297149-37fb25202dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D" className='w-[300px] h-[200px] object-cover absolute top-20 right-0 z-20 rounded-md border-white border-3' />
                    <img src="https://images.unsplash.com/photo-1592903297149-37fb25202dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D" className='w-[200px] h-[120px] object-cover absolute bottom-2 left-0 z-40 rounded-md border-white border-3' />
                </div>
            </div>
            {/* mission and vision */}
            <div className='flex items-center py-10 gap-5 mx-auto max-w-7xl'>
                <div className="flex items-center gap-3 bg-[var(--primary)] rounded-lg p-4">
                    <div className='text-semibold flex flex-col items-center w-[350px]'>
                        <Target size={70} className='text-white' />
                        <p className='text-lg font-semibold mt-2'>Our Mission</p>
                    </div>
                    <p className='text-left'>To make gifting effortless and meaningful by providing a curated selection of high-quality, personalized gifts that help people celebrate life's special moments and strengthen their relationships.</p>
                </div>
                <div className="flex items-center gap-3 bg-[var(--secondary)] rounded-lg p-4">
                    <div className='text-semibold flex flex-col items-center w-[350px]'>
                        <Sparkles size={70} className='text-white' />
                        <p className='text-lg font-semibold mt-2'>Our Vision</p>
                    </div>
                    <p className='text-left'>To become India's most loved gifting platform, where every gift tells a unique story and creates lasting memories, while supporting local artisans and promoting sustainable practices.</p>
                </div>
            </div>
            {/* our values */}
            <div className="w-full max-w-7xl mx-auto mb-10">
                <div className='mb-5'>
                    <h3 className='text-4xl font-semibold'>Our Values</h3>
                    <p>These principles guide everything we do at GiftAura</p>
                </div>
                <div className="flex items-start gap-3">
                    {values.map((value, i) => <ValueCard data={value} key={i} />)}
                </div>
            </div>
            {/* join Our journey */}
            <div className='w-full bg-linear-to-br from-(--primary) to-(--secondary) p-5 flex flex-col items-center '>
                <h1 className='font-semibold text-4xl text-white mb-4'>Join Our Journey</h1>
                <p className='text-gray-600 max-w-4xl mx-auto'>
                    Be part of our mission to spread joy through thoughtful gifting. Explore our collection and create memorable moments today.
                </p>
                <Button>Start Shopping</Button>
            </div>
        </>
    )
};

const ValueCard = ({ data }: { data: Record<string, any> }) =>
    <div className='flex flex-col items-center gap-2 p-4 border-[var(--secondary)] border-2 rounded-lg'>
        <div className="bg-linear-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full p-4 text-white ">
            {data.icon}
        </div>
        <div className='font-semibold text-[#272727] text-xl'>
            {data.label}
        </div>
        <p className="text-gray-600 text-md">{data.description}</p>
    </div>

export default About
