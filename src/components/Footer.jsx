import PropTypes from "prop-types";

function Footer({ className }) {
    return (
        <footer className={`${className} text-center p-4 bg-gray-100`}>
            <div className="mb-2">
                <p className="font-medium">
                    Địa chỉ:{" "}
                    <a
                        href="https://www.google.com/maps/place/26+L%C3%BD+T%E1%BB%B1+Tr%E1%BB%8Dng,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1,+H%E1%BB%93+Ch%C3%AD+Minh+700000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        26 Lý Tự Trọng, phường Bến Nghé, quận 1 (lầu 1)
                    </a>
                </p>
            </div>

            <p className="text-gray-500 mt-2">© 2025 Lazzy Meow Website. All rights reserved.</p>
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
