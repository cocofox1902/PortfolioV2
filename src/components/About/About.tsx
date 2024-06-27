function About() {
    return (
        <div className="font-medium mt-10">
            <div className="md:flex justify-around items-center mb-10">
                <p className="text-5xl text-center md:text-left">
                    Get to
                    <br />
                    know me
                </p>
                <p className="text-xs md:w-2/5 w-full p-5 md:p-0">
                    I'm a french full-stack engineer, I'm passionate about web development and
                    everything related to technology. I am always looking for new challenges and
                    opportunities to learn new things. I am a very curious person and I like to
                    understand how things work.
                </p>
            </div>
            <div className="flex justify-center">
                <div className="m-1 w-[80%]">
                    <div className="py-8 border-t border-black">
                        <p className="text-4xl">Internship Last Year</p>
                        <div className="flex">
                            <p className="text-gray-500">FDG GS, Boulogne</p>
                            <p className="ml-auto text-right w-3/5">
                                I interned at the largest French lottery, developing a new feature to streamline game creation.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 border-t border-black">
                        <p className="text-4xl">Intership First Year</p>
                        <div className="flex">
                            <p className="text-gray-500">Soseal, Paris</p>
                            <p className="ml-auto text-right w-3/5">
                                Creation of an administration interface for the management of the
                                utilisateur and the content of the website. I also worked on the
                                database.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 border-t border-black">
                        <p className="text-4xl">Full-Stack Formation</p>
                        <div className="flex">
                            <p className="text-gray-500">Holberton School, Lille</p>
                            <p className="ml-auto text-right w-3/5">
                                Obtention of my Full-Stack diploma at Holberton School.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 border-t border-black">
                        <p className="text-4xl">High school diploma</p>
                        <div className="flex">
                            <p className="text-gray-500">Les Petits-Champs, Paris</p>
                            <p className="ml-auto text-right w-3/5">
                                Obtention of my French Scientific diploma (Bac S) to the school
                                Les Petits-Champs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
