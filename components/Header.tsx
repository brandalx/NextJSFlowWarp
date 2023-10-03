import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();
  const handleLogOut = () => {
    // TODO: handleLogoutFunc
  };
  return <div>Header</div>;
};

export default Header;
