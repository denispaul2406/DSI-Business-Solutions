export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'accountant' | 'estates';
  tagline: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_CONFIG = {
  // Principal Leadership & Verified Business Identity
  FOUNDER_NAME: 'Amjad Ansari',
  COMPANY_NAME: 'DSI Business Solutions',
  SHORT_NAME: 'DSI',
  
  // Twin Sister Practices from Business Cards
  TAX_FIRM_NAME: 'Ansari & Co.',
  TAX_FIRM_DESCRIPTOR: 'Auditor and Tax Consultants',
  ESTATES_FIRM_NAME: 'DSI Estates',
  ESTATES_FIRM_DESCRIPTOR: 'Builders & Developers',
  DESCRIPTOR: 'Ansari & Co. (Auditors & Tax Consultants) • DSI Estates (Builders & Developers)',
  
  // Contact Details from Card
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
  
  BUSINESS_HOURS: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  TIMEZONE: 'IST (UTC+05:30)',
  
  ACCOUNTANT_SERVICES: [
    {
      id: 'income-tax-services',
      number: '01',
      title: 'Income Tax Services',
      category: 'accountant' as const,
      tagline: 'Direct tax planning, assessment & returns filing',
      description: 'Corporate and individual direct tax computation, strategic tax savings, advance tax estimation, return filing (ITR), and scrutiny notice representations.',
      deliverables: ['Advance tax estimation & schedule', 'ITR computation & e-filing', 'Capital gains tax advisory', 'Income tax notice & scrutiny support'],
    },
    {
      id: 'gst-services',
      number: '02',
      title: 'GST Services',
      category: 'accountant' as const,
      tagline: 'End-to-end indirect tax compliance & reconciliation',
      description: 'Comprehensive GST registration, monthly GSTR-1 and GSTR-3B filings, annual GSTR-9/9C reconciliation, and GSTR-2B Input Tax Credit (ITC) audits.',
      deliverables: ['Monthly & quarterly GSTR filings', 'ITC matching with GSTR-2B', 'E-way bill & e-invoicing compliance', 'GST audit assistance & annual returns'],
    },
    {
      id: 'roc-compliance',
      number: '03',
      title: 'ROC Compliance',
      category: 'accountant' as const,
      tagline: 'Registrar of Companies corporate secretarial filings',
      description: 'Ministry of Corporate Affairs (MCA) compliance, annual returns (AOC-4, MGT-7), Director DIR-3 KYC, company incorporation, and statutory register upkeep.',
      deliverables: ['Annual AOC-4 & MGT-7 filings', 'DIR-3 KYC verification', 'Company & LLP incorporation/amendments', 'Board resolutions & statutory registers'],
    },
    {
      id: 'statutory-compliance',
      number: '04',
      title: 'Statutory Compliances',
      category: 'accountant' as const,
      tagline: 'Adherence to Indian commercial and labor regulations',
      description: 'Comprehensive alignment with Indian commercial statutes, labor welfare guidelines, professional tax, and periodic compliance calendar monitoring.',
      deliverables: ['Statutory calendar tracking', 'Filing preparation & validation', 'Labor & professional tax filings', 'Audit documentation dossier'],
    },
    {
      id: 'investments-planning',
      number: '05',
      title: 'Investments Planning',
      category: 'accountant' as const,
      tagline: 'Strategic wealth allocation & portfolio tax efficiency',
      description: 'Fiduciary investment guidance designed to optimize capital growth, minimize tax incidence, and build structured financial resilience for families and enterprises.',
      deliverables: ['Tax-efficient asset allocation', 'Retirement & surplus fund planning', 'Capital gain reinvestment strategy', 'Periodic portfolio performance review'],
    },
    {
      id: 'business-planning',
      number: '06',
      title: 'Business Planning',
      category: 'accountant' as const,
      tagline: 'Corporate structuring & commercial feasibility',
      description: 'Strategic advisory for company founders and partnerships covering business models, project feasibility reports, capital requirements, and entity restructuring.',
      deliverables: ['Project feasibility reports', 'Entity structure advisory (Pvt Ltd / LLP)', 'Working capital modeling', 'Cost reduction & margin optimization'],
    },
    {
      id: 'financial-planning',
      number: '07',
      title: 'Financial Planning',
      category: 'accountant' as const,
      tagline: 'Comprehensive cash flow & wealth strategy',
      description: 'Holistic financial planning harmonizing income flows, expenditure controls, liability mitigation, and long-term liquidity reserves.',
      deliverables: ['Cash flow modeling & budgeting', 'Debt & liability structuring', 'Emergency reserve allocation', 'Comprehensive financial health scorecard'],
    },
    {
      id: 'bookkeeping',
      number: '08',
      title: 'Bookkeeping & Accounting',
      category: 'accountant' as const,
      tagline: 'Structured financial records & general ledger',
      description: 'Structured financial record keeping for complete visibility, organized ledgers, accounts payable/receivable management, and statutory audit readiness.',
      deliverables: ['Daily transaction recording', 'General ledger upkeep', 'Debtor & creditor aging schedules', 'Monthly MIS management reports'],
    },
    {
      id: 'payroll-management',
      number: '09',
      title: 'Payroll Management',
      category: 'accountant' as const,
      tagline: 'Accurate payroll, PF, ESI & PT processing',
      description: 'Timely and compliant payroll processing covering salary computation, employee deductions, Provident Fund (PF), ESI, Professional Tax, and Form 16 issuance.',
      deliverables: ['Monthly salary computation & payslips', 'PF, ESI & PT return filings', 'TDS salary deductions & Form 24Q', 'Annual Form 16 generation'],
    },
    {
      id: 'bank-reconciliation',
      number: '10',
      title: 'Bank Reconciliation & Treasury',
      category: 'accountant' as const,
      tagline: 'Statement matching & cash flow oversight',
      description: 'Periodic bank balance validation, discrepancy investigation, fund flow oversight, and liquidity management to safeguard business assets.',
      deliverables: ['Multi-account bank matching', 'Discrepancy investigation', 'Unrecorded transaction adjustment', 'Audit trail verification'],
    },
  ],

  DSI_ESTATES: [
    {
      id: 'builders-and-developers',
      number: '01',
      title: 'Builders & Developers',
      category: 'estates' as const,
      tagline: 'Residential and commercial property development',
      description: 'Turnkey property development, architectural layout execution, construction coordination, and structural project management across Bangalore.',
      deliverables: ['Project layout & plan sanction', 'Civil construction oversight', 'Contractor & vendor management', 'Handover & occupancy clearance'],
    },
    {
      id: 'property-management',
      number: '02',
      title: 'Property Management',
      category: 'estates' as const,
      tagline: 'Structured oversight of residential & commercial assets',
      description: 'Comprehensive asset management, tenant administration, lease enforcement, rent collection oversight, and routine property maintenance.',
      deliverables: ['Lease agreement administration', 'Tenant documentation & KYC', 'Rent collection oversight', 'Inspection & maintenance reports'],
    },
    {
      id: 'deed-execution',
      number: '03',
      title: 'Deed Execution & Conveyance',
      category: 'estates' as const,
      tagline: 'Formal legal conveyance and registration',
      description: 'Drafting and formal execution of sale deeds, gift deeds, release deeds, stamp duty calculations, and sub-registrar registration formalities.',
      deliverables: ['Sale deed & gift deed drafting', 'Stamp duty & registration assessment', 'Sub-registrar liaison', 'Certified registered copies'],
    },
    {
      id: 'property-documentation',
      number: '04',
      title: 'Property Documentation & Title Search',
      category: 'estates' as const,
      tagline: 'Immaculate paperwork & title chain verification',
      description: 'Due diligence verification of ownership records, mutation filings, Encumbrance Certificate (EC) procurement, and property tax records.',
      deliverables: ['Title deed verification (30-year search)', 'Encumbrance Certificate (EC)', 'Khata / Mutation documentation', 'Property tax clearance support'],
    },
    {
      id: 'estate-support-services',
      number: '05',
      title: 'Estate Support & Succession Services',
      category: 'estates' as const,
      tagline: 'End-to-end advisory for families and enterprises',
      description: 'Support with family settlements, succession paperwork, power of attorney facilitation, partition deeds, and dispute prevention documentation.',
      deliverables: ['Power of attorney drafting', 'Succession documentation assistance', 'Partition & family settlement deeds', 'NOC & clearance coordination'],
    },
  ],

  APPROACH_PILLARS: [
    {
      number: '01',
      title: 'Precision',
      subtitle: 'Rigorous attention to detail',
      description: 'Financial ledgers, tax computations, and legal property deeds demand zero margin for error. Every record is verified with meticulous standards.',
    },
    {
      number: '02',
      title: 'Professionalism',
      subtitle: 'Discreet, ethical, and reliable',
      description: 'We treat our clients’ proprietary business information and personal estate affairs with strict confidentiality and integrity.',
    },
    {
      number: '03',
      title: 'Reliability',
      subtitle: 'Consistent, deadline-driven execution',
      description: 'Statutory compliance and property registrations depend on calendar vigilance. We deliver proactive oversight so your operations run seamlessly.',
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
          label: 'Auditing & Taxation',
          href: '/services?type=auditing',
          description: 'Ansari & Co. — Income Tax, GST, ROC, Compliances & Planning',
        },
        {
          label: 'Real Estate',
          href: '/services?type=real-estate',
          description: 'DSI Estates — Builders & Developers & Property Advisory',
        },
      ],
    },
    { label: 'Contact Us', href: '/contact' },
  ],
};
