// All college-specific content lives here. Edit this file to change names, fees and copy.
type Program = { name: string; slug: string; native: string; blurb: string; careers: string; modules: string[] };
type Level = { name: string; entry: string; duration: string; fee: string };
export const site: {
  key: string; name: string; short: string; native: string; prefix: string; country: string; law: string;
  email: string; phone: string; city: string; accreditation: string; intake: string; appFee: string; disclaimer: string;
  hero: { kicker: string; title: string; text: string };
  programsHeading: string; programsIntro: string; feeNote: string;
  programs: Program[]; applyLevels: string[]; programAccess: Record<string, string[]>; levels: Level[];
  faq: { q: string; a: string }[];
  signatory: { name: string; title: string };
  registrar: { name: string; title: string };
  cert: { bg: string; ink: string; accent: string; muted: string; line: string };
} = {
  "key": "medha",
  "name": "Medha Online College",
  "short": "Medha",
  "native": "मेधा",
  "prefix": "MED",
  "country": "India",
  "law": "the laws of India",
  "email": "admissions@medha.example",
  "phone": "+91 80000 00000",
  "city": "Bengaluru, India",
  "accreditation": "application in progress. Not yet approved.",
  "intake": "1 February 2027",
  "appFee": "₹1,000",
  "disclaimer": "A fictional institution created for demonstration. Not affiliated with any existing university.",
  "hero": {
    "kicker": "सूचना प्रौद्योगिकी · कृत्रिम बुद्धिमत्ता",
    "title": "Build the technology. Teach machines to think.",
    "text": "Online degrees in Information Technology and Artificial Intelligence. Start with a foundation course, earn a credential at every level, and carry on to a degree."
  },
  "programsHeading": "Two programs, built to work together.",
  "programsIntro": "Choose Information Technology or Artificial Intelligence, then pick the level that fits where you are today.",
  "programs": [
    {
      "name": "Information Technology",
      "slug": "it",
      "native": "सूचना प्रौद्योगिकी",
      "blurb": "Learn to build, connect and run the software that businesses depend on.",
      "careers": "software developer, cloud engineer, database administrator, network engineer.",
      "modules": [
        "Programming and problem solving",
        "Data structures and algorithms",
        "Databases and SQL",
        "Computer networks",
        "Cloud computing",
        "Web and mobile development",
        "Software engineering capstone"
      ]
    },
    {
      "name": "Artificial Intelligence",
      "slug": "ai",
      "native": "कृत्रिम बुद्धिमत्ता",
      "blurb": "Understand how modern AI works, then build and deploy models responsibly.",
      "careers": "machine learning engineer, data scientist, AI product developer, research assistant.",
      "modules": [
        "Mathematics for machine learning",
        "Python for data",
        "Machine learning",
        "Deep learning",
        "Language models and generative AI",
        "Computer vision",
        "Responsible AI and ethics",
        "AI capstone"
      ]
    }
  ],
  "applyLevels": [
    "Foundation Certificate",
    "Diploma",
    "Bachelor’s Degree",
    "Master’s Degree"
  ],
  "programAccess": {},
  "levels": [
    {
      "name": "Foundation Certificate",
      "entry": "Open to all",
      "duration": "6 months",
      "fee": "₹48,000 (about $545)"
    },
    {
      "name": "Diploma",
      "entry": "Foundation Certificate",
      "duration": "1 year",
      "fee": "₹81,000 (about $920)"
    },
    {
      "name": "Bachelor’s Degree",
      "entry": "Diploma, or secondary school with Mathematics",
      "duration": "2 years after Diploma",
      "fee": "₹1,80,000 (about $2,045). Full path from Foundation: ₹3,09,000"
    },
    {
      "name": "Master’s Degree",
      "entry": "Bachelor’s degree",
      "duration": "2 years",
      "fee": "₹4,50,000 (about $5,115)"
    }
  ],
  "feeNote": "Fees are indicative benchmarks drawn from published online-degree fees at Indian institutes, shown at ₹88 to the US dollar. Final fees are confirmed in your offer letter.",
  "faq": [
    {
      "q": "How are fees charged?",
      "a": "You pay level by level, so you only commit to the next step when you are ready. The calculator shows the total for the levels you choose."
    },
    {
      "q": "Can I pay in instalments?",
      "a": "Yes. Pay in full for 3% off, pay in two instalments per level at no extra cost, or pay monthly with a 2% charge."
    },
    {
      "q": "Is there a fee waiver?",
      "a": "The calculator shows 25% and 50% waivers as examples. Waivers are decided on merit and need after admission and are reviewed each level."
    },
    {
      "q": "How do I pay from outside India?",
      "a": "Fees are set in rupees and shown in US dollars for reference at ₹88 to the dollar. In India pay by UPI, net banking or card; from abroad pay by international card or bank transfer."
    },
    {
      "q": "What if I stop partway?",
      "a": "Completed levels keep their credit. Tuition is refunded in full within 14 days of enrolment if you have not started the level, 50% within 30 days, and not after that. Registration fees are not refundable."
    }
  ],
  "signatory": {
    "name": "P. Iyer",
    "title": "Vice-Chancellor"
  },
  "registrar": {
    "name": "S. Nair",
    "title": "Registrar"
  },
  "cert": {
    "bg": "#FBFBFF",
    "ink": "#1A1B4B",
    "accent": "#F5A800",
    "muted": "#4B5080",
    "line": "#DADCF0"
  }
};
