import { Star } from 'lucide-react'
import { Button } from './Button';

export default function ProductCard() {

    const percentage = Math.min(Math.max(4.3 / 5 * 100, 0), 100);

    return (
        <div className='rounded-md shadow-md flex flex-col items-center'>
            {/* product image */}
            <img
                src='https://via.placeholder.com/400x300'
                className='h-50 w-full object-cover ' />
            {/* rating and reviews */}
            <div className='p-4 mt-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center justify-center'>
                        <div className="relative w-[80px] h-4">
                            <div className="flex absolute inset-0 text-gray-300">
                                {Array(5).fill(null).map((_, i) =>
                                    <div key={i} className='w-5 flex justify-center  items-center'>
                                        <Star />
                                    </div>
                                )}
                            </div>

                            <div
                                className="flex absolute inset-0 text-yellow-400 overflow-hidden"
                                style={{ width: `${percentage}%` }}
                            >
                                {Array(5).fill(null).map((_, i) =>
                                    <div key={i} className='w-5 flex justify-center items-center'>
                                        <Star />
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className='text-gray-500 font-semibold ml-5'>4.3</span>
                    </div>

                    <div className='text-gray-500 font-semibold '>186 reviews</div>
                </div>
                {/* Product Title and description*/}
                <div className=''>
                    <strong className='text-left text-xl'>Naruto Glass painting</strong>
                    <p className='line-clamp-2 text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique fugit quae labore nobis perferendis.</p>
                </div>
                {/* price and add to cart */}
                <div className='flex items-center justify-between'>
                    <span className='text-[var(--primary)]'>{"\u20B9"}399</span>
                    <Button variant='primary'>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}
