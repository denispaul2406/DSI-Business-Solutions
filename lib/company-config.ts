export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'accountant' | 'estates' | 'legal';
  tagline: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_CONFIG = {
  // Principal Leadership & Verified Business Identity
  FOUNDER_NAME: 'Amjad Ansari',
  COMPANY_NAME: 'DSI Business Solutions',
  SHORT_NAME: 'DSI',
  
  // Three Integrated Disciplines
  TAX_FIRM_NAME: 'Ansari & Co.',
  TAX_FIRM_DESCRIPTOR: 'Auditors & Tax Consultants',
  ESTATES_FIRM_NAME: 'DSI Estates',
  ESTATES_FIRM_DESCRIPTOR: 'Builders, Developers & Property Management',
  LEGAL_FIRM_NAME: 'DSI Legal Consultancy',
  LEGAL_FIRM_DESCRIPTOR: 'Corporate, Civil, Family, Criminal & RERA Advisory',
  DESCRIPTOR: 'Ansari & Co. (Auditors & Tax) • DSI Estates (Property Management) • Legal Consultancy',
  
  // Contact Details
  PHONE: '+91 98867 38434',
  PHONE_RAW: '9886738434',
  PHONE_TEL: 'tel:+919886738434',
  PHONE_DISPLAY: '+91 98867 38434',
  
  EMAIL: 'amjad.ansari20@yahoomail.com',
  EMAIL_MAILTO: 'mailto:amjad.ansari20@yahoomail.com?subject=Enquiry%20from%20Website',
  EMAIL_DISPLAY: 'amjad.ansari20@yahoomail.com',
  
  ADDRESS: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032',
  ADDRESS_DISPLAY: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032, Karnataka, India',
  
  MAP_LOCATION: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032',
  MAP_DIRECTIONS_URL: 'https://maps.google.com/?q=%2321+3rd+Cross+Rahmath+Nagar+Bangalore+560032+Karnataka+India',
  
  WHATSAPP: '+91 98867 38434',
  WHATSAPP_URL: 'https://wa.me/919886738434?text=Hello%20Mr.%20Amjad%20Ansari,%20I%20would%20like%20to%20enquire%20about%20your%20services.',
  
  BUSINESS_HOURS: 'Mon – Sat: 9:30 AM – 7:00 PM IST',
  TIMEZONE: 'IST (UTC+05:30)',

  // Overlapping Credibility Metrics (MAS LLP Style)
  STAT_METRICS: [
    { value: '15+', label: 'Years Combined Experience', desc: 'Fiduciary auditing, real estate & legal advisory' },
    { value: '500+', label: 'Enterprises & Estates Advised', desc: 'Indian companies, global startups & family estates' },
    { value: '100%', label: 'Statutory Compliance Record', desc: 'Zero-discrepancy tax, MCA & court filings' },
    { value: 'BLR', label: 'Bangalore Headquarters', desc: 'Central office with on-ground sub-registrar liaison' },
  ],

  // 1. Auditing, Tax & Business Setup (Ansari & Co.)
  ACCOUNTANT_SERVICES: [
    {
      id: 'fdi-expansion',
      number: '01',
      title: 'India Business Setup & FDI Expansion',
      category: 'accountant' as const,
      tagline: 'Foreign company incorporation & greenfield FDI',
      description: 'End-to-end guidance for foreign companies expanding to India: entity selection (Pvt Ltd, LLP, Wholly Owned Subsidiary), RBI/FDI compliance, and fast-track registration.',
      deliverables: ['Entity structure selection', 'FDI reporting & RBI filings', 'Fast-track company incorporation', 'Post-incorporation licenses'],
    },
    {
      id: 'bookkeeping',
      number: '02',
      title: 'Accounting & Bookkeeping (Zoho / Tally / BUSY)',
      category: 'accountant' as const,
      tagline: 'Cloud ledger maintenance & ERP record-keeping',
      description: 'Full or modular outsourced accounting using industry-leading software (Zoho Books, Tally, BUSY). Daily journal entries, AP/AR management, and monthly MIS financial packs.',
      deliverables: ['Zoho, Tally & BUSY setup', 'General ledger maintenance', 'Accounts payable & receivable', 'Monthly MIS management reporting'],
    },
    {
      id: 'payroll-management',
      number: '03',
      title: 'Payroll & Statutory Compliance',
      category: 'accountant' as const,
      tagline: 'Salary processing, PF, ESI, PT & Form 16',
      description: 'Gross-to-net salary distribution, monthly payslip dispatch, Provident Fund (PF), ESI, Professional Tax (PT), Labour Welfare Fund (LWF), and Form 16 annual generation.',
      deliverables: ['Gross-to-net computation', 'PF, ESI & PT return filings', 'Quarterly TDS returns (Form 24Q)', 'Annual Form 16 generation'],
    },
    {
      id: 'income-tax-services',
      number: '04',
      title: 'Income Tax Services',
      category: 'accountant' as const,
      tagline: 'Direct tax computation & return e-filing',
      description: 'Corporate and personal ITR filing, advance tax scheduling, capital gains calculation, and tax scrutiny notice representations.',
      deliverables: ['Advance tax estimation', 'ITR e-filing (individual & corporate)', 'Capital gains tax advisory', 'Notice & scrutiny support'],
    },
    {
      id: 'gst-services',
      number: '05',
      title: 'GST Compliance & Reconciliation',
      category: 'accountant' as const,
      tagline: 'Monthly GSTR-1, 3B & GSTR-2B ITC audits',
      description: 'Complete GST registration, monthly GSTR filings, annual GSTR-9/9C reconciliation, and automated Input Tax Credit (ITC) audits matching GSTR-2B.',
      deliverables: ['Monthly GSTR-1 & 3B filings', 'GSTR-2B ITC audit matching', 'E-way bill & e-invoicing', 'GST annual return filing'],
    },
    {
      id: 'roc-compliance',
      number: '06',
      title: 'ROC & MCA Secretarial Compliance',
      category: 'accountant' as const,
      tagline: 'Registrar of Companies annual corporate filings',
      description: 'Ministry of Corporate Affairs (MCA) annual filings (AOC-4, MGT-7), Director DIR-3 KYC, share capital amendments, and statutory register upkeep.',
      deliverables: ['AOC-4 & MGT-7 filings', 'DIR-3 KYC verification', 'Company & LLP amendments', 'Statutory secretarial registers'],
    },
    {
      id: 'statutory-compliance',
      number: '07',
      title: 'Labor Laws & Commercial Compliance',
      category: 'accountant' as const,
      tagline: 'State and central commercial regulations',
      description: 'Alignment with central and state labor regulations, trade licenses, minimum wage mandates, gratuity acts, and statutory audit file preparation.',
      deliverables: ['Compliance calendar management', 'Labor law audit reports', 'Trade license filings', 'Inspection dossier preparation'],
    },
    {
      id: 'financial-planning',
      number: '08',
      title: 'Financial Planning & Treasury Oversight',
      category: 'accountant' as const,
      tagline: 'Cash flow modeling & balance reconciliation',
      description: 'Holistic working capital forecasting, multi-account bank reconciliations, debt structuring, and liquidity risk management.',
      deliverables: ['Cash flow forecasting', 'Multi-bank reconciliation', 'Debt & liability structuring', 'Financial health scorecards'],
    },
  ],

  // 2. DSI Estates (Builders, Developers & Property Management)
  DSI_ESTATES: [
    {
      id: 'property-management',
      number: '01',
      title: 'Comprehensive Property Management',
      category: 'estates' as const,
      tagline: 'End-to-end asset oversight & tenant administration',
      description: 'Complete real estate management across 5 core pillars: tenant leasing & KYC, rent collection & financial accounting, property maintenance, legal compliance, and vacancy marketing.',
      deliverables: ['Tenant screening & lease agreements', 'Rent collection & financial reporting', 'Routine & emergency maintenance', 'Local housing code compliance'],
    },
    {
      id: 'builders-and-developers',
      number: '02',
      title: 'Builders & Developers',
      category: 'estates' as const,
      tagline: 'Residential & commercial turnkey development',
      description: 'Turnkey property construction, architectural plan approvals, civil engineering coordination, and handover clearances across Bangalore.',
      deliverables: ['Plan sanction & approvals', 'Civil construction oversight', 'Vendor & contractor management', 'Occupancy certificate handover'],
    },
    {
      id: 'property-documentation',
      number: '03',
      title: '30-Year Title Search & Documentation',
      category: 'estates' as const,
      tagline: 'Ownership verification & Khata mutation',
      description: 'Rigorous due diligence verification covering 30-year ownership history, Encumbrance Certificate (EC) procurement, Khata / Mutation records, and property tax audit.',
      deliverables: ['30-year title chain search', 'Encumbrance Certificate (EC)', 'Khata transfer & mutation filings', 'Property tax clearance audit'],
    },
    {
      id: 'deed-execution',
      number: '04',
      title: 'Deed Execution & Sub-Registrar Conveyance',
      category: 'estates' as const,
      tagline: 'Drafting, stamp duty & legal registration',
      description: 'Drafting sale deeds, gift deeds, release deeds, and stamp duty evaluation with physical representation and liaison at Bangalore sub-registrar offices.',
      deliverables: ['Sale & gift deed drafting', 'Stamp duty calculation', 'Sub-registrar liaison', 'Certified copy procurement'],
    },
    {
      id: 'estate-support-services',
      number: '05',
      title: 'Succession & Family Settlements',
      category: 'estates' as const,
      tagline: 'Asset inheritance & dispute prevention',
      description: 'Support with partition deeds, power of attorney facilitation, legal heir documentation, and dispute prevention agreements for families and business houses.',
      deliverables: ['Power of attorney drafting', 'Legal heir certificate support', 'Family partition deeds', 'Settlement agreements'],
    },
  ],

  // 3. Legal Consultancy & Litigation Support (New Division)
  LEGAL_SERVICES: [
    {
      id: 'contracts-and-agreements',
      number: '01',
      title: 'Commercial Contracts, NDAs & IP Protection',
      category: 'legal' as const,
      tagline: 'Agreement drafting, negotiation & trademark filing',
      description: 'Drafting, vetting, and negotiating commercial agreements, SLAs, non-disclosure agreements (NDAs), vendor contracts, employment terms, and trademark/IP registration.',
      deliverables: ['Commercial contract drafting', 'Vendor & employment agreements', 'NDAs & confidentiality deeds', 'Trademark & IP filing'],
    },
    {
      id: 'civil-law-services',
      number: '02',
      title: 'Civil Law & Property Dispute Suits',
      category: 'legal' as const,
      tagline: 'Injunctions, partition suits & money recovery',
      description: 'Legal representation and document drafting for civil disputes: partition suits, recovery of money, specific performance of contracts, injunctions, and plaints.',
      deliverables: ['Plaint & written statement drafting', 'Partition & title suits', 'Injunction & stay applications', 'Money recovery proceedings'],
    },
    {
      id: 'family-law-services',
      number: '03',
      title: 'Family Law & Matrimonial Advisory',
      category: 'legal' as const,
      tagline: 'Marriage dissolution, custody, alimony & succession',
      description: 'Confidential counsel and representation for matrimonial matters, child custody, alimony and maintenance, guardianship, and family estate succession deeds.',
      deliverables: ['Matrimonial counsel & mediation', 'Child custody & maintenance', 'Guardianship documentation', 'Succession & probate advice'],
    },
    {
      id: 'criminal-law-services',
      number: '04',
      title: 'Criminal Defense, Bail & Corporate Fraud',
      category: 'legal' as const,
      tagline: 'Anticipatory bail & white-collar crime defense',
      description: 'Pre-litigation defense strategies, anticipatory and regular bail applications, corporate fraud defense, criminal breach of trust, and statutory complaint representation.',
      deliverables: ['Anticipatory & regular bail', 'White-collar crime defense', 'Criminal breach of trust cases', 'Defense strategy & drafting'],
    },
    {
      id: 'rera-compliance',
      number: '05',
      title: 'RERA Compliance & Tribunal Representation',
      category: 'legal' as const,
      tagline: 'Project registration, builder agreements & tribunal disputes',
      description: 'Guiding developers, buyers, and agents through Karnataka RERA project approvals, builder-buyer agreement vetting, and representation in RERA tribunal complaints.',
      deliverables: ['RERA project registration', 'Builder-buyer agreement vetting', 'RERA tribunal dispute filing', 'Buyer grievance representation'],
    },
  ],

  // MAS LLP Style "Why Us" Pillars
  WHY_US_FEATURES: [
    {
      title: 'Integrated Triad Synergy',
      desc: 'Single-window coordination uniting Chartered Auditing, Real Estate Development, and Legal Consultancy under one fiduciary standard.',
    },
    {
      title: 'Modern ERP Accounting',
      desc: 'Expert accounting teams operating on Zoho Books, Tally Prime, and BUSY with flexible full or partial outsourcing.',
    },
    {
      title: 'Rigorous 30-Year Property Diligence',
      desc: 'Flawless 30-year title chain search, Khata mutation, and Sub-Registrar deed conveyance across Bangalore Urban and Rural.',
    },
    {
      title: 'Direct Senior Counsel Access',
      desc: 'Consult directly with principal Amjad Ansari and senior associates without cumbersome junior layers.',
    },
  ],

  APPROACH_PILLARS: [
    {
      number: '01',
      title: 'Precision',
      subtitle: 'Rigorous calculation & legal scrutiny',
      description: 'Every ledger entry, tax computation, and property deed is double-checked for complete statutory accuracy.',
    },
    {
      number: '02',
      title: 'Professionalism',
      subtitle: 'Confidentiality and integrity',
      description: 'We safeguard client business details and personal estate matters with total discretion and trust.',
    },
    {
      number: '03',
      title: 'Reliability',
      subtitle: 'Strict deadline adherence',
      description: 'Proactive calendar vigilance eliminates penalties, missed deadlines, and filing delays.',
    },
  ],

  NAV_LINKS: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Vision', href: '/vision' },
    {
      label: 'Services',
      href: '/services',
      subItems: [
        {
          label: 'Auditing & Tax Setup',
          href: '/services?type=auditing',
          description: 'Ansari & Co. — FDI Setup, Zoho/Tally Accounting, GST, Income Tax & ROC',
        },
        {
          label: 'Real Estate & Property',
          href: '/services?type=real-estate',
          description: 'DSI Estates — Property Management, Builders & Title Verification',
        },
        {
          label: 'Legal Consultancy',
          href: '/services?type=legal',
          description: 'Civil, Family, Criminal Defense & RERA Tribunal Representation',
        },
      ],
    },
    { label: 'Contact Us', href: '/contact' },
  ],
};
