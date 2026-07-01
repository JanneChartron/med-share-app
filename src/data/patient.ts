export interface AccessLogEntry {
  id: string;
  hospital: string;
  timestamp: string;
}

export interface Medication {
  name: string;
  dosage: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  bloodType: string;
  memberId: string;
  allergies: string[];
  medications: Medication[];
  conditions: string[];
  emergencyContact: { name: string; phone: string; relation: string };
  lastUpdated: string;
}

export const demoPatient: Patient = {
  firstName: "Neo",
  lastName: "Grutz",
  dateOfBirth: "01.06.1995",
  bloodType: "O negativ",
  memberId: "SIA08E77",
  allergies: ["Penicillin", "Erdnüsse"],
  medications: [
    { name: "Metformin", dosage: "500mg, 2x täglich" },
    { name: "Ibuprofen", dosage: "bei Bedarf" },
  ],
  conditions: ["Typ-2-Diabetes"],
  emergencyContact: { name: "Sina Grutz", phone: "+41 79 123 45 67", relation: "Partnerin" },
  lastUpdated: "01.07.2026",
};

export const demoHospitals = [
  { id: "h1", name: "Universitätsspital Zürich", city: "Zürich", connected: true },
  { id: "h2", name: "Inselspital Bern", city: "Bern", connected: true },
  { id: "h3", name: "HUG Genève", city: "Genf", connected: false },
  { id: "h4", name: "Kantonsspital Luzern", city: "Luzern", connected: true },
];

export const initialAccessLog: AccessLogEntry[] = [
  { id: "l1", hospital: "Universitätsspital Zürich", timestamp: "28.06.2026, 14:32" },
  { id: "l2", hospital: "Inselspital Bern", timestamp: "15.05.2026, 09:10" },
];
