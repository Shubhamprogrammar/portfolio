"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children}: NavLinkProps) {
    const baseClasses =
    "relative transition-colors duration-200 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:transition-all before:duration-200 hover:before:w-full font-dela text-[23px] font-normal mx-0";
  const variantClasses ="before:bg-[var(--brown)]  text-[var(--brown)] hover:text-[var(--dark-brown)]"
    return (
        <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </Link>
  );
}