import { Home, Receipt, QrCode, Building2, User } from "lucide-react";
import type { Tab } from "../App";

interface BottomNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const items: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "id", label: "Bills", icon: Receipt },
  { id: "qr", label: "Qr", icon: QrCode },
  { id: "hospitals", label: "Spitäler", icon: Building2 },
  { id: "account", label: "Account", icon: User },
];

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`nav-item${active === id ? " active" : ""}`}
          onClick={() => onChange(id)}
        >
          <Icon size={20} strokeWidth={active === id ? 2.4 : 1.8} />
          {label}
        </button>
      ))}
    </nav>
  );
}
