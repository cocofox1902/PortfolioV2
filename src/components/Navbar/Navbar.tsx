function Navbar() {
    return (
        <nav className="flex justify-between text-black h-20 text-sm md:text-lg lg:text-xl border-b-2 border-b-black">
            <div className="flex items-center w-fit ml-10">
                <div className="bg-green-700 w-5 h-5 rounded-full mr-2"></div>
                <p>Available to work</p>
            </div>
            <div className="mr-10 content-center sm:block hidden">
                <a href="Home" className="mx-2 md:mx-6">Home</a>
                <a href="About" className="mx-2 md:mx-6">About</a>
                <a href="Project" className="mx-2 md:mx-6">Project</a>
                <a href="Contact" className="mx-2 md:mx-6">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
