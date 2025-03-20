import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Menu, CircleX, House, Inbox, ShoppingBasket, PawPrint, PartyPopper } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!sidebarRef.current?.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const menuItems = [
        { label: "Home", icon: <House />, path: "/" },
        { label: "Product", icon: <ShoppingBasket />, path: "/product" },
        { label: "Workshop", icon: <PartyPopper />, path: "/events" },
        { label: "Contact", icon: <Inbox />, path: "/contact" },
        { label: "About", icon: <PawPrint />, path: "/about" },

    ];

    return (
        <div ref={sidebarRef}>
            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ">
                <Menu
                    color="#cb1515"
                    strokeWidth={2.5}
                    size={40}
                    className={`absolute transition-transform duration-300 ${isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                />
                <CircleX
                    color="#cb1515"
                    strokeWidth={2.5}
                    size={40}
                    className={`absolute transition-transform duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
                />
            </button>

            {/* Sidebar Menu */}
            <div className={`absolute left-0 sm:left-2 top-16 w-44 bg-red-300 shadow-lg rounded-xl p-4 transition-all duration-500 ease-in-out 
                ${isOpen ? "translate-x-0 opacity-100 max-h-[280px]" : "-translate-x-4 opacity-0 max-h-0 pointer-events-none"}`}
            >
                <ul className="space-y-3 text-gray-800">
                    {menuItems.map(({ label, icon, path }, index) => (
                        <li
                            key={index}
                            onClick={() => handleNavigation(path)}
                            className={`flex items-center gap-3 p-2 rounded-lg transition duration-200 cursor-pointer font-[Playwrite_IT_Moderna]
                                ${location.pathname === path ? "bg-gray-50 text-red-500 font-bold" : "hover:bg-gray-50 hover:text-red-500 hover:font-bold"}`}
                        >
                            {icon} {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
