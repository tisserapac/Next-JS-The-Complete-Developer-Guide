import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";

import { auth } from "@/auth";
import React from "react";

export default async function Header() {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <div className="flex items-center">
        <Avatar
          src={session.user.image || ""}
          alt={session.user.name || "User Avatar"}
          className="mr-2"
        />
        <span>{session.user.name}</span>
      </div>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Input />
      </NavbarContent>

      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
