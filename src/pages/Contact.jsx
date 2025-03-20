function Contact() {
    return (
        <div className=" h-full flex flex-col items-center justify-center p-4 w-full max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-gray-900">
                Liên lạc với chúng tôi
            </h2>
            <div className="w-full flex flex-row items-center justify-between gap-4">

                <div className="flex flex-col gap-4 w-2/3">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-red-200 to-red-300 hover:scale-105 hover:shadow-xl"                    >
                        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">GlowMoon Store</span>
                    </a>

                    {/* Email */}
                    {/* <a
                        href="mailto:moonglow07@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg shadow-lg transition-all hover:bg-green-200 hover:shadow-md"
                    >
                        <img src="/gmail.png" alt="Email" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">GlowMoon Store</span>
                    </a> */}

                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-pink-200 to-pink-300 hover:scale-105 hover:shadow-xl"                    >
                        <img src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000" alt="TikTok" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">GlowMoon Store</span>
                    </a>

                </div>

                <div className="w-32 h-32 md:w-40 md:h-40 flex justify-center items-center p-4">
                    <img
                        src="./logo.jpg"
                        alt="Thank you"
                        className="object-cover w-full h-full rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-600 hover:scale-110 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
