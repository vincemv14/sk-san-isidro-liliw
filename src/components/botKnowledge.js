// src/components/botKnowledge.js

export const KUYA_ISIDRO_CONFIG = {
  botName: "Kuya Isidro AI Assistant",
  role: "Official AI Assistant for the Barangay San Isidro Community Portal (Liliw, Laguna).",
  
  rosters: {
    sangguniangBarangay: [
      { role: "Punong Barangay (Barangay Captain)", name: "Hon. Felino C. Mercado" },
      { role: "Barangay Kagawad", name: "Hon. Daisy S. Ogania" },
      { role: "Barangay Kagawad", name: "Hon. Sergio A. Cagas" },
      { role: "Barangay Kagawad", name: "Hon. Elvira M. Noma" },
      { role: "Barangay Kagawad", name: "Hon. Garry L. Lagrisola" },
      { role: "Barangay Kagawad", name: "Hon. Regidor A. Pineda Jr." },
      { role: "Barangay Kagawad", name: "Hon. Jaime B. Salazar" },
      { role: "Barangay Kagawad", name: "Hon. Angelito M. Matic" },
      { role: "Barangay Secretary", name: "Hon. Lendel F. Almares" },
      { role: "Barangay Treasurer", name: "Hon. Jhommel M. Montevirgen" }
    ],
    sangguniangKabataan: [
      { role: "SK Chairperson", name: "Hon. Gian Lorben Mitra Lagrisola" },
      { role: "SK Member (Councilor)", name: "Hon. Vince Mitra Villanueva" },
      { role: "SK Member (Councilor)", name: "Hon. Althea Marie Poonin" },
      { role: "SK Member (Councilor)", name: "Hon. Jennifer B. Platero" },
      { role: "SK Member (Councilor)", name: "Hon. Paul Angelo B. Grindulo" },
      { role: "SK Member (Councilor)", name: "Hon. Samantha Claire M. Vasallo" },
      { role: "SK Member (Councilor)", name: "Hon. Angel Dianne Tiquis" },
      { role: "SK Member (Councilor)", name: "Hon. Nideline Mei Labriaga" },
      { role: "SK Secretary", name: "Hon. Lorie Ann A. Santos" },
      { role: "SK Treasurer", name: "Hon. Mai Mai A. Fresco" }
    ]
  },

  metrics: {
    totalPopulation: "531+ Total Residents",
    households: "120+ Households",
    youthSectorPercentage: "45% of the total village population",
    totalLandArea: "75.37 hectares (ha)",
    agriculturalAllocation: "92.17% (Cornerstone of local development plans and crop production)",
    residentialZones: "5.89 hectares (ha)"
  },

  socialLinks: {
    email: "sangguniangkabataanngsanisidro@gmail.com",
    skFacebook: "https://www.facebook.com/sksanisidroliliw",
    sbFacebook: "https://www.facebook.com/barangay.sanisidro.7140",
    address: "Barangay Hall, Barangay San Isidro, Liliw, Laguna"
  },

  hotlines: {
    police: { 
      name: "Liliw Municipal Police Station",
      numbers: ["0906 360 4119", "0998 598 5647"], 
      landline: "5035-904" 
    },
    meralco: { 
      name: "Meralco Philippines (Laguna Sector)",
      landline: "02-16-211", 
      mobile: "09175592824", 
      textOnly: ["09209716211", "09175516211"] 
    },
    bfp: { 
      name: "Liliw Bureau of Fire Protection (BFP)",
      mobile: "0956 769 0379", 
      landline: "503-1756" 
    },
    rhu: { 
      name: "Liliw Rural Health Unit (RHU)",
      landline: "(049) 5633-055" 
    },
    mdrrmo: { 
      name: "Liliw Municipal Disaster Risk Reduction & Management Office (MDRRMO)",
      mobile: ["0945 135 0537", "0953 611 0440 (Lowland)"], 
      landline: "(049) 5033-621" 
    },
    mayorsOffice: { 
      name: "Liliw Mayor's Office",
      landline: "563-1001 local 103" 
    },
    redCross: { 
      name: "Philippine Red Cross Laguna Chapter",
      landline: "(049) 501-1114" 
    }
  },

  eventHighlights: [
    { title: "2025 Katipunan ng Kabataan Assembly", date: "November 16, 2025", desc: "Essential general evaluation and strategy council evaluating yearly projects and casting community youth legislative roadmaps.", link: "facebook.com/sksanisidroliliw/posts/pfbid02SmykWjtHeKpiUTDC12qxVEzZRuZAd3TNrqZwc2ry56KddeDz8jodFLtdSVB7BfPnl" },
    { title: "The Voice 2025: Fiesta 2025", date: "May 17, 2025", desc: "Empowering youth talents in singing and performing together with San Isidro audience.", link: "facebook.com/sksanisidroliliw/posts/pfbid02W1PEqkeeZptxn73TSJrQfYFSynSF39kMvV86Nd4a7y1h4oWzVHRWFSHn3v49gcxul" },
    { title: "Sagala 2025", date: "May 15, 2025", desc: "Continuing traditional street pageantry and cultural heritage showcasing community elegance and active youth civic participation.", link: "facebook.com/sksanisidroliliw/posts/pfbid0td7DBDfreMiroe9HX2URpwBnzj1uqn8DpUuBBHP9tYDocntv5a8652UVqUc5Bxczl" },
    { title: "LakaSKabataan: Palaro ng Lahi 2025", date: "May 14, 2025", desc: "The return of our indigenous sports festival featuring traditional community games to preserve local culture and build active group bonds.", link: "facebook.com/sksanisidroliliw/posts/pfbid0o9JhnDkbFNChZMQ5CLnhu3Nynz3EfL2MZCFEgSND2bb1uLCk5uDS8a8PRbxYTBuwl" }
  ],

  fallbackResponse: "Pasensya na po, ako si Kuya Isidro AI Assistant, at wala pa akong hawak na detalye ukol diyan sa ngayon. Maaari po kayong mag-email sa sangguniangkabataanngsanisidro@gmail.com o bumisita sa ating Barangay Hall upang kumonsulta sa ating Barangay o SK Council."
};