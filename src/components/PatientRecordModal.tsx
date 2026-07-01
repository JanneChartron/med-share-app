import { demoPatient } from "../data/patient";

interface PatientRecordModalProps {
  hospital: string;
  onClose: () => void;
}

export default function PatientRecordModal({ hospital, onClose }: PatientRecordModalProps) {
  return (
    <div className="record-overlay" onClick={onClose}>
      <div className="record-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="record-header">
          <div>
            <div className="row-title" style={{ fontSize: 16 }}>
              {demoPatient.firstName} {demoPatient.lastName}
            </div>
            <div className="row-sub">Geb. {demoPatient.dateOfBirth}</div>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="record-banner">Zugriff durch {hospital} · Notfall-Freigabe aktiv</div>

        <div className="record-block">
          <h4>Blutgruppe</h4>
          <span className="tag">{demoPatient.bloodType}</span>
        </div>

        <div className="record-block">
          <h4>Allergien</h4>
          {demoPatient.allergies.map((a) => (
            <span className="tag tag-warn" key={a}>
              {a}
            </span>
          ))}
        </div>

        <div className="record-block">
          <h4>Vorerkrankungen</h4>
          {demoPatient.conditions.map((c) => (
            <span className="tag" key={c}>
              {c}
            </span>
          ))}
        </div>

        <div className="record-block">
          <h4>Aktuelle Medikation</h4>
          {demoPatient.medications.map((m) => (
            <div className="list-row" key={m.name}>
              <div>
                <div className="row-title">{m.name}</div>
                <div className="row-sub">{m.dosage}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="record-block">
          <h4>Notfallkontakt</h4>
          <div className="list-row">
            <div>
              <div className="row-title">{demoPatient.emergencyContact.name}</div>
              <div className="row-sub">
                {demoPatient.emergencyContact.relation} · {demoPatient.emergencyContact.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
