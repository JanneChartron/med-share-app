import { useState } from "react";
import { ChevronDown, ChevronUp, Siren, MapPinned } from "lucide-react";
import AppHeader from "../components/AppHeader";
import StyledQRCode from "../components/StyledQRCode";
import { demoPatient } from "../data/patient";
import type { Tab } from "../App";

interface HomeScreenProps {
  onNavigate: (tab: Tab) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <AppHeader title={`Welcome back ${demoPatient.firstName}!`}>
        <span className="pill">Spital Triemli</span>
      </AppHeader>

      <div className="content-panel">
        <div className="details-row" onClick={() => setDetailsOpen((o) => !o)}>
          <div className="details-row-top">
            <span className="row-title">Details</span>
            {detailsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
          {detailsOpen && (
            <div className="details-panel">
              <span className="tag">{demoPatient.bloodType}</span>
              {demoPatient.allergies.map((a) => (
                <span className="tag tag-warn" key={a}>
                  {a}
                </span>
              ))}
              <span className="tag">Geb. {demoPatient.dateOfBirth}</span>
            </div>
          )}
        </div>

        <div className="qr-screen-card" onClick={() => onNavigate("qr")} style={{ cursor: "pointer" }}>
          <div className="qr-card-header">
            <div>
              <h3>Your Qr code</h3>
              <p>Use it in the hospital</p>
            </div>
          </div>
          <div className="qr-box">
            <StyledQRCode value={`medshare://patient/${demoPatient.memberId}`} size={190} />
          </div>
        </div>

        <div>
          <div className="card-label" style={{ marginBottom: 8 }}>
            Card
          </div>
          <div className="wallet-row">
            <span className="wallet-row-title">Add it to your wallet</span>
            <span className="pill-dim" style={{ background: "black", color: "white", padding: "8px 14px", borderRadius: 20, fontWeight: 600 }}>
              Add to Apple Wallet
            </span>
          </div>
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Schnellzugriff
          </div>
          <div className="quick-grid">
            <div className="quick-tile" onClick={() => onNavigate("id")}>
              <div className="quick-tile-icon">
                <Siren size={18} />
              </div>
              <div className="quick-tile-title">Notfall-Info</div>
              <div className="quick-tile-sub">Allergien &amp; Kontakt</div>
            </div>
            <div className="quick-tile" onClick={() => onNavigate("hospitals")}>
              <div className="quick-tile-icon">
                <MapPinned size={18} />
              </div>
              <div className="quick-tile-title">Spital-Finder</div>
              <div className="quick-tile-sub">Angebundene Spitäler</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
