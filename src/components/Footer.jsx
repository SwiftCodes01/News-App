import React from "react";

function Footer() {
  return (
    <footer className="mt-16 bg-white  py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
          <a>About Us</a>
          <a>Contact</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
        <div>© {new Date().getFullYear()} News Today. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
