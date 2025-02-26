import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

function MainLayout() {

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="absolute m-5 ">
                <Sidebar />
            </aside>

            {/* Main content */}
            <div className="flex flex-col flex-1 w-full min-w-screen">
                <main className="flex-1 p-6 text-center ">
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer className=" bg-gray-700 text-white text-center p-4" />
            </div>

        </div>

    )
}

export default MainLayout