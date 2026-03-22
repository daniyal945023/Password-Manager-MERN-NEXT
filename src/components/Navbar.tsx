import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#1A1D2E] text-white backdrop-blur-md bg-opacity-60 border-b border-white border-opacity-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* PassOp Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">PassOp</span>
          <span className="text-sm opacity-80">your own password manager</span>
        </div>

        {/* GitHub Logo */}
        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {/* Replace with actual GitHub SVG icon if available */}
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;