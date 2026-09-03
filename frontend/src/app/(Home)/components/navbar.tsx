"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLink,
  MenuList,
  MenuTrigger,
} from "@/components/ui/menu";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/utils/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");

    const onScroll = () => {
      const pastTop = window.scrollY > 10;

      if (!heroEl) {
        setScrolled(pastTop);
        return;
      }

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const pastHero = heroEl.getBoundingClientRect().bottom <= headerHeight;

      setScrolled(pastTop && !pastHero);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50 border-b border-border/60 bg-white/20 shadow-sm backdrop-blur-2xl'>
      <div className='mx-auto flex h-20 max-w-360 items-center justify-between px-6 md:px-8 lg:px-12'>
        <Link href='/' className='flex items-center'>
          <Image
            src={DiyoLogo}
            alt='Diyo.ai'
            className='h-9 w-auto'
            priority
          />
        </Link>

        <Menu className='hidden max-w-none flex-none justify-start lg:flex'>
          <MenuList className='gap-6'>
            {NAV_LINKS.map((link) =>
              link.items ? (
                <MenuItem key={link.href}>
                  <MenuTrigger
                    className={cn(
                      'h-auto px-0 py-0',
                      scrolled &&
                        'text-white hover:text-white data-open:text-white data-popup-open:text-white',
                    )}
                  >
                    {link.label}
                  </MenuTrigger>
                  <MenuContent>
                    <ul className='grid w-72 gap-1 p-2'>
                      {link.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <MenuLink
                              render={<Link href={item.href} />}
                              className='items-start gap-3 rounded-xl p-2.5'
                            >
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                                <Icon size={16} />
                              </span>
                              <span className='flex flex-col gap-0.5'>
                                <span className='text-sm font-medium text-white'>
                                  {item.label}
                                </span>
                                <span className='text-xs text-white/70'>
                                  {item.description}
                                </span>
                              </span>
                            </MenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </MenuContent>
                </MenuItem>
              ) : (
                <MenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                      scrolled && 'text-white hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ),
            )}
          </MenuList>
        </Menu>

        <div className='hidden items-center gap-3 lg:flex'>
          <Button
            variant='outline'
            className='rounded-lg bg-white px-5'
          >
            Login
          </Button>
          <Button className='rounded-lg px-5'>Get Started</Button>
        </div>

        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            'cursor-pointer lg:hidden',
            scrolled ? 'text-white' : 'text-foreground',
          )}
          aria-label='Toggle menu'
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className='flex flex-col gap-1 border-t border-border/60 px-6 py-4 lg:hidden'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground',
                scrolled && 'text-white hover:bg-white/10 hover:text-white',
              )}
            >
              {link.label}
              {link.items && <FiChevronDown size={16} />}
            </Link>
          ))}
          <div className='mt-2 flex flex-col gap-2'>
            <Button
              variant='outline'
              className='w-full rounded-lg bg-white px-5'
            >
              Login
            </Button>
            <Button className='w-full rounded-lg px-5'>Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
