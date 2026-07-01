import Logo from "../components/Logo";
import AppHeader from "../components/AppHeader";
import { demoPatient } from "../data/patient";

export default function CardScreen() {
  return (
    <>
      <AppHeader title="Deine Gesundheits-ID">
        <span className="pill-dim">Wird beim Check-in im Spital verwendet</span>
      </AppHeader>

      <div className="content-panel">
        <div className="wallet-card">
          <div className="wallet-card-top">
            <div className="wallet-card-logo">
              <Logo size={20} />
            </div>
            <div className="wallet-card-id">
              Nr. {demoPatient.memberId}
              <br />
              gültig
            </div>
          </div>
          <div style={{ marginTop: 26 }} className="wallet-card-name">
            {demoPatient.firstName} {demoPatient.lastName}
          </div>
          <div className="wallet-card-meta">
            <span>Geb. {demoPatient.dateOfBirth}</span>
            <span>{demoPatient.bloodType}</span>
          </div>
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Notfall-Informationen
          </div>
          <div className="list-row">
            <div>
              <div className="row-title">Allergien</div>
              <div className="row-sub">{demoPatient.allergies.join(", ")}</div>
            </div>
            <span className="badge badge-green">bekannt</span>
          </div>
          <div className="list-row">
            <div>
              <div className="row-title">Vorerkrankungen</div>
              <div className="row-sub">{demoPatient.conditions.join(", ")}</div>
            </div>
          </div>
          <div className="list-row">
            <div>
              <div className="row-title">Notfallkontakt</div>
              <div className="row-sub">
                {demoPatient.emergencyContact.name} ({demoPatient.emergencyContact.relation}) ·{" "}
                {demoPatient.emergencyContact.phone}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 10 }}>
            Aktuelle Medikation
          </div>
          {demoPatient.medications.map((m) => (
            <div className="list-row" key={m.name}>
              <div>
                <div className="row-title">{m.name}</div>
                <div className="row-sub">{m.dosage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
