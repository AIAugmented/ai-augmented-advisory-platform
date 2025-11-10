"use client";

import { ChevronDown, LogOut, Settings, User, User2Icon } from "lucide-react";

import { useStore } from "@/store";

import Logo from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ROUTES } from "@/routes";

export default function Header() {
  const { logout } = useStore();

  return (
    <header className="flex items-center justify-between border-b border-black/10 bg-white/70 px-5 py-2.5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <Logo href={ROUTES.dashboard} />

      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <ThemeToggle />

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="size-10 w-fit hover:cursor-pointer"
          >
            <Button variant="ghost" className="!p-1">
              <User2Icon className="!h-5 !w-5" />
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings /> Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem onClick={async () => await logout()}>
                <LogOut /> Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
