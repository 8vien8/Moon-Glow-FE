import useAuth from "../hooks/useAuth";


const AdminLayout = () => {

    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                logout
            </button>
        </div>
    );
}

export default AdminLayout;
