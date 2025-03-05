import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar with responsive margin */}
            <aside className="fixed z-50 m-2 sm:m-5">
                <Sidebar />
            </aside>

            {/* Main content */}
            <div className="flex flex-col flex-1 w-full min-w-screen">
                {/* Header */}
                <Header />
                <main className="flex-1 text-center">
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer className="bg-gray-700 text-white text-center p-4" />
            </div>
        </div>
    );
}

export default MainLayout;
