"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = DATA.navigation;

  return (
    <Navbar
      isBordered
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center w-full">
      <NavbarBrand>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            className="flex items-center gap-3 group"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Monogram Emblem Container */}
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105 group-hover:rotate-3 shrink-0 overflow-visible translate-y-[2px]">
              <Image
                src="/bb-monogram.png"
                alt="BB Monogram Signature"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Full Name with Universal Deep Burnished Gold Gradient */}
            <span className="font-extrabold text-3xl tracking-tight leading-none bg-gradient-to-r from-[#8B6508] via-[#DAA520] to-[#8B6508] bg-clip-text text-transparent hidden sm:block">
              Bruce Bai
            </span>
          </Link>
        </motion.div>
      </NavbarBrand>

        {/* --- REST OF NAVIGATION (UNTOUCHED) --- */}
        <NavbarContent className="hidden sm:flex justify-center gap-6 flex-grow">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className={`flex items-center gap-2 transition-colors ${
                    pathname === item.href
                      ? "text-primary-500 font-semibold"
                      : "text-foreground hover:text-primary-500"
                  }`}
                  href={item.href}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu (UNTOUCHED) */}
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-medium hover:bg-content1 transition-colors"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-primary-500" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};