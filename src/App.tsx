import { useState } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";
import BottomNav from "./components/BottomNav";
import HomeScreen from "./screens/HomeScreen";
import CardScreen from "./screens/CardScreen";
import QRScreen from "./screens/QRScreen";
import HospitalsScreen from "./screens/HospitalsScreen";
import AccountScreen from "./screens/AccountScreen";
import { initialAccessLog, type AccessLogEntry } from "./data/patient";

export type Tab = "home" | "id" | "qr" | "hospitals" | "account";

function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [accessLog, setAccessLog] = useState<AccessLogEntry[]>(initialAccessLog);

  function recordScan(hospital: string) {
    const entry: AccessLogEntry = {
      id: `l${Date.now()}`,
      hospital,
      timestamp: new Date().toLocaleString("de-CH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setAccessLog((log) => [entry, ...log]);
  }

  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-statusbar">
        <span>9:41</span>
        <span style={{ display: "flex", gap: 6 }}>
          <Signal size={14} />
          <Wifi size={14} />
          <BatteryFull size={14} />
        </span>
      </div>

      <div className="screen">
        {tab === "home" && <HomeScreen onNavigate={setTab} />}
        {tab === "id" && <CardScreen />}
        {tab === "qr" && <QRScreen onScan={recordScan} />}
        {tab === "hospitals" && <HospitalsScreen />}
        {tab === "account" && <AccountScreen accessLog={accessLog} />}
      </div>

      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
}

export default App;
