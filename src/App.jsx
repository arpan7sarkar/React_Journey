import React from "react";
import Card from "./components/card";
const App = () => {
  const jobOpenings = [
  {
    companyName: "InnoDesign Studio",
    jd: "UX/UI Designer",
    time: "full-time",
    special: "Flexible Schedule",
    pay: "$85,000 - $110,000 / year",
    location: "Boston, MA (Hybrid)",
  },
  {
    companyName: "TechNova Solutions",
    jd: "Senior Software Engineer",
    time: "full-time",
    special: "Sign-on Bonus",
    pay: "$130,000 - $160,000 / year",
    location: "San Francisco, CA (Remote)",
  },
  {
    companyName: "Global Mktg Group",
    jd: "Digital Marketing Specialist",
    time: "full-time",
    special: "Performance Incentives",
    pay: "$60,000 - $80,000 / year",
    location: "New York, NY (On-site)",
  },
  {
    companyName: "EcoBuild Architects",
    jd: "Junior Architectural Drafter",
    time: "part-time",
    special: "Student Loan Repayment",
    pay: "$25 - $35 / hour",
    location: "Austin, TX (Hybrid)",
  },
  {
    companyName: "FinAccel Inc.",
    jd: "Financial Analyst",
    time: "full-time",
    special: "401(k) Matching",
    pay: "$95,000 - $125,000 / year",
    location: "Chicago, IL (On-site)",
  },
  {
    companyName: "HealthConnect Systems",
    jd: "Data Scientist",
    time: "full-time",
    special: "Unlimited PTO",
    pay: "$140,000 - $180,000 / year",
    location: "Seattle, WA (Remote)",
  },
  {
    companyName: "RetailPulse Co.",
    jd: "E-commerce Manager",
    time: "full-time",
    special: "Health & Wellness Stipend",
    pay: "$75,000 - $100,000 / year",
    location: "Los Angeles, CA (Hybrid)",
  },
  {
    companyName: "EduFuture Academy",
    jd: "Curriculum Developer",
    time: "contract",
    special: "Professional Development",
    pay: "$50 - $70 / hour",
    location: "Washington, D.C. (Remote)",
  },
  {
    companyName: "LogiChain Solutions",
    jd: "Supply Chain Coordinator",
    time: "full-time",
    special: "Relocation Assistance",
    pay: "$65,000 - $90,000 / year",
    location: "Dallas, TX (On-site)",
  },
  {
    companyName: "MediaWave Studios",
    jd: "Video Editor",
    time: "part-time",
    special: "Flexible Hours",
    pay: "$20 - $30 / hour",
    location: "Atlanta, GA (Remote)",
  },
  {
    companyName: "BioGen Pharma",
    jd: "Research Associate",
    time: "full-time",
    special: "Generous Health Coverage",
    pay: "$80,000 - $105,000 / year",
    location: "San Diego, CA (On-site)",
  },
  {
    companyName: "CyberGuard Security",
    jd: "Cloud Security Engineer",
    time: "full-time",
    special: "Yearly Technology Budget",
    pay: "$120,000 - $150,000 / year",
    location: "Denver, CO (Hybrid)",
  },
];
  return (
    <>
      {jobOpenings.map((elem) => {
        return (
          <Card
            companyName={elem.companyName}
            jd={elem.jd}
            time={elem.time}
            special={elem.special}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </>
  );
};

export default App;
