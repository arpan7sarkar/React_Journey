import React from "react";
import Card from "./components/card";
const App = () => {
  const jobOpenings = [
  {
    companyName: "InnoDesign Studio",
    // Generic logo for design/creativity (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Minimalist_logo_for_a_creative_company.svg/100px-Minimalist_logo_for_a_creative_company.svg.png",
    jd: "UX/UI Designer",
    time: "full-time",
    special: "Flexible Schedule",
    pay: "$85,000 - $110,000 / year",
    location: "Boston, MA (Hybrid)",
  },
  {
    companyName: "TechNova Solutions",
    // Generic logo for tech/abstract connectivity (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Networking_Icon.svg/100px-Networking_Icon.svg.png",
    jd: "Senior Software Engineer",
    time: "full-time",
    special: "Sign-on Bonus",
    pay: "$130,000 - $160,000 / year",
    location: "San Francisco, CA (Remote)",
  },
  {
    companyName: "Global Mktg Group",
    // Generic logo for global/marketing (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Global_Icon.svg/100px-Global_Icon.svg.png",
    jd: "Digital Marketing Specialist",
    time: "full-time",
    special: "Performance Incentives",
    pay: "$60,000 - $80,000 / year",
    location: "New York, NY (On-site)",
  },
  {
    companyName: "EcoBuild Architects",
    // Generic logo for eco-friendly building (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Green_house.svg/100px-Green_house.svg.png",
    jd: "Junior Architectural Drafter",
    time: "part-time",
    special: "Student Loan Repayment",
    pay: "$25 - $35 / hour",
    location: "Austin, TX (Hybrid)",
  },
  {
    companyName: "FinAccel Inc.",
    // Generic logo for finance/growth (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Finance_icon.svg/100px-Finance_icon.svg.png",
    jd: "Financial Analyst",
    time: "full-time",
    special: "401(k) Matching",
    pay: "$95,000 - $125,000 / year",
    location: "Chicago, IL (On-site)",
  },
  {
    companyName: "HealthConnect Systems",
    // Generic logo for medical/health (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_Cross_icon.svg/100px-Red_Cross_icon.svg.png",
    jd: "Data Scientist",
    time: "full-time",
    special: "Unlimited PTO",
    pay: "$140,000 - $180,000 / year",
    location: "Seattle, WA (Remote)",
  },
  {
    companyName: "RetailPulse Co.",
    // Generic logo for retail/commerce (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shopping_cart_icon.svg/100px-Shopping_cart_icon.svg.png",
    jd: "E-commerce Manager",
    time: "full-time",
    special: "Health & Wellness Stipend",
    pay: "$75,000 - $100,000 / year",
    location: "Los Angeles, CA (Hybrid)",
  },
  {
    companyName: "EduFuture Academy",
    // Generic logo for education/learning (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Education_icon.svg/100px-Education_icon.svg.png",
    jd: "Curriculum Developer",
    time: "contract",
    special: "Professional Development",
    pay: "$50 - $70 / hour",
    location: "Washington, D.C. (Remote)",
  },
  {
    companyName: "LogiChain Solutions",
    // Generic logo for logistics/delivery (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Truck_Icon_White.svg/100px-Truck_Icon_White.svg.png",
    jd: "Supply Chain Coordinator",
    time: "full-time",
    special: "Relocation Assistance",
    pay: "$65,000 - $90,000 / year",
    location: "Dallas, TX (On-site)",
  },
  {
    companyName: "MediaWave Studios",
    // Generic logo for media/video (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Play_button.svg/100px-Play_button.svg.png",
    jd: "Video Editor",
    time: "part-time",
    special: "Flexible Hours",
    pay: "$20 - $30 / hour",
    location: "Atlanta, GA (Remote)",
  },
  {
    companyName: "BioGen Pharma",
    // Stable URL for Biogen logo (based on search) - *Note: Subject to trademark law*
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Biogen_logo.svg/100px-Biogen_logo.svg.png",
    jd: "Research Associate",
    time: "full-time",
    special: "Generous Health Coverage",
    pay: "$80,000 - $105,000 / year",
    location: "San Diego, CA (On-site)",
  },
  {
    companyName: "CyberGuard Security",
    // Generic logo for security/protection (Public Domain)
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Shield_Icon_%28Transparent%29.svg/100px-Shield_Icon_%28Transparent%29.svg.png",
    jd: "Cloud Security Engineer",
    time: "full-time",
    special: "Yearly Technology Budget",
    pay: "$120,000 - $150,000 / year",
    location: "Denver, CO (Hybrid)",
  },
];
  return (
    <>
      {jobOpenings.map((elem,idx) => {
        return (
          <div key={idx}>
            <Card
              companyName={elem.companyName}
              jd={elem.jd}
              time={elem.time}
              special={elem.special}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </>
  );
};

export default App;
