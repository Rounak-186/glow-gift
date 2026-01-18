const Coupon = () => {
    return (
        // <div className="relative w-[320px] bg-[#f5c8f3] p-6 rounded-sm ">

        //     {/* Content */}
        //     <h2 className="text-xl font-semibold">₹200 OFF</h2>
        //     <p className="text-sm mt-1">Just for you 💖</p>

        //     {/* Tear Edge */}
        //     <div className="absolute bottom-0 left-0 -translate-x-1/2  w-full h-4 
        //           bg-[linear-gradient(135deg,transparent_75%,#f5c8f3_75%),linear-gradient(225deg,transparent_75%,#f5c8f3_75%)]
        //           bg-[length:16px_16px] bg-repeat-x rotate-270 origin-bottom">
        //     </div>
        // </div>
        <div className="relative h-64 w-80 bg-[#f5c8f3] rounded-xl p-6">
            {/* Coupon content */}
            <h2 className="text-xl font-semibold">₹200 OFF</h2>
            <p className="text-sm mt-1">Just for you 💖</p>
            {/* Tear */}
            <div
                className="absolute top-0 right-0 h-full w-4 origin-top-right rotate-90 bg-[linear-gradient(135deg,transparent_75%,#f5c8f3_75%),linear-gradient(225deg,transparent_75%,#f5c8f3_75%)] bg-[length:16px_16px]bg-repeat-x"
            />
        </div>


    )
};

export default Coupon;