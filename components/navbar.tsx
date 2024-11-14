import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import Image from "next/image";
 

export const Navbar = () => {
  return (
    <NextUINavbar className="max-w-full mx-auto px-4" position="sticky">
      {/* Alinhamento inicial com logo */}
      <NavbarContent className="basis-1/5 sm:basis-full flex items-center" justify="start">
        <NavbarBrand as="li" className="gap-3">
          <NextLink className="flex items-center gap-2 pr-10" href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <p className="font-bold text-sm">SisLine</p>
          </NextLink>
        </NavbarBrand>
        
         <ul className="hidden lg:flex gap-4 ml-2 mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

       <NavbarContent
        className="hidden sm:flex basis-1/5 gap-10 ml-40 justify-center items-center"
        justify="center"
      >
        <NavbarItem className="hidden sm:flex gap-2">
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>

      {/* Conteúdo alinhado à direita para telas menores */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menu do Navbar para navegação móvel */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
