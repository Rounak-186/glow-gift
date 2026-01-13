import { Heart, HeartOff, Share, Share2, ShoppingCart, Star } from 'lucide-react'
import { Button } from './Button';

export default function ProductCard({ isWishlistProduct = false }: { isWishlistProduct?: boolean }) {

    const percentage = Math.min(Math.max(4.7 / 5 * 100, 0), 100);

    return (
        <div className='rounded-lg shadow-md flex flex-col items-center overflow-hidden bg-white'>
            {/* product image */}
            <div className='w-full relative group overflow-hidden h-fit '>
                <img
                    src='https://u-mercari-images.mercdn.net/photos/m66350704918_1.jpg'
                    className='aspect-[1] w-full object-cover group-hover:scale-108 transition-all duration-300 overflow-hidden' />
                {/* tag or type */}
                <Button className='absolute top-6 left-5 !px-2 !py-0 rounded-full bg-[var(--secondary)] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
                    <span className='text-gray-800'>Anime</span>
                </Button>
                {/* save to wishlist or share */}
                {
                    isWishlistProduct ? (
                        <Button className='absolute top-5 right-5 !p-2 !rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
                            <span className=''><HeartOff /></span>
                        </Button>
                    ) : (

                        <Button className='absolute top-5 right-5 !p-2 !rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'>
                            <span className=''><Heart /></span>
                        </Button>
                    )
                }
            </div>
            {/* rating and reviews */}
            <div className='p-4 '>
                <div className='flex justify-between items-center my-2'>
                    <div className='flex gap-2 items-center justify-center'>
                        <div className="relative w-[100px] h-5">
                            <div className="flex absolute inset-0 text-gray-300">
                                {Array(5).fill(null).map((_, i) =>
                                    <div key={i} className='w-5 flex justify-center  items-center'>
                                        <Star strokeWidth={3} />
                                    </div>
                                )}
                            </div>

                            <div
                                className="flex absolute inset-0 text-yellow-400 overflow-hidden"
                                style={{ width: `${percentage}%` }}
                            >
                                {Array(5).fill(null).map((_, i) =>
                                    <div key={i} className='w-5 flex justify-center items-center'>
                                        <Star strokeWidth={3} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className='text-gray-500 font-semibold ml-5'>4.7</span>
                    </div>

                    <div className='text-gray-500 font-semibold '>186 reviews</div>
                </div>
                {/* Product Title and description*/}
                <div className='flex flex-col items-start mb-2'>
                    <strong className='text-2xl'>Naruto Glass painting</strong>
                    <p className='line-clamp-2 text-gray-400 text-sm mt-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique fugit quae labore nobis perferendis.</p>
                </div>
                {/* price and add to cart */}
                <div className='flex items-center justify-between'>
                    <span className='text-[var(--primary)] text-xl font-bold'>{"\u20B9"}399</span>
                    <div className='flex items-center gap-3'>
                        {
                            isWishlistProduct && (
                                <Button className=' text-gray-700! !p-2 opacity-100 scale-100 ' variant='nav'>
                                    <span className=''><Share2 /></span>
                                </Button>
                            )
                        }
                        <Button variant='primary' className='font-bold flex items-center justify-center gap-3'>
                            <span className="flex justify-center items-center"><ShoppingCart size={20} strokeWidth={3}/></span>
                            <span>Add to Cart</span>
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}
