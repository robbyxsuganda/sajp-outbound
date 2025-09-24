"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Cloves", href: "/products?category=cloves" },
      { name: "Vanilla Beans", href: "/products?category=vanilla" },
      { name: "Nutmeg", href: "/products?category=nutmeg" },
      { name: "Mace Flower", href: "/products?category=mace" },
      { name: "Betel Nut", href: "/products?category=betel-nut" },
      { name: "Cardamom", href: "/products?category=cardamom" },
    ],
  },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md bg-white/95" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="flex justify-center items-center w-12 h-12 bg-gradient-to-br rounded-xl shadow-lg transition-all duration-300 from-primary-green to-secondary-green-start group-hover:shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Leaf className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold transition-colors duration-300 text-text-dark group-hover:text-primary-green">
                SAJP
              </span>
              <span className="-mt-1 text-xs text-gray-500">
                Indonesian Spices
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    pathname === item.href
                      ? "text-primary-green bg-primary-green/10"
                      : "text-text-dark hover:text-primary-green hover:bg-primary-green/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <motion.div
                    className="absolute left-0 invisible mt-2 w-56 rounded-xl border border-gray-100 shadow-xl opacity-0 backdrop-blur-md transition-all duration-300 bg-white/95 group-hover:opacity-100 group-hover:visible"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm transition-all duration-300 text-text-dark hover:bg-primary-green/10 hover:text-primary-green hover:translate-x-2"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-xl transition-all duration-300 text-text-dark hover:text-primary-green hover:bg-primary-green/10"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t backdrop-blur-md lg:hidden border-gray-200/50 bg-white/95"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 ${
                        pathname === item.href
                          ? "text-primary-green bg-primary-green/10"
                          : "text-text-dark hover:text-primary-green hover:bg-primary-green/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <motion.div
                        className="mt-2 ml-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 mx-2 text-sm rounded-lg transition-all duration-300 text-text-dark hover:text-primary-green hover:bg-primary-green/5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
