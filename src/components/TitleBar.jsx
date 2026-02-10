const TitleBar = ({ bgImg, description, title }) => {
    return (
        <>
            <div className="titlebar relative h-[200px] md:h-[400px]" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/60 z-10">
                    {/* Content on top of overlay */}
                    <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 pt-10">
                        <h1 className="text-[28px] md:text-[46px] font-bold">{title}</h1>
                        <p className="mt-2 text-[16px] md:text-[26px]">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TitleBar;