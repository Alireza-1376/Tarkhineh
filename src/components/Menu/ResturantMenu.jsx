const resturantMenu = [
    {
        id: 1,
        imageUrl: "/images/ResturantMenu/ResturantMenu1.svg",
        textButton: "غذای اصلی"
    },
    {
        id: 2,
        imageUrl: "/images/ResturantMenu/ResturantMenu2.svg",
        textButton: "پیش غذا"
    },
    {
        id: 3,
        imageUrl: "/images/ResturantMenu/ResturantMenu3.svg",
        textButton: "دسر"
    },
    {
        id: 4,
        imageUrl: "/images/ResturantMenu/ResturantMenu4.svg",
        textButton: "نوشیدنی"
    }
]

const ResturantMenu = () => {
    return (
        <div className="px-4 lg:px-8 overflow-hidden ">
            <h2 className='font-bold md:text-2xl text-center my-10 mb-24'>منوی رستوران</h2>
            <div className="grid grid-cols-2 md:flex md:justify-between gap-4 gap-y-20 mb-16">
                {resturantMenu.map((item) => {
                    return (
                        <div key={item.id} className="relative h-20 md:h-44 border border-primary w-full rounded-lg">
                            <div>
                                <img className="absolute right-1/2 translate-x-1/2 -top-14 w-28 md:w-52 md:-top-24" src={`${item.imageUrl}`} alt="" />
                            </div>
                            <div>
                                <button className="absolute -bottom-5 right-1/2 text-nowrap translate-x-1/2 bg-primary text-white w-24 md:w-36 px-2 py-2 md:px-4 rounded-[4px] md:text-xl">{item.textButton}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ResturantMenu;
