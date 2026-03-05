const Footer = () => {
    return (
        <footer className="bg-space-950 text-gray-400 py-8 border-t border-white/10 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="mb-2">© {new Date().getFullYear()} Space Portfolio. All rights reserved.</p>
                <p className="text-sm">Built with React, Tailwind & Three.js</p>
            </div>
        </footer>
    );
};

export default Footer;
