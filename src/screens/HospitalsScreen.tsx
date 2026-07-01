import AppHeader from "../components/AppHeader";
import { demoHospitals } from "../data/patient";

export default function HospitalsScreen() {
  return (
    <>
      <AppHeader title="Angebundene Spitäler">
        <span className="pill-dim">
          {demoHospitals.filter((h) => h.connected).length} von {demoHospitals.length} verbunden
        </span>
      </AppHeader>

      <div className="content-panel">
        <div>
          {demoHospitals.map((h) => (
            <div className="list-row" key={h.id}>
              <div>
                <div className="row-title">{h.name}</div>
                <div className="row-sub">{h.city}</div>
              </div>
              <span className={`badge ${h.connected ? "badge-green" : "badge-gray"}`}>
                {h.connected ? "verbunden" : "nicht verbunden"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
