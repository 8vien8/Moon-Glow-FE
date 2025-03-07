function Contact() {
    return (
        <div className="flex flex-col items-center justify-center p-4 w-full max-w-lg mx-auto">

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact with us</h2>

            <div className="w-full flex flex-row items-center justify-between gap-6">

                <div className="flex flex-col gap-4 w-2/3">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/lazzy.meozz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg shadow-lg transition-all hover:bg-red-200 hover:shadow-md"
                    >
                        <img src="./instagram.png" alt="Instagram" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">GlowMoon Store</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:moonglow07@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg shadow-lg transition-all hover:bg-green-200 hover:shadow-md"
                    >
                        <img src="./gmail.png" alt="Email" className="w-10 h-10" />
                        <span className="text-gray-800 font-medium overflow-hidden">GlowMoon Store</span>
                    </a>
                </div>

                <img
                    src="./thankyou.png"
                    alt="Thank you"
                    className="w-1/3 object-contain"
                />
            </div>
        </div>
    );
}

export default Contact;
