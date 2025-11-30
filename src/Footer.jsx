export default function Footer() {
    return(
        <>
        <div className="md:h-[40vh] h-[30vh] w-full mt-36 bg-bgmed flex justify-center items-center">
            <div className=" min-h-[60%]  flex flex-col justify-center items-center gap-6">
                <h1 className="text-md md:text-xl font-bold ">Exploring, learning, and building</h1>
                <h2 className="text-sm md:text-md ">Built using React.js & Tailwind CSS</h2>
                <p className="text-sm md:text-md text-txt/70">&copy; 2025 Rupsa Dutta</p>
            </div>
        </div>
        </>
    )
}