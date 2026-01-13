import React from 'react'
import { Input } from '../components/UI/Input'
import { Textarea } from '../components/UI/TextArea'
import { Button } from '../components/UI/Button'
import { Mail, MessageCircle, Phone, Send } from 'lucide-react'

const Contact = () => {
    return (
        <>
            {/* header part */}
            <div className='w-full bg-linear-to-br from-(--primary) to-(--secondary) p-10 '>
                <h1 className='font-semibold text-4xl text-white mb-4'>Get in Touch</h1>
                <p className='text-gray-600 max-w-4xl mx-auto'>Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <div className='flex gap-4 w-full max-w-7xl mx-auto my-10'>
                {/* Send us a message */}
                <div className='p-5 rounded-lg shadow-md border border-[var(--secondary)] bg-white flex-1'>
                    <h2 className='text-3xl font-semibold text-left mb-4'>Send Us a Message</h2>
                    {/* form */}
                    <div className="space-y-3">
                        <div className='flex items-center gap-4'>
                            <Input placeholder='Your Name' />
                            <Input placeholder='Email' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <Input placeholder='Phone Number' />
                            <Input placeholder='How can we help?' />
                        </div>
                        <div>
                            <p className='text-left'>Your Message <span className='text-[var(--primary)]'>*</span></p>
                            <Textarea className='max-h-40 overflow-y-auto' />
                        </div>
                        <Button className='w-full flex justify-center rounded-full!'>
                            <Send size={18} />
                            Send Message
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col gap-3 '>
                    {/* contact and email */}
                    <div className='min-w-[400px]'>
                        <div className='flex items-center gap-7 p-3 px-6 shadow-md rounded-lg bg-white mb-3'>
                            <div className='bg-linear-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg text-white p-3'>
                                <Phone />
                            </div>
                            <div className='text-left'>
                                <h3 className='font-semibold text-xl'>Call Us</h3>
                                <span className='mr-2'>9434232157,</span>
                                <span>8001504546</span>
                                <p className='text-gray-500'>Mon-Fri, 10 AM - 7 PM</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-7 p-3 px-6 shadow-md rounded-lg bg-white'>
                            <div className='bg-linear-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg text-white p-3'>
                                <Mail />
                            </div>
                            <div className='text-left'>
                                <h3 className='font-semibold text-xl'>Email Us</h3>
                                <p>glowgift-support@gmail.com</p>
                                <p className='text-gray-500'>24/7 Support Available</p>
                            </div>
                        </div>
                    </div>
                    {/* whatsapp */}
                    <div className="bg-green-500 rounded-lg flex items-start gap-3 p-3 shadow-md ">
                        <div className="bg-green-200 p-3 rounded-full text-white">
                            <MessageCircle size={30} />
                        </div>
                        <div className='text-left'>
                            <h3 className='text-xl font-semibold'>Quick Chat on Whatsapp</h3>
                            <p>Chat with our support team now!</p>
                            <div className='flex justify-center mt-2'>
                                <Button variant='outline' className='rounded-full! text-sm!'>Chat on Whatsapp</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
