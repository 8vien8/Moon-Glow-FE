import { useState, useEffect, useRef } from "react";
import { Menu, CircleX, House, Inbox, ShoppingBasket, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!sidebarRef.current?.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const menuItems = [{ label: "Home", icon: <House />, path: "/" },
    { label: "Product", icon: <ShoppingBasket />, path: "/product" },
    { label: "Contact", icon: <Inbox />, path: "/contact" },
    { label: "About", icon: <PawPrint />, path: "/about" }]

    return (
        <div ref={sidebarRef} className="relative mt-1.5">
            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10 flex items-center justify-center">
                <Menu
                    color="#983434"
                    size={36}
                    className={`absolute transition-transform duration-300 ${isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                />
                <CircleX
                    color="#983434"
                    size={36}
                    className={`absolute transition-transform duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
                />
            </button>

            {/* Sidebar Menu */}
            <div className={`absolute left-0 top-14 w-36 bg-red-300 shadow-lg rounded-xl p-4 transition-all duration-500 ease-in-out
                ${isOpen ? "translate-x-0 opacity-100 max-h-[240px]" : "-translate-x-4 opacity-0 max-h-0 pointer-events-none"}`}
            >
                <ul className="space-y-3 text-gray-800">
                    {menuItems
                        .map(({ label, icon, path }, index) => (
                            <li key={index}
                                onClick={() => handleNavigation(path)}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 hover:font-bold transition "
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
