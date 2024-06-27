function Home() {
    return (
        <div className="relative text-center">
            <div className="flex place-content-center font-bold">
                <div>
                    <p className="text-[24vw] md:text-[12vw] h-[28vw] md:h-[15vw] mt-[2vw]">I'm</p>
                    <p className="text-[5vw] md:text-[2vw]">
                        a Full-Stack
                        <br />
                        Engineer
                    </p>
                </div>
                <div className="content-center">
                    <p className="text-[10vw] md:text-[5vw] leading-[8vw] md:leading-[4.5vw] text-left drop-shadow-xl md:drop-shadow-sm">
                        COLAS
                        <br />
                        RENARD
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center mt-10 md:mt-20 animate-up-down">
                <div className="w-8 h-8 bg-gray-500 rounded-full items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="absolute top-0 w-full -z-10">
                <p className="text-[30vw] md:text-[22vw] md:leading-[25vw] font-black text-white drop-shadow-xl">HELLO</p>
            </div>
        </div>
    );
}

export default Home;
