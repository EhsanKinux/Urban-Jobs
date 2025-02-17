import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center" dir="rtl">
        <h1 className="text-lg font-bold">سامانه مشاغل شهری</h1>
        <nav className="relative">
          <Link to="/" className="ml-4 hover:underline">
            صفحه اصلی&nbsp;
          </Link>
          <Link to="/about" className="ml-4 hover:underline">
          &nbsp;درباره ما
          </Link>
          <div className="inline-block relative">
            <button className="ml-4 hover:underline focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
              دسته‌بندی مشاغل  ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 bg-white text-black shadow-lg rounded-md mt-2 py-2 w-48">
                <li>
                  <Link
                    to="/jobs/technology"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    فناوری
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs/construction"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    ساخت‌وساز
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs/healthcare"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    بهداشت و درمان
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs/education"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    آموزش
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
