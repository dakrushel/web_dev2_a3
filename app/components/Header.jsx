'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; // Import AuthContext

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const { user, logout } = useAuth(); // Access user and logout from AuthContext

  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Movies',
      href: '/posts',
    },
  ];

  return (
    <nav className="bg-yellow-400 text-blue-900 py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-4xl font-extrabold drop-shadow-lg tracking-wide">
            <div>
                <span className="text-blue-900">I</span>
                <span className="text-black">NTERNET </span>
                <span className="text-blue-900">M</span>
                <span className="text-black">OVIES </span>
                <span className="text-blue-900">R</span>
                <span className="text-black">ENTAL COMPANY</span>
            </div>

        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg font-semibold">
          {navItems.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-blue-600 underline'
                    : 'text-blue-900 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Actions */}
        <div>
          {user ? (
            <button
              onClick={logout}
              className="bg-blue-900 text-yellow-400 px-4 py-2 rounded font-bold shadow-lg hover:bg-yellow-500 hover:text-blue-900 transition"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-blue-900 text-yellow-400 px-4 py-2 rounded font-bold shadow-lg hover:bg-yellow-500 hover:text-blue-900 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;