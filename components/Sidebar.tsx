"use client";
import { BiSearch } from "react-icons/bi";
import Hihome from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: Hihome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2 h-full ">
        <Box>Sidebar Navigation</Box>
      </div>
    </div>
  );
};

export default Sidebar;
