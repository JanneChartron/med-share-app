import { Menu } from "lucide-react";
import type { ReactNode } from "react";

interface AppHeaderProps {
  title: string;
  onMenuClick?: () => void;
  children?: ReactNode;
}

export default function AppHeader({ title, onMenuClick, children }: AppHeaderProps) {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-title">{title}</div>
        <button className="icon-btn" onClick={onMenuClick} aria-label="Menü">
          <Menu size={20} />
        </button>
      </div>
      {children && <div className="header-sub">{children}</div>}
      <div className="header-wave">
        <svg viewBox="0 0 400 34" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q200,38 400,0 L400,34 L0,34 Z" fill="#f4f4f5" />
        </svg>
      </div>
    </div>
  );
}
