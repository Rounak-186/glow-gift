export const ProductItem = () => {
    return (
        <div className="border border-[var(--secondary)] rounded-lg p-3 flex items-center w-full">
            {/* Product image */}
            <div className="rounded-md overflow-hidden">
                <img
                    src='https://u-mercari-images.mercdn.net/photos/m66350704918_1.jpg'
                    className='aspect-[1] w-25 object-cover' />
            </div>
            {/* other details */}
            <div className="flex items-center justify-between p-2 w-full ">
                {/* title and price */}
                <div>
                    <h3 className="text-2xl text-left ">Naruto Glass Painting</h3>
                    <p className='line-clamp-2 text-gray-400 text-sm  text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique fugit quae labore nobis perferendis.</p>
                </div>
                <span className='text-[var(--primary)] text-xl font-bold'>{"\u20B9"}399</span>
            </div>
            {/* quantity tab */}
        </div>
    )
}