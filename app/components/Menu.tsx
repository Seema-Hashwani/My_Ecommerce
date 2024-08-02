'use client';

import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

// Define the type for the dropdownRefs object
type DropdownRefs = {
  [key: number]: HTMLDivElement | null;
};

export default function Menu() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<DropdownRefs>({});

  const handleToggleDropdown = (index: number) => {
    setActiveDropdown(prevIndex => prevIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !Object.values(dropdownRefs.current).some(
        ref => ref && ref.contains(event.target as Node)
      )
    ) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row h-12 w-screen justify-between items-center px-24 border border-black text-black relative">
      <div className="relative group">
        <button
          id="dropdownDefaultButton"
          onClick={() => handleToggleDropdown(0)}
          className="text-black hover:text-red-900 hover:font-bold focus:text-red-900 focus:font-bold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Option
          <MdKeyboardArrowDown />
        </button>

        {activeDropdown === 0 && (
          <div
            id="dropdown"
            className="absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10"
            ref={(el: HTMLDivElement | null) => { dropdownRefs.current[0] = el; }}
          >
            <ul
              className="py-2 text-sm text-gray-600"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link href="/productPage">
                  <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                    Category 1
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/productPage">
                  <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                    Category 2
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/productPage">
                  <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                    Category 3
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/productPage">
                  <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                    Category 4
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => handleToggleDropdown(index + 1)}
            className="text-black hover:text-red-900 hover:font-bold focus:text-red-900 focus:font-bold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Option {index + 1}
            <MdKeyboardArrowDown />
          </button>

          {activeDropdown === index + 1 && (
            <div
              id={`dropdown${index + 1}`}
              className="absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10"
              ref={(el: HTMLDivElement | null) => { dropdownRefs.current[index + 1] = el; }}
            >
              <ul
                className="py-2 text-sm text-gray-600"
                aria-labelledby={`dropdown${index + 1}`}
              >
                <li>
                  <Link href="/productPage">
                    <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                      Category 1
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/productPage">
                    <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                      Category 2
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/productPage">
                    <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                      Category 3
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/productPage">
                    <div className="block px-4 py-2 hover:text-red-900 cursor-pointer">
                      Category 4
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
