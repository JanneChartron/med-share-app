import { useState } from "react";
import { Wallet, ScanLine } from "lucide-react";
import AppHeader from "../components/AppHeader";
import StyledQRCode from "../components/StyledQRCode";
import { demoPatient, demoHospitals } from "../data/patient";
import PatientRecordModal from "../components/PatientRecordModal";

interface QRScreenProps {
  onScan: (hospital: string) => void;
}

export default function QRScreen({ onScan }: QRScreenProps) {
  const [showRecord, setShowRecord] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const scanHospital = demoHospitals[0].name;

  function simulateScan() {
    onScan(scanHospital);
    setShowRecord(true);
  }

  function addToWallet() {
    setToast("Zur Apple Wallet hinzugefügt");
    window.setTimeout(() => setToast(null), 1800);
  }

  return (
    <>
      <AppHeader title="Your Qr code">
        <span className="pill-dim">Use it in the hospital</span>
      </AppHeader>

      <div className="content-panel">
        <div className="qr-screen-card">
          <div className="qr-card-header">
            <div>
              <h3>Your Qr code</h3>
              <p>Use it in the hospital</p>
            </div>
          </div>
          <div className="qr-box">
            <StyledQRCode value={`medshare://patient/${demoPatient.memberId}`} size={190} />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="wallet-btn" onClick={addToWallet}>
              <Wallet size={16} />
              Zur Apple Wallet hinzufügen
            </button>
          </div>
          <button className="scan-btn" onClick={simulateScan}>
            <ScanLine size={15} style={{ verticalAlign: "-3px", marginRight: 6 }} />
            Spital-Scan simulieren
          </button>
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Was das Spital sieht
          </div>
          <div className="list-row">
            <div>
              <div className="row-title">Blutgruppe, Allergien, Medikation</div>
              <div className="row-sub">Notfallkontakt &amp; Vorerkrankungen</div>
            </div>
          </div>
        </div>
      </div>

      {showRecord && (
        <PatientRecordModal hospital={scanHospital} onClose={() => setShowRecord(false)} />
      )}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
