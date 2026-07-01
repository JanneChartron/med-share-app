import AppHeader from "../components/AppHeader";
import { demoPatient, type AccessLogEntry } from "../data/patient";

interface AccountScreenProps {
  accessLog: AccessLogEntry[];
}

export default function AccountScreen({ accessLog }: AccountScreenProps) {
  return (
    <>
      <AppHeader title="Account">
        <span className="pill-dim">
          {demoPatient.firstName} {demoPatient.lastName}
        </span>
      </AppHeader>

      <div className="content-panel">
        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Zugriffsprotokoll
          </div>
          {accessLog.length === 0 && (
            <div className="list-row">
              <div className="row-sub">Noch keine Zugriffe</div>
            </div>
          )}
          {accessLog.map((entry) => (
            <div className="list-row" key={entry.id}>
              <div>
                <div className="row-title">{entry.hospital}</div>
                <div className="row-sub">{entry.timestamp}</div>
              </div>
              <span className="badge badge-green">Zugriff</span>
            </div>
          ))}
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Einstellungen
          </div>
          <div className="list-row">
            <div>
              <div className="row-title">QR-Freigabe</div>
              <div className="row-sub">Notfalldaten für Spitäler sichtbar</div>
            </div>
            <span className="badge badge-green">aktiv</span>
          </div>
        </div>
      </div>
    </>
  );
}
