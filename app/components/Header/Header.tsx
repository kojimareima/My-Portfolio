import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AiFillMail } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/profile">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/works">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="mt-2">
        <NavbarItem>
          <Link href="/contact">
            <AiFillMail size={20} color="white" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link color={"foreground"} href={item.path} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
