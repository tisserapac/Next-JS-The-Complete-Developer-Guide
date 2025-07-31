import Link from "next/link";
import { Suspense } from "react";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
