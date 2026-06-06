// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. NAVIGATION & MOBILE BURGER MENU
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('mobile-nav-open');
    });

    // Close menu when links are clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-nav-open');
      });
    });
  }

  // Active section nav highlighting on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });


  /* ==========================================================================
     2. PROFESSIONAL JOURNEY — 3D GLOBE CAROUSEL
     ========================================================================== */
  const journeyData = [
    {
      id: 'oracle', letter: 'O', color: '#e06030',
      company: 'Oracle India', role: 'Principal Consultant',
      dates: 'Jan 2025 – Present', dateShort: '2025–Now',
      brief: 'Leading Digital & Core Banking delivery across EMEA Tier-1 banking clients.',
      impact: '📊 6–13 Eng Teams · EMEA Region',
      chips: ['AI + Banking', 'Principal Consultant'],
      svg: `<svg viewBox="0 0 120 36" width="90" height="27" aria-label="Oracle" role="img"><text x="2" y="28" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" fill="#C74634" letter-spacing="-1">ORACLE</text></svg>`,
      tags: [
        {l:'Java',c:'tag-java'},{l:'OBDX',c:'tag-banking'},{l:'Agentic AI',c:'tag-ai'},
        {l:'AWS',c:'tag-devops'},{l:'Spring Boot',c:'tag-java'},{l:'FLEXCUBE',c:'tag-banking'},
      ],
      bullets: [
        '<strong>Team Leadership:</strong> Cross-functional delivery for Tier-1 banks across EMEA, directing architecture and client relationships.',
        '<strong>Digital Banking (Abu Dhabi Bank):</strong> Spearheaded full-cycle OBDX implementation for retail and corporate customers in the UAE.',
        '<strong>Core Banking Rollouts:</strong> Managed deposit, loan, and GL modules for UCB Bank & FBC across African markets.',
        '<strong>AI Integration:</strong> Integrated Agentic AI for automated transaction routing, compliance screening, and DB optimization.',
        '<strong>CI/CD Acceleration:</strong> AI-powered deployment pipelines reducing delivery timelines by 10%.',
      ]
    },
    {
      id: 'ibm', letter: 'I', color: '#006699',
      company: 'IBM India', role: 'Lead Technical Advisor',
      dates: 'Aug 2023 – Dec 2024', dateShort: '2023–24',
      brief: 'Managed 40-engineer team with 99.9% uptime SLA across 13 banking systems.',
      impact: '📊 40 Engineers · 13 Critical Apps',
      chips: ['Delivery Lead', 'L1-L3 Support'],
      svg: `<svg viewBox="0 0 80 36" width="64" height="29" aria-label="IBM" role="img"><text x="2" y="28" font-family="Arial Black,Arial,sans-serif" font-size="32" font-weight="900" fill="#1F70C1" letter-spacing="2">IBM</text></svg>`,
      tags: [
        {l:'Java',c:'tag-java'},{l:'Kafka',c:'tag-devops'},{l:'PostgreSQL',c:'tag-devops'},
        {l:'REST API',c:'tag-java'},{l:'Jenkins',c:'tag-devops'},
      ],
      bullets: [
        '<strong>Uptime Governance:</strong> Guaranteed 99.9%+ availability for DMS, RSA, Internet Banking, and Merchant apps serving millions of users.',
        '<strong>Streaming Integration:</strong> Configured Apache Kafka for large-volume banking transaction pipelines.',
        '<strong>Data Optimization:</strong> High-efficiency Base64 image compression and strict schema validation for performance.',
        '<strong>Project Governance:</strong> WBS plans, resource schedules, and executive stakeholder management.',
      ]
    },
    {
      id: 'wipro', letter: 'W', color: '#9400d3',
      company: 'Wipro Limited', role: 'Senior Project Engineer',
      dates: 'Nov 2020 – Aug 2023', dateShort: '2020–23',
      brief: 'Secure REST back-end and AngularJS front-end for global financial services.',
      impact: '📊 3 Years · FinTech & Security',
      chips: ['Full Stack Dev', 'FinTech'],
      svg: `<svg viewBox="0 0 120 36" width="90" height="27" aria-label="Wipro" role="img"><circle cx="12" cy="18" r="10" fill="#341C75" opacity="0.15" /><circle cx="12" cy="18" r="6" fill="#341C75" opacity="0.3" /><circle cx="12" cy="8" r="2.5" fill="#F59E0B" /><circle cx="20" cy="13" r="2.5" fill="#EF4444" /><circle cx="20" cy="23" r="2.5" fill="#10B981" /><circle cx="12" cy="28" r="2.5" fill="#3B82F6" /><circle cx="4" cy="23" r="2.5" fill="#8B5CF6" /><circle cx="4" cy="13" r="2.5" fill="#F97316" /><circle cx="12" cy="18" r="4" fill="#1e1b4b" /><text x="27" y="26" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="700" fill="#341C75" letter-spacing="0">Wipro</text></svg>`,
      tags: [
        {l:'Java',c:'tag-java'},{l:'Spring Security',c:'tag-java'},{l:'AngularJS',c:'tag-java'},
        {l:'REST API',c:'tag-java'},{l:'JUnit',c:'tag-devops'},
      ],
      bullets: [
        '<strong>Token Security:</strong> Token-based auth filters using Spring Security for a core banking trading platform.',
        '<strong>UI Customization:</strong> AngularJS front-end components for internal administration portals.',
        '<strong>Quality Assurance:</strong> Mentored junior engineers, enforced TDD with comprehensive JUnit suites.',
      ]
    },
    {
      id: 'synergy', letter: 'S', color: '#2d8a4e',
      company: 'Synergy Connect', role: 'Senior Developer',
      dates: 'Jan 2017 – Nov 2020', dateShort: '2017–20',
      brief: 'GovTech & CSR platforms serving 100K+ farmers and government stakeholders.',
      impact: '📊 100K+ Users · GovTech',
      chips: ['GovTech', 'SaaS Architect'],
      svg: `<svg viewBox="0 0 200 36" width="150" height="27" aria-label="Synergy Connect" role="img"><circle cx="10" cy="10" r="4" fill="#00BFA5" /><circle cx="22" cy="20" r="4" fill="#00BFA5" /><circle cx="10" cy="26" r="3" fill="#00BFA5" opacity="0.7" /><line x1="10" y1="10" x2="22" y2="20" stroke="#00BFA5" stroke-width="1.5" /><line x1="22" y1="20" x2="10" y2="26" stroke="#00BFA5" stroke-width="1.5" opacity="0.7" /><text x="34" y="26" font-family="Arial,Helvetica,sans-serif" font-size="19" font-weight="700" fill="#00BFA5" letter-spacing="0">Synergy Connect</text></svg>`,
      tags: [
        {l:'Java',c:'tag-java'},{l:'Spring Boot',c:'tag-java'},{l:'Hibernate',c:'tag-java'},
        {l:'MongoDB',c:'tag-devops'},{l:'PostgreSQL',c:'tag-devops'},
      ],
      bullets: [
        '<strong>Agricultural Digitization:</strong> Built E-Peek Pahani with TATA Foundation & Maharashtra Govt — digitizing land records for 100K+ farmers.',
        '<strong>SaaS Architecture:</strong> Multi-tenant CSR analytics portal using Spring Boot and Hibernate.',
        '<strong>Mentorship:</strong> Led 5 junior developers, defining development protocols and code standards.',
      ]
    },
    {
      id: 'neterson', letter: 'N', color: '#b8860b',
      company: 'Neterson Technologies', role: 'Software Engineer',
      dates: 'Sep 2015 – Dec 2016', dateShort: '2015–16',
      brief: 'Built payroll, attendance & leave modules for the flagship HR Align+ SaaS platform.',
      impact: '📊 First Product Launch · HR SaaS',
      chips: ['HR SaaS', 'Full Stack'],
      svg: `<svg viewBox="0 0 160 36" width="120" height="27" aria-label="Neterson Technologies" role="img"><polygon points="14,2 24,8 24,20 14,26 4,20 4,8" fill="none" stroke="#F59E0B" stroke-width="2" /><text x="13" y="20" font-family="Arial Black,Arial,sans-serif" font-size="11" font-weight="900" fill="#F59E0B" text-anchor="middle">N</text><text x="32" y="26" font-family="Arial,Helvetica,sans-serif" font-size="19" font-weight="700" fill="#F59E0B" letter-spacing="0">Neterson</text></svg>`,
      tags: [
        {l:'Java',c:'tag-java'},{l:'J2EE',c:'tag-java'},{l:'Hibernate',c:'tag-java'},
        {l:'SQL Server',c:'tag-devops'},
      ],
      bullets: [
        '<strong>End-to-End Delivery:</strong> Owned full software design lifecycle from functional mapping to DB schema for payroll modules.',
        '<strong>SQL Optimization:</strong> Refined heavy payroll SQL procedures to resolve computation lag during peak dates.',
      ]
    },
  ];

  const certsData = [
    {
      company: 'Oracle University', role: 'OCI Generative AI Professional',
      dates: 'Issued 2026', dateShort: '2026',
      brief: 'Certified professional in Oracle Cloud Infrastructure Generative AI.',
      impact: '📊 Professional Level',
      chips: ['AI', 'Cloud'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#C74634" stroke-width="2"/>
              <g transform="translate(18, 30) scale(0.28)">
                <path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" fill="#C74634"/>
              </g>
              <text x="50" y="65" font-family="Arial,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">GEN AI</text>
              <text x="50" y="78" font-family="Arial,sans-serif" font-size="7" fill="#C74634" text-anchor="middle" font-weight="bold">PROFESSIONAL</text>
            </svg>`,
      tags: [{l:'AI',c:'tag-ai'}, {l:'OCI',c:'tag-devops'}],
      bullets: ['Demonstrated proficiency in OCI Generative AI models.']
    },
    {
      company: 'Oracle', role: 'Oracle Banking Digital Experience (OBDX) Certified',
      dates: 'Issued 2026', dateShort: '2026',
      brief: 'Certified implementation specialist for OBDX.',
      impact: '📊 Specialist',
      chips: ['Banking', 'OBDX'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#C74634" stroke-width="2"/>
              <g transform="translate(18, 30) scale(0.28)">
                <path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" fill="#C74634"/>
              </g>
              <text x="50" y="65" font-family="Arial,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">OBDX</text>
              <text x="50" y="78" font-family="Arial,sans-serif" font-size="7" fill="#C74634" text-anchor="middle" font-weight="bold">CERTIFIED</text>
            </svg>`,
      tags: [{l:'Banking',c:'tag-banking'}],
      bullets: ['Expertise in OBDX configuration and deployment.']
    },
    {
      company: 'Oracle', role: 'Oracle FLEXCUBE Basic Certified',
      dates: 'Issued 2026', dateShort: '2026',
      brief: 'Certified basic professional for Oracle FLEXCUBE Core Banking.',
      impact: '📊 Professional Level',
      chips: ['Core Banking', 'FLEXCUBE'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#C74634" stroke-width="2"/>
              <g transform="translate(18, 30) scale(0.28)">
                <path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" fill="#C74634"/>
              </g>
              <text x="50" y="65" font-family="Arial,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">FLEXCUBE</text>
              <text x="50" y="78" font-family="Arial,sans-serif" font-size="7" fill="#C74634" text-anchor="middle" font-weight="bold">CERTIFIED</text>
            </svg>`,
      tags: [{l:'Banking',c:'tag-banking'}],
      bullets: ['Solid understanding of FLEXCUBE modules.']
    },
    {
      company: 'Oracle', role: 'Oracle Java Certified Professional',
      dates: 'Issued 2026', dateShort: '2026',
      brief: 'Recognized professional in advanced Java programming.',
      impact: '📊 Professional Level',
      chips: ['Java', 'Development'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#C74634" stroke-width="2"/>
              <g transform="translate(18, 30) scale(0.28)">
                <path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" fill="#C74634"/>
              </g>
              <text x="50" y="65" font-family="Arial,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">JAVA SE</text>
              <text x="50" y="78" font-family="Arial,sans-serif" font-size="7" fill="#C74634" text-anchor="middle" font-weight="bold">PROFESSIONAL</text>
            </svg>`,
      tags: [{l:'Java',c:'tag-java'}],
      bullets: ['Advanced proficiency in Java SE/EE.']
    },
    {
      company: 'Amazon Web Services', role: 'AWS Cloud Practitioner',
      dates: 'Issued 2026', dateShort: '2026',
      brief: 'Certified in fundamental AWS cloud concepts.',
      impact: '📊 Cloud Native',
      chips: ['Cloud', 'AWS'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <rect x="5" y="5" width="90" height="90" rx="15" fill="#12131A" stroke="#FF9900" stroke-width="2"/>
              <g transform="translate(18, 20) scale(0.22)">
                <path d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2 c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8 c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8 c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4 c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1 c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6 c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7 c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6 C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4 c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1 h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5 c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1 c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8 c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3 c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5 c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1 c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1 c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2 c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1 c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6 c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z" fill="#FFF"/>
                <path d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4 c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z" fill="#FF9900"/>
                <path d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5 c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z" fill="#FF9900"/>
              </g>
              <text x="50" y="70" font-family="Arial,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="bold">CLOUD</text>
              <text x="50" y="82" font-family="Arial,sans-serif" font-size="7" fill="#FF9900" text-anchor="middle" font-weight="bold">PRACTITIONER</text>
            </svg>`,
      tags: [{l:'AWS',c:'tag-devops'}],
      bullets: ['Foundation of AWS cloud architecture and services.']
    }
  ];

  const skillsData = [
    {
      company: 'AI & Agents', role: 'Advanced AI Systems',
      dates: 'Expertise', dateShort: 'AI',
      brief: 'Building autonomous, intelligent agentic workflows and integrations.',
      impact: '🤖 Generative AI',
      chips: ['AI', 'Agents'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#3b82f6" stroke-width="2"/>
              <text x="50" y="65" font-size="40" text-anchor="middle">🤖</text>
            </svg>`,
      tags: [],
      bullets: [
        '<strong>Agentic AI:</strong> Systems that act autonomously to achieve complex goals.',
        '<strong>Multi-Agent Systems:</strong> Coordinated networks of AI agents collaborating on workflows.',
        '<strong>LangChain:</strong> Framework for developing applications powered by language models.',
        '<strong>RAG:</strong> Retrieval-Augmented Generation for grounded, context-aware AI responses.',
        '<strong>OpenAI API:</strong> Integrating GPT models for NLP and reasoning tasks.',
        '<strong>OCI Generative AI:</strong> Leveraging Oracle Cloud’s enterprise-grade LLM services.',
        '<strong>Prompt Engineering:</strong> Designing structured inputs to optimize AI model outputs.',
        '<strong>LangChain4j:</strong> Java-native framework for integrating LLMs into enterprise apps.'
      ]
    },
    {
      company: 'Java & APIs', role: 'Enterprise Backend',
      dates: 'Expertise', dateShort: 'Java',
      brief: 'Designing robust, scalable backend services and microservices.',
      impact: '☕ Core Engineering',
      chips: ['Java', 'Backend'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#f59e0b" stroke-width="2"/>
              <text x="50" y="65" font-size="40" text-anchor="middle">☕</text>
            </svg>`,
      tags: [],
      bullets: [
        '<strong>Java / J2EE:</strong> Core enterprise programming and robust application architecture.',
        '<strong>Spring Boot:</strong> Framework for rapid development of stand-alone, production-grade Spring applications.',
        '<strong>Spring MVC:</strong> Web framework for building scalable RESTful services.',
        '<strong>Spring Security:</strong> Comprehensive security framework for authentication and authorization.',
        '<strong>Hibernate / JPA:</strong> ORM tools for mapping Java objects to relational databases.',
        '<strong>REST Microservices:</strong> Designing decoupled, API-first scalable services.',
        '<strong>Apache Kafka:</strong> Distributed event streaming platform for high-throughput pipelines.',
        '<strong>AngularJS:</strong> Structural framework for dynamic web apps.',
        '<strong>JUnit / TDD:</strong> Test-driven development ensuring code reliability and coverage.'
      ]
    },
    {
      company: 'Digital & Core Banking', role: 'Financial Systems',
      dates: 'Expertise', dateShort: 'Banking',
      brief: 'Implementing and enhancing critical banking infrastructures.',
      impact: '🏦 FinTech',
      chips: ['Banking', 'Oracle'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#10b981" stroke-width="2"/>
              <text x="50" y="65" font-size="40" text-anchor="middle">🏦</text>
            </svg>`,
      tags: [],
      bullets: [
        '<strong>Oracle OBDX:</strong> Implementation and customization of Digital Banking Experience platforms.',
        '<strong>Oracle FLEXCUBE:</strong> Core banking system deployment, modules, and extensions.',
        '<strong>Core Banking Enhancements:</strong> Upgrading legacy financial engines for modern requirements.',
        '<strong>Digital Banking:</strong> Architecting secure, multi-channel digital banking interfaces.',
        '<strong>Loans & Deposits GL:</strong> Deep domain expertise in core lending and accounting modules.',
        '<strong>EMEA Banking:</strong> Localization and regulatory compliance for European/Middle-Eastern markets.'
      ]
    },
    {
      company: 'DevOps & DB', role: 'Infrastructure & Data',
      dates: 'Expertise', dateShort: 'DevOps',
      brief: 'Automating deployments and managing highly available databases.',
      impact: '☁️ Cloud',
      chips: ['AWS', 'CI/CD'],
      svg: `<svg viewBox="0 0 100 100" width="80" height="80" class="cert-svg">
              <circle cx="50" cy="50" r="48" fill="#12131A" stroke="#8b5cf6" stroke-width="2"/>
              <text x="50" y="65" font-size="40" text-anchor="middle">☁️</text>
            </svg>`,
      tags: [],
      bullets: [
        '<strong>AWS EC2:</strong> Scalable cloud compute provisioning and management.',
        '<strong>PostgreSQL:</strong> Advanced open-source relational database architecture.',
        '<strong>Oracle DB:</strong> Enterprise-grade database management and SQL optimization.',
        '<strong>MongoDB:</strong> NoSQL database design for flexible, document-based storage.',
        '<strong>Docker:</strong> Containerization for consistent environments across the deployment lifecycle.',
        '<strong>Jenkins CI/CD:</strong> Automation of continuous integration and continuous delivery pipelines.',
        '<strong>Git / Bitbucket:</strong> Source control management and collaborative team workflows.'
      ]
    }
  ];

  /* ==========================================================================
     REUSABLE 3D CAROUSEL LOGIC
     ========================================================================== */
  function init3DCarousel(config) {
    const {
      data,
      carouselId,
      sceneId,
      detailLogoContainerId,
      detailChipsId,
      detailRoleId,
      detailCompanyId,
      detailDatesId,
      detailBriefId,
      detailImpactId,
      detailTagsId,
      detailExpandBtnId,
      detailFadeContainerId
    } = config;

    const globeCarousel   = document.getElementById(carouselId);
    const globeScene      = document.getElementById(sceneId);
    const detailLogoContainer = document.getElementById(detailLogoContainerId);
    const detailChips     = document.getElementById(detailChipsId);
    const detailRole      = document.getElementById(detailRoleId);
    const detailCompany   = document.getElementById(detailCompanyId);
    const detailDates     = document.getElementById(detailDatesId);
    const detailBrief     = document.getElementById(detailBriefId);
    const detailImpact    = document.getElementById(detailImpactId);
    const detailTags      = document.getElementById(detailTagsId);
    const detailExpandBtn = document.getElementById(detailExpandBtnId);
    const detailFadeContainer = document.getElementById(detailFadeContainerId);
    
    // Shared Modal
    const modalOverlay    = document.getElementById('journey-modal-overlay');
    const modalClose      = document.getElementById('journey-modal-close');

    if (!globeCarousel) return;

    const TOTAL      = data.length;
    const ANGLE_STEP = 360 / TOTAL;
    const RADIUS     = config.radiusBase || 270;
    const PERIOD_MS  = 18000;

    let currentAngle      = 0;
    let elapsedBeforePause = 0;
    let lastTimestamp     = null;
    let isHovered         = false;
    let isModalOpen       = false;
    let frontIndex        = 0;

    // Build card DOM
    const cardEls = data.map((d, i) => {
      const el = document.createElement('div');
      el.className = 'globe-card';
      el.id = `${carouselId}-card-${i}`;
      el.dataset.index = i;
      el.innerHTML = `
        <div class="card-face simplified-card">
          <div class="card-logo-container">${d.svg}</div>
          <h3 class="card-role-full">${d.role}</h3>
          <p class="card-company-text">${d.company}</p>
          <span class="card-year-pill">${d.dateShort}</span>
        </div>`;
      el.addEventListener('click', () => openJourneyModal(i));
      globeCarousel.appendChild(el);
      return el;
    });

    let detailTimeout;
    function applyDetailPanelData(idx) {
      const d = data[idx];
      if (detailLogoContainer) detailLogoContainer.innerHTML = d.svg;
      if (detailChips) detailChips.innerHTML = (d.chips||[]).map(c => `<span class="role-chip">${c}</span>`).join('');
      if (detailRole) detailRole.textContent    = d.role;
      if (detailCompany) detailCompany.textContent = d.company;
      if (detailDates) detailDates.textContent   = d.dates;
      if (detailBrief) detailBrief.textContent   = d.brief;
      if (detailImpact) detailImpact.textContent  = d.impact;
      if (detailTags) detailTags.innerHTML = (d.tags||[]).map(t => `<span class="card-tag ${t.c}">${t.l}</span>`).join('');
      if (detailExpandBtn) detailExpandBtn.dataset.index = idx;
    }

    function updateDetailPanel(idx, immediate = false) {
      if (immediate) {
        applyDetailPanelData(idx);
        return;
      }
      if (detailFadeContainer) detailFadeContainer.classList.add('fade-out');
      clearTimeout(detailTimeout);
      detailTimeout = setTimeout(() => {
        applyDetailPanelData(idx);
        if (detailFadeContainer) detailFadeContainer.classList.remove('fade-out');
      }, 300);
    }

    function animateGlobe(timestamp) {
      if (!isHovered && !isModalOpen) {
        if (lastTimestamp === null) lastTimestamp = timestamp;
        elapsedBeforePause += timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        currentAngle = (elapsedBeforePause / PERIOD_MS) * 360 % 360;
      } else {
        lastTimestamp = null;
      }

      let newFront = 0;
      let minDistFromFront = Infinity;

      cardEls.forEach((el, i) => {
        const baseOffset = 180 + i * ANGLE_STEP;
        const cardAngle  = (currentAngle + baseOffset) % 360;
        const rad = cardAngle * Math.PI / 180;

        let x = 0, y = 0, z = 0, scale = 1, opacity = 1, zIdx = 1;
        const normalized = ((cardAngle % 360) + 360) % 360;
        const dist = Math.min(Math.abs(normalized - 180), 360 - Math.abs(normalized - 180));

        if (config.isLinear) {
          let delta = normalized - 180;
          if (delta > 180) delta -= 360;
          if (delta < -180) delta += 360;
          
          const linearDist = Math.abs(delta);

          // Tighter vertical spacing: cards are 130px apart
          // delta goes from -180 to 180.
          // Let's map delta=60 to 140px instead of 220px
          y = -(delta / 60) * 140; 
          z = 0;

          // Keep opacity high enough so 3 cards are clearly visible
          opacity = linearDist < 100 ? 1 - (linearDist / 120) : 0;
          // Scale: middle is 1.0, cards at delta=60 are ~0.7
          scale = 0.5 + (0.5 * Math.max(0, 1 - (linearDist / 100)));
          
          zIdx = Math.round((1 - linearDist/180) * 100);
          el.classList.toggle('card-is-front', linearDist < 10);
          el.style.transform = `translateY(${y.toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        } else {
          // Standard 3D circle carousel (Horizontal)
          const cosA = Math.cos(rad);
          const sinA = Math.sin(rad);

          // Horizontal rotation uses X and Z axes
          x = sinA * RADIUS;
          z = -cosA * RADIUS;
          y = 0; // Center vertically

          opacity = dist < 75 ? 1 - (dist / 75) : 0;
          scale = 0.5 + (0.5 * Math.max(0, 1 - (dist / 90)));
          zIdx = Math.round((1 - dist/180) * 100);
          el.classList.toggle('card-is-front', dist < 10);

          el.style.transform = `translateX(${x.toFixed(1)}px) translateY(${y.toFixed(1)}px) translateZ(${z.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        }

        el.style.opacity   = opacity.toFixed(3);
        el.style.zIndex    = zIdx;

        if (dist < minDistFromFront) { minDistFromFront = dist; newFront = i; }
      });

      if (newFront !== frontIndex) {
        frontIndex = newFront;
        updateDetailPanel(frontIndex);
      }

      requestAnimationFrame(animateGlobe);
    }

    if (globeScene) {
      globeScene.addEventListener('mouseenter', () => { isHovered = true;  });
      globeScene.addEventListener('mouseleave', () => { isHovered = false; });
    }

    function openJourneyModal(idx) {
      const d = data[idx];
      const modalBadge = document.getElementById('modal-badge');
      if (modalBadge) {
        modalBadge.innerHTML = d.svg;
        modalBadge.style.background = 'transparent';
        modalBadge.style.boxShadow = 'none';
        modalBadge.style.width = '64px';
        modalBadge.style.height = '64px';
      }
      document.getElementById('modal-role-title').textContent    = d.role;
      document.getElementById('modal-company-name').textContent  = d.company;
      document.getElementById('modal-dates-pill').textContent    = d.dates;
      document.getElementById('modal-summary-text').textContent  = d.brief;
      document.getElementById('modal-bullets-list').innerHTML    = (d.bullets||[]).map(b => `<li>${b}</li>`).join('');
      document.getElementById('modal-tech-tags').innerHTML       = (d.tags||[]).map(t => `<span class="card-tag ${t.c}">${t.l}</span>`).join('');
      modalOverlay.removeAttribute('hidden');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      isModalOpen = true;
    }

    function closeJourneyModal() {
      modalOverlay.setAttribute('hidden', '');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      isModalOpen = false;
    }

    // Modal listeners (might be attached multiple times, but for simplicity we re-attach. Better to use one global modal handler or inline check)
    if (modalClose) modalClose.onclick = closeJourneyModal;
    if (modalOverlay) modalOverlay.onclick = e => { if (e.target === modalOverlay) closeJourneyModal(); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modalOverlay.hasAttribute('hidden')) closeJourneyModal(); });
    if (detailExpandBtn) detailExpandBtn.onclick = () => openJourneyModal(+detailExpandBtn.dataset.index || frontIndex);

    updateDetailPanel(0, true);
    requestAnimationFrame(animateGlobe);
  }

  // Init Experience
  init3DCarousel({
    data: journeyData,
    carouselId: 'globe-carousel',
    sceneId: 'globe-scene',
    detailLogoContainerId: 'detail-logo-container',
    detailChipsId: 'detail-chips',
    detailRoleId: 'detail-role',
    detailCompanyId: 'detail-company',
    detailDatesId: 'detail-dates',
    detailBriefId: 'detail-brief',
    detailImpactId: 'detail-impact',
    detailTagsId: 'detail-tags',
    detailExpandBtnId: 'detail-expand-btn',
    detailFadeContainerId: 'detail-fade-container'
  });

  // Init Certifications
  init3DCarousel({
    data: certsData,
    carouselId: 'certs-carousel',
    sceneId: 'certs-scene',
    detailLogoContainerId: 'certs-detail-logo-container',
    detailChipsId: 'certs-detail-chips',
    detailRoleId: 'certs-detail-role',
    detailCompanyId: 'certs-detail-company',
    detailDatesId: 'certs-detail-dates',
    detailBriefId: 'certs-detail-brief',
    detailImpactId: 'certs-detail-impact',
    detailTagsId: 'certs-detail-tags',
    detailExpandBtnId: 'certs-detail-expand-btn',
    detailFadeContainerId: 'certs-detail-fade-container'
  });




  /* ==========================================================================
     3. NATIVE DIALOG MODAL CONTROLLER & FALLBACKS
     ========================================================================== */
  // denml Modal
  const modalDenml = document.getElementById('modal-denml');
  const btnOpenDenml = document.getElementById('open-denml-modal');
  const btnCloseDenml = document.getElementById('close-denml-modal');

  if (modalDenml && btnOpenDenml && btnCloseDenml) {
    btnOpenDenml.addEventListener('click', () => modalDenml.showModal());
    btnCloseDenml.addEventListener('click', () => modalDenml.close());
    setupDialogBackdropClose(modalDenml);
  }

  // New Bharat Skills Modal
  const modalBharat = document.getElementById('modal-bharat');
  const btnOpenBharat = document.getElementById('open-bharat-modal');
  const btnCloseBharat = document.getElementById('close-bharat-modal');

  if (modalBharat && btnOpenBharat && btnCloseBharat) {
    btnOpenBharat.addEventListener('click', () => modalBharat.showModal());
    btnCloseBharat.addEventListener('click', () => modalBharat.close());
    setupDialogBackdropClose(modalBharat);
  }

  // Backdrop click close fallback handler for older/unsupporting browsers
  function setupDialogBackdropClose(dialogEl) {
    // If browser supports native closedby attribute, let it handle dismissal
    if ('closedBy' in HTMLDialogElement.prototype) {
      dialogEl.setAttribute('closedby', 'any');
      return;
    }

    // Fallback backdrop click logic
    dialogEl.addEventListener('click', (event) => {
      if (event.target !== dialogEl) return;

      const rect = dialogEl.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        dialogEl.close();
      }
    });
  }


  /* ==========================================================================
     4. AI PORTFOLIO ASSISTANT CHATBOT ENGINE
     ========================================================================== */
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const chatForm = document.getElementById('chat-input-form');
  const chatInput = document.getElementById('chat-input');
  const suggestBtns = document.querySelectorAll('.suggested-prompt-btn');

  // Pre-programmed Q&A knowledge base
  const knowledgeBase = [
    {
      keywords: ['role', 'current', 'job', 'work', 'oracle', 'position'],
      answer: "Sushant is currently a <strong>Principal Consultant</strong> at <strong>Oracle India</strong> (joined Jan 2025). He leads client relationships and delivery teams of 6-13 engineers building digital banking platforms (OBDX) and core systems (FLEXCUBE) across Middle East and Africa."
    },
    {
      keywords: ['ai', 'agentic', 'agent', 'orchestration', 'llm', 'generative', 'rag'],
      answer: "Sushant is an <strong>Agentic AI Specialist</strong>. He is certified as an <strong>OCI Generative AI Professional</strong>. He integrates multi-agent systems and LLM orchestration (LangChain, OpenAI API) directly into digital banking onboarding, compliance tasks, and EdTech pipelines (like <em>New Bharat Skills</em>)."
    },
    {
      keywords: ['tech', 'stack', 'skills', 'languages', 'framework', 'java', 'spring'],
      answer: "His core technical stacks are built around: <br>• <strong>Back-end:</strong> Java, Spring Boot, REST APIs, Microservices, Kafka, Hibernate/JPA, JUnit.<br>• <strong>Front-end:</strong> AngularJS, JavaScript, CSS/HTML.<br>• <strong>DB & Cloud:</strong> AWS (EC2), PostgreSQL, Oracle DB, MongoDB, Docker, CI/CD pipelines."
    },
    {
      keywords: ['banking', 'platform', 'obdx', 'flexcube', 'finance', 'deploy'],
      answer: "Sushant has over a decade of <strong>Digital Banking</strong> &amp; <strong>Core Banking</strong> expertise. He has deployed and optimized <strong>Oracle OBDX</strong> — a leading Digital Banking platform — for clients like Abu Dhabi Bank, enabling retail and corporate banking journeys across UAE and EMEA. He also has deep experience with <strong>Oracle FLEXCUBE</strong> for core banking implementations. Previously at IBM, he managed 13 critical banking applications supporting millions of transactions with a 99.9% uptime SLA."
    },
    {
      keywords: ['denml', 'denml.com'],
      answer: "<strong>denml.com</strong> is Sushant's self-built AI-powered web platform. It leverages multi-agent workflows to automate content generation, semantic searches, and document synthesis, deployed on AWS with full CI/CD integrations."
    },
    {
      keywords: ['bharat', 'skills', 'edtech'],
      answer: "<strong>New Bharat Skills</strong> is an EdTech platform designed by Sushant to bridge the digital skills gap in emerging tier-2/3 Indian cities. It uses autonomous AI agents to construct personalized reading plans, auto-generate course contents, and handle student tutoring requests at scale."
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'social', 'linkedin'],
      answer: "You can reach Sushant at: <br>• <strong>Email:</strong> <a href='mailto:sushant.saj@gmail.com'>sushant.saj@gmail.com</a><br>• <strong>Phone:</strong> <a href='tel:+917400191131'>+91 7400191131</a><br>• <strong>LinkedIn:</strong> <a href='https://linkedin.com/in/thesushantanand' target='_blank'>linkedin.com/in/thesushantanand</a>"
    },
    {
      keywords: ['experience', 'years', 'history', 'ibm', 'wipro', 'synergy'],
      answer: "Sushant has <strong>10+ years of professional experience</strong>. In addition to Oracle, he worked as a Lead Technical Advisor at <strong>IBM India</strong> (Aug 2023 - Dec 2024), a Senior Project Engineer at <strong>Wipro</strong> (2020 - 2023), and a Senior Developer building CSR applications at <strong>Synergy Connect</strong> (2017 - 2020)."
    },
    {
      keywords: ['education', 'college', 'degree', 'study', 'university', 'bhopal'],
      answer: "He holds a <strong>Bachelor of Engineering in Computer Science & Engineering</strong> (Graduated in 2014) with a cumulative CGPA of 6.89/10. He also volunteered as a coordinator at NIIST Bhopal during his studies."
    }
  ];

  // Process message submission
  if (chatForm && chatInput && chatMessagesContainer) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = chatInput.value.trim();
      if (!messageText) return;

      // Render user message
      renderMessage(messageText, 'msg-user');
      chatInput.value = '';

      // Trigger chatbot response
      processBotResponse(messageText);
    });

    // Suggested prompts trigger
    suggestBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const queryText = btn.getAttribute('data-query');
        renderMessage(queryText, 'msg-user');
        processBotResponse(queryText);
      });
    });
  }

  function renderMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.innerHTML = text;

    msgDiv.appendChild(bubbleDiv);
    chatMessagesContainer.appendChild(msgDiv);

    // Auto-scroll to the bottom of the container
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  function processBotResponse(queryText) {
    // Render typing state
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message msg-bot';
    typingDiv.id = 'typing-indicator';

    const typingBubble = document.createElement('div');
    typingBubble.className = 'message-bubble';
    typingBubble.innerHTML = `
      <div class="typing-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;

    typingDiv.appendChild(typingBubble);
    chatMessagesContainer.appendChild(typingDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Evaluate message matching
    const queryLower = queryText.toLowerCase();
    let bestMatch = null;
    let maxMatches = 0;

    for (const entry of knowledgeBase) {
      let matches = 0;
      for (const kw of entry.keywords) {
        if (queryLower.includes(kw)) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = entry;
      }
    }

    // Prepare reply text
    let replyText = "";
    if (bestMatch && maxMatches > 0) {
      replyText = bestMatch.answer;
    } else {
      replyText = "I'm not fully sure about that detail, but you can ask me about his <strong>current Oracle role</strong>, <strong>Agentic AI experience</strong>, <strong>banking tools</strong>, <strong>certifications</strong>, or project work like <strong>denml.com</strong>.";
    }

    // Delay response to simulate dynamic Agent execution (1.5s)
    setTimeout(() => {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) {
        indicator.remove();
      }
      renderMessage(replyText, 'msg-bot');
    }, 1200);
  }


  /* ==========================================================================
     5. SCROLL-REVEAL OBSERVERS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  /* ==========================================================================
     6. CONTACT FORM HANDLING & VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('portfolio-contact-form');
  const successToast = document.getElementById('form-success-message');
  const btnSubmit = document.getElementById('btn-submit');

  if (contactForm && successToast && btnSubmit) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Lock button and simulate dispatch
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Sending Message...';

      setTimeout(() => {
        // Reset form
        contactForm.reset();

        // Render success message
        successToast.style.display = 'block';

        // Unlock button
        btnSubmit.disabled = false;
        btnSubmit.textContent = 'Send Message';

        // Hide success message after 5 seconds
        setTimeout(() => {
          successToast.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }


  /* ==========================================================================
     SCROLL PROGRESS BAR
     ========================================================================== */
  const scrollProgressBar = document.getElementById('scroll-progress');
  if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${pct}%`;
    }, { passive: true });
  }


  /* ==========================================================================
     FULL-PAGE JAVA CODE BUBBLES — rising code snippets
     ========================================================================== */
  const glitterBg = document.getElementById('glitter-bg');
  if (glitterBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    // Java/Spring Boot code snippets to float up
    const JAVA_SNIPPETS = [
      '@SpringBootApplication',
      '@RestController',
      '@GetMapping("/api")',
      '@PostMapping("/auth")',
      '@Autowired',
      '@Service',
      '@Repository',
      '@Entity',
      '@Transactional',
      '@Override',
      'List<String>',
      'Optional<T>',
      'CompletableFuture',
      'Stream.of()',
      '.filter(x -> x != null)',
      '.map(dto::from)',
      '.collect(toList())',
      'ResponseEntity<>',
      'HttpStatus.OK',
      'throws Exception',
      'try { ... }',
      'catch (e)',
      'new HashMap<>()',
      'extends BaseEntity',
      'implements Service',
      'public static void',
      'private final',
      'return result;',
      '@PathVariable',
      '@RequestBody',
      '@Valid',
      'JpaRepository<>',
      'EntityManager',
      'Kafka.send()',
      '@Scheduled',
      'ThreadPoolExecutor',
      'synchronized',
      'volatile',
      '@EnableJwtSecurity',
      'BCryptEncoder',
      'JWT.verify()',
      'ObjectMapper',
      '.readValue(json)',
      'Spring.run()',
      'application.yml',
      '@Column(unique)',
      'JPQL query',
      '@Cacheable',
      '@Async',
      'LangChain4j',
      'AiAgent.invoke()',
      'RAG.retrieve()',
      '.build()',
      'Builder pattern',
      'Singleton.get()',
      'Factory.create()',
      '@OneToMany',
      '@ManyToOne',
      'ACID compliant',
      '99.9% uptime',
      'Microservice',
      'Docker.run()',
      'CI/CD pipeline',
      'REST API',
      'OAuth 2.0',
      'JWT token',
      'Redis cache',
      'PostgreSQL',
      'Oracle DB',
      'AWS EC2',
      'Spring Security',
      'Hibernate ORM',
      'Apache Kafka',
      '@EnableCaching',
      'log.info(msg)',
      'Assert.notNull()',
      'UUID.randomUUID()',
      'LocalDateTime.now()',
      'BigDecimal amount',
    ];

    // Color themes: cyan, indigo, violet
    const THEMES = [
      {
        color: 'rgba(6,182,212,VAR)',
        bg: 'rgba(6,182,212,0.04)',
        border: 'rgba(6,182,212,0.14)',
        glow: '10px',
      },
      {
        color: 'rgba(99,102,241,VAR)',
        bg: 'rgba(99,102,241,0.04)',
        border: 'rgba(99,102,241,0.14)',
        glow: '10px',
      },
      {
        color: 'rgba(139,92,246,VAR)',
        bg: 'rgba(139,92,246,0.04)',
        border: 'rgba(139,92,246,0.12)',
        glow: '8px',
      },
      {
        color: 'rgba(56,189,248,VAR)',
        bg: 'rgba(56,189,248,0.04)',
        border: 'rgba(56,189,248,0.12)',
        glow: '10px',
      },
    ];

    const BUBBLE_COUNT = 80;

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const el = document.createElement('span');
      el.className = 'code-bubble';

      // Pick a random snippet
      const snippet = JAVA_SNIPPETS[Math.floor(Math.random() * JAVA_SNIPPETS.length)];
      el.textContent = snippet;

      // Pick a random color theme
      const theme = THEMES[Math.floor(Math.random() * THEMES.length)];
      const peakOp = (Math.random() * 0.45 + 0.2).toFixed(2);   // 0.20–0.65
      const color = theme.color.replace('VAR', peakOp);

      // Random properties
      const xPos = (Math.random() * 98).toFixed(1);             // 0–98%
      const dur = (Math.random() * 16 + 12).toFixed(1);        // 12–28s
      const delay = (Math.random() * 25).toFixed(1);             // 0–25s stagger
      const size = (Math.random() * 3 + 9).toFixed(0);          // 9–12px font
      const drift = ((Math.random() - 0.5) * 120).toFixed(0);    // -60 to +60px
      const tilt = ((Math.random() - 0.5) * 10).toFixed(1);     // -5 to +5 deg

      el.style.setProperty('--bubble-color', color);
      el.style.setProperty('--bubble-bg', theme.bg);
      el.style.setProperty('--bubble-border', theme.border);
      el.style.setProperty('--glow', theme.glow);
      el.style.setProperty('--x', `${xPos}%`);
      el.style.setProperty('--dur', `${dur}s`);
      el.style.setProperty('--delay', `-${delay}s`);  // negative = already mid-flight
      el.style.setProperty('--font-size', `${size}px`);
      el.style.setProperty('--drift', `${drift}px`);
      el.style.setProperty('--tilt', `${tilt}deg`);
      el.style.setProperty('--peak-op', peakOp);

      glitterBg.appendChild(el);
    }
  }



  /* ==========================================================================
     TYPING EFFECT — cycles through tech keywords in hero headline
     ========================================================================== */
  const typedTarget = document.getElementById('typed-target');
  if (typedTarget && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const words = ['Agentic AI', 'LLM Workflows', 'Java Systems', 'Microservices', 'Agentic AI'];
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let paused = false;

    function type() {
      const current = words[wordIdx];

      if (!deleting) {
        typedTarget.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          // Pause at full word
          paused = true;
          setTimeout(() => { paused = false; deleting = true; type(); }, 2200);
          return;
        }
      } else {
        typedTarget.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }

      const speed = deleting ? 55 : 90;
      setTimeout(type, speed);
    }

    // Start after 1.5s delay so page load feels smooth
    setTimeout(type, 1500);
  }


  /* ==========================================================================
     HERO SKILLS ORBIT RING
     Pills are positioned by requestAnimationFrame — NO CSS rotation is ever
     applied, so text always stays perfectly front-facing / horizontal.
     ========================================================================== */
  const ALL_SKILLS = [
    // ── Core Java ──────────────────────────────────────────────────────────
    { label: '☕ Java / J2EE', color: 'rgba(255,148,48,0.9)', border: 'rgba(255,148,48,0.35)', glow: 'rgba(255,148,48,0.18)' },
    { label: '🌱 Spring Boot', color: 'rgba(99,210,99,0.9)', border: 'rgba(99,210,99,0.35)', glow: 'rgba(99,210,99,0.18)' },
    { label: '🔧 Spring MVC', color: 'rgba(99,210,99,0.9)', border: 'rgba(99,210,99,0.3)', glow: 'rgba(99,210,99,0.15)' },
    { label: '🛡️ Spring Security', color: 'rgba(99,102,241,0.9)', border: 'rgba(99,102,241,0.35)', glow: 'rgba(99,102,241,0.2)' },
    { label: '🗂️ Hibernate / JPA', color: 'rgba(255,148,48,0.9)', border: 'rgba(255,148,48,0.3)', glow: 'rgba(255,148,48,0.15)' },
    { label: '📦 Microservices', color: 'rgba(168,85,247,0.9)', border: 'rgba(168,85,247,0.35)', glow: 'rgba(168,85,247,0.2)' },
    { label: '🌐 REST APIs', color: 'rgba(56,189,248,0.9)', border: 'rgba(56,189,248,0.3)', glow: 'rgba(56,189,248,0.15)' },
    { label: '🧪 JUnit / TDD', color: 'rgba(99,210,99,0.9)', border: 'rgba(99,210,99,0.25)', glow: 'rgba(99,210,99,0.12)' },
    // ── Agentic AI ────────────────────────────────────────────────────────
    { label: '🤖 Agentic AI', color: 'rgba(6,182,212,0.9)', border: 'rgba(6,182,212,0.35)', glow: 'rgba(6,182,212,0.2)' },
    { label: '🧩 Multi-Agent Sys', color: 'rgba(6,182,212,0.9)', border: 'rgba(6,182,212,0.3)', glow: 'rgba(6,182,212,0.15)' },
    { label: '🧠 LangChain', color: 'rgba(56,189,248,0.9)', border: 'rgba(56,189,248,0.35)', glow: 'rgba(56,189,248,0.2)' },
    { label: '🔍 RAG', color: 'rgba(56,189,248,0.9)', border: 'rgba(56,189,248,0.3)', glow: 'rgba(56,189,248,0.15)' },
    { label: '✨ OpenAI API', color: 'rgba(16,185,129,0.9)', border: 'rgba(16,185,129,0.35)', glow: 'rgba(16,185,129,0.18)' },
    { label: '🏛️ OCI GenAI', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.35)', glow: 'rgba(220,80,80,0.16)' },
    { label: '💬 Prompt Eng', color: 'rgba(139,92,246,0.9)', border: 'rgba(139,92,246,0.35)', glow: 'rgba(139,92,246,0.2)' },
    // ── Frontend ──────────────────────────────────────────────────────────
    { label: '🅰️ AngularJS', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.3)', glow: 'rgba(220,80,80,0.14)' },
    { label: '⚡ JavaScript', color: 'rgba(250,204,21,0.9)', border: 'rgba(250,204,21,0.35)', glow: 'rgba(250,204,21,0.18)' },
    // ── Messaging ─────────────────────────────────────────────────────────
    { label: '🔗 Apache Kafka', color: 'rgba(139,92,246,0.9)', border: 'rgba(139,92,246,0.35)', glow: 'rgba(139,92,246,0.2)' },
    // ── Cloud / DevOps ────────────────────────────────────────────────────
    { label: '☁️ AWS EC2', color: 'rgba(255,153,0,0.9)', border: 'rgba(255,153,0,0.35)', glow: 'rgba(255,153,0,0.18)' },
    { label: '🐳 Docker', color: 'rgba(30,160,240,0.9)', border: 'rgba(30,160,240,0.35)', glow: 'rgba(30,160,240,0.2)' },
    { label: '🔄 Jenkins CI/CD', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.3)', glow: 'rgba(220,80,80,0.14)' },
    { label: '🐙 Git / Bitbucket', color: 'rgba(255,148,48,0.9)', border: 'rgba(255,148,48,0.28)', glow: 'rgba(255,148,48,0.12)' },
    // ── Databases ─────────────────────────────────────────────────────────
    { label: '🗄️ PostgreSQL', color: 'rgba(73,155,234,0.9)', border: 'rgba(73,155,234,0.35)', glow: 'rgba(73,155,234,0.18)' },
    { label: '🔮 Oracle DB', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.28)', glow: 'rgba(220,80,80,0.12)' },
    { label: '🍃 MongoDB', color: 'rgba(99,210,99,0.9)', border: 'rgba(99,210,99,0.3)', glow: 'rgba(99,210,99,0.14)' },
    // ── Enterprise Banking ────────────────────────────────────────────────
    { label: '🏦 Oracle OBDX', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.35)', glow: 'rgba(220,80,80,0.16)' },
    { label: '💳 FLEXCUBE', color: 'rgba(220,80,80,0.9)', border: 'rgba(220,80,80,0.28)', glow: 'rgba(220,80,80,0.12)' },
  ];

  function pickRandom(arr, n) {
    const pool = [...arr];
    const out = [];
    while (out.length < n && pool.length) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    return out;
  }

  /* ==========================================================================
     REUSABLE SKILLS ORBIT RING
     Pills are positioned by requestAnimationFrame — NO CSS rotation is ever
     applied, so text always stays perfectly front-facing / horizontal.
     ========================================================================== */
  function initSkillOrbit(trackEl, skillsPool, options = {}) {
    if (!trackEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const SLOTS = options.slots || 12;
    const RADIUS = options.radius || 215;
    const PERIOD_MS = options.periodMs || 28000;
    const CYCLE_MS = options.cycleMs || 7000;
    const DIRECTION = options.direction || 1; // 1 for clockwise, -1 for counter

    let activePills = [];
    let startTime = null;
    let rafId = null;
    let cycleTimer = null;

    function createPills(skills) {
      activePills.forEach(p => p.el.remove());
      activePills = [];

      skills.forEach((skill, i) => {
        const el = document.createElement('span');
        el.className = 'orbit-skill-label';
        el.textContent = skill.label;
        el.style.setProperty('--pill-color', skill.color);
        el.style.setProperty('--pill-border', skill.border);
        el.style.setProperty('--pill-glow', skill.glow);
        el.style.opacity = '0';

        trackEl.appendChild(el);

        const angleOffset = (i / skills.length) * 360;
        activePills.push({ el, angleOffset });

        setTimeout(() => { el.style.opacity = '1'; }, i * 45 + 50);
      });
    }

    function animate(timestamp) {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const globalAngle = (elapsed / PERIOD_MS) * 360 * DIRECTION;

      activePills.forEach(({ el, angleOffset }) => {
        const deg = ((globalAngle + angleOffset) % 360) - 90;
        const rad = deg * (Math.PI / 180);
        const x = RADIUS * Math.cos(rad);
        const y = RADIUS * Math.sin(rad);
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });

      rafId = requestAnimationFrame(animate);
    }

    function cycleSkills() {
      activePills.forEach(p => { p.el.style.opacity = '0'; });
      setTimeout(() => createPills(pickRandom(skillsPool, SLOTS)), 500);
    }

    createPills(pickRandom(skillsPool, SLOTS));
    rafId = requestAnimationFrame(animate);
    cycleTimer = setInterval(cycleSkills, CYCLE_MS);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        startTime = null;
        rafId = requestAnimationFrame(animate);
      }
    });
  }

  // Init Hero Orbit
  const heroOrbit = document.querySelector('.hero-avatar-scene .orbit-track');
  if (heroOrbit) {
    initSkillOrbit(heroOrbit, ALL_SKILLS, { slots: 12, radius: 215, periodMs: 28000, cycleMs: 7000, direction: 1 });
  }


  /* ==========================================================================
     COMPANY LOGO TICKER — cycles through employer logos with fade
     ========================================================================== */
  const tickerLogos = document.querySelectorAll('.ticker-logo');
  if (tickerLogos.length > 0) {
    let tickerIdx = 0;

    function advanceTicker() {
      tickerLogos[tickerIdx].classList.remove('active');
      tickerIdx = (tickerIdx + 1) % tickerLogos.length;
      tickerLogos[tickerIdx].classList.add('active');
    }

    setInterval(advanceTicker, 2500);
  }

  /* ==========================================================================
     ABOUT SECTION — Skills 3D Carousel & Side Orbits
     ========================================================================== */
  const skillsCarouselContainer = document.getElementById('skillsCarouselContainer');
  if (skillsCarouselContainer && typeof init3DCarousel === 'function') {
    init3DCarousel({
      data: skillsData,
      carouselId: 'skillsCarouselContainer',
      sceneId: 'skillsScene',
      autoRotateSpeed: 0.15,
      radiusBase: 220,
      isLinear: true
    });
  }

});


