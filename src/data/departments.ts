import type { Department } from '../types/department'

export const departments: Department[] = [
  {
    slug: 'computer-science-engineering',
    name: 'Computer Science & Engineering',
    short: 'Algorithms, systems, and software for the digital campus.',
    keywords: ['cse', 'cs', 'software', 'programming', 'computing', 'algorithms', 'ai', 'data'],
    about:
      'The Department of Computer Science & Engineering at KPPIT develops ethical, industry-ready engineers with strong foundations in theory and practice.',
    vision:
      'To nurture innovators who design dependable, human-centered computing systems and contribute to national capacity in software and information technology.',
    programs: [
      { name: 'B.Tech Computer Science & Engineering', summary: 'Core CS, electives in security, cloud, and full-stack engineering.', duration: '4 years' },
      { name: 'B.Tech CSE (AI & ML focus)', summary: 'Shared gateway; see AI & Data Science for the dedicated programme.', duration: '4 years' },
      { name: 'M.Tech Software Engineering', summary: 'Advanced architecture, DevOps, and product engineering studios.', duration: '2 years' },
    ],
    curriculumHighlights: [
      'Data structures, OS, networks, DBMS, and software engineering studio sequence.',
      'Industry mini-projects each semester; open-source contribution milestone in year three.',
      'Professional ethics, cybersecurity basics, and campus-wide hackathon participation.',
    ],
    faculty: [
      {
        id: 'cse-ramya',
        name: 'Dr. Ramya Krishnan',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85',
        email: 'hod.cse@kppit.edu',
        phone: '+91 80 0000 2101',
        bio: 'Ph.D. IIT; compilers and high-assurance systems; guides 8 research scholars.',
        areas: ['Programming languages', 'Formal methods', 'Curriculum design'],
      },
      {
        id: 'cse-arjun',
        name: 'Dr. Arjun Mehta',
        title: 'Associate Professor',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
        email: 'arjun.mehta@kppit.edu',
        phone: '+91 80 0000 2102',
        bio: 'Former industry architect; leads the Cloud & Distributed Systems lab.',
        areas: ['Distributed systems', 'Cloud-native platforms', 'SRE practices'],
      },
      {
        id: 'cse-priya',
        name: 'Dr. Priya Nair',
        title: 'Assistant Professor',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85',
        email: 'priya.nair@kppit.edu',
        phone: '+91 80 0000 2103',
        bio: 'Human–computer interaction and accessible learning technologies for STEM.',
        areas: ['HCI', 'Educational technology', 'Visualization'],
      },
    ],
    labs: [
      {
        name: 'High-Performance Computing Lab',
        description: 'GPU cluster and containerized research workloads.',
        focus: 'Parallel computing & benchmarking',
        image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=85',
        details: [
          '64-node compute setup with shared GPU scheduling for coursework and research.',
          'Container-first workflow for reproducible experiments and benchmarking labs.',
          'Used for distributed systems, deep learning, and high-performance simulation modules.',
        ],
      },
      {
        name: 'Secure Systems Lab',
        description: 'Sandboxed networks for cryptography and malware analysis coursework.',
        focus: 'Cybersecurity teaching',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Air-gapped virtual network for ethical hacking and secure coding practice.',
          'Dedicated SIEM dashboards and packet analysis toolkit for security drills.',
          'Supports courses in cryptography, network defense, and digital forensics.',
        ],
      },
    ],
    research: [
      { title: 'Energy-aware job scheduling for campus clusters', summary: 'Reduces average wait time by coordinating thermal and power budgets across racks.' },
      { title: 'Readable proofs for introductory compilers', summary: 'Pedagogical IR and visualization toolkit adopted in three partner colleges.' },
    ],
    achievements: [
      { title: 'Smart India Hackathon — Winner (Software)', detail: 'Team “KPPIT Stack” built a civic grievance triage dashboard.', year: '2025' },
      { title: 'ACM-ICPC regional finalists', detail: 'Four teams placed in the top 30 at the regional round.', year: '2024' },
      { title: 'Industry co-cert', detail: 'Joint micro-credential in AWS cloud operations with partner employers.', year: '2024' },
    ],
    hod: {
      name: 'Dr. Ramya Krishnan',
      title: 'Professor & Head, CSE',
      email: 'hod.cse@kppit.edu',
      phone: '+91 80 0000 2101',
      office: 'Academic Block A, Room A-401',
      hours: 'Mon–Fri, 10:00–12:00 & 14:00–16:00',
    },
  },
  {
    slug: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    short: 'Thermal, design, manufacturing, and mobility.',
    keywords: ['mech', 'mechanical', 'thermal', 'cad', 'manufacturing', 'design', 'automotive'],
    about:
      'Mechanical Engineering at KPPIT blends classical rigour with practice in CAD, robotics, and sustainable thermal systems.',
    vision:
      'To graduate mechanical engineers who responsibly advance productivity, energy efficiency, and safety in industry and public infrastructure.',
    programs: [
      { name: 'B.Tech Mechanical Engineering', summary: 'Strength of materials, thermodynamics, manufacturing, and Mechatronics capstone.', duration: '4 years' },
      { name: 'M.Tech CAD/CAM', summary: 'Numerical methods, advanced manufacturing, and digital twin projects.', duration: '2 years' },
    ],
    curriculumHighlights: [
      'Workshop practice, metrology, and CNC training on shared institute floor.',
      'Design–build–test sequence culminating in ASME-style competitions.',
      'Mandatory internship with documentation and safety audit.',
    ],
    faculty: [
      {
        id: 'mech-vikram',
        name: 'Dr. Vikram Deshpande',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85',
        email: 'hod.mech@kppit.edu',
        phone: '+91 80 0000 2201',
        bio: 'Heat transfer and additive manufacturing; PI on two DST-supported projects.',
        areas: ['Thermal systems', 'Additive manufacturing', 'Energy audits'],
      },
      {
        id: 'mech-sara',
        name: 'Dr. Sara Joseph',
        title: 'Assistant Professor',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=85',
        email: 'sara.joseph@kppit.edu',
        phone: '+91 80 0000 2202',
        bio: 'Robotics integration for SME shop floors; mentor for student Baja team.',
        areas: ['Robotics', 'Control systems', 'Maintenance engineering'],
      },
    ],
    labs: [
      {
        name: 'Thermo-Fluids Laboratory',
        description: 'Engines, refrigeration rigs, and emissions characterization benches.',
        focus: 'Applied thermodynamics',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Engine and heat exchanger test beds for thermal efficiency studies.',
          'Practical sessions on refrigeration cycles and fluid flow instrumentation.',
          'Project support for energy audits and low-emission system design.',
        ],
      },
      {
        name: 'Manufacturing & Metrology Lab',
        description: 'CMM, lathe, milling, and process planning exercises.',
        focus: 'Production engineering',
        image: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Hands-on machining setup for turning, milling, and process parameter studies.',
          'Metrology station with CMM and precision measurement instruments.',
          'Used for CAD-to-manufacturing workflow validation in capstone projects.',
        ],
      },
    ],
    research: [
      { title: 'Waste-heat recovery for process industries', summary: 'Compact heat exchanger prototypes tested with partner MSME units in the region.' },
      { title: 'Topology-optimized brackets for EV subframes', summary: 'Student-led project published at a national conference on lightweight design.' },
    ],
    achievements: [
      { title: 'SAE Baja — Top 10 national', detail: 'All-terrain vehicle designed and fabricated on campus.', year: '2025' },
      { title: 'Energy audit — Green campus award', detail: 'Department led cross-disciplinary HVAC optimization study.', year: '2024' },
    ],
    hod: {
      name: 'Dr. Vikram Deshpande',
      title: 'Professor & Head, Mechanical',
      email: 'hod.mech@kppit.edu',
      phone: '+91 80 0000 2201',
      office: 'Mechanical Block M, Room M-312',
      hours: 'Mon–Wed–Fri, 11:00–13:00',
    },
  },
  {
    slug: 'electrical-electronics-engineering',
    name: 'Electrical & Electronics Engineering',
    short: 'Power, drives, embedded systems, and instrumentation.',
    keywords: ['eee', 'electrical', 'power', 'electronics', 'drives', 'renewable'],
    about:
      'EEE combines power engineering with modern electronics to train engineers for grids, drives, and smart embedded products.',
    vision:
      'To empower graduates with safe, efficient energy practices and resilient electronic design skills aligned with national priorities.',
    programs: [
      { name: 'B.Tech Electrical & Electronics Engineering', summary: 'Machines, power electronics, microcontrollers, and smart grid electives.', duration: '4 years' },
    ],
    curriculumHighlights: [
      'Hands-on experiments on power quality and protection relays.',
      'Embedded C and RTOS module tied to IoT studio.',
      'Field visit to substation and rooftop solar array each term.',
    ],
    faculty: [
      {
        id: 'eee-anita',
        name: 'Dr. Anita Bose',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
        email: 'hod.eee@kppit.edu',
        phone: '+91 80 0000 2301',
        bio: 'Grid integration of renewables; consultant to state utility working groups.',
        areas: ['Power systems', 'Renewable integration', 'Protection'],
      },
      {
        id: 'eee-rohan',
        name: 'Dr. Rohan Pillai',
        title: 'Assistant Professor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
        email: 'rohan.pillai@kppit.edu',
        phone: '+91 80 0000 2302',
        bio: 'Motor drives and wide-bandgap devices; industry sabbatical with an EV OEM.',
        areas: ['Power electronics', 'Drives', 'EMC basics'],
      },
    ],
    labs: [
      {
        name: 'Power Systems & Protection Lab',
        description: 'Relay testing benches and harmonic analyzers.',
        focus: 'Transmission & distribution studies',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
        details: [
          'Protection relay testing panels for fault analysis and response timing.',
          'Power quality experiments using harmonic analyzers and load banks.',
          'Grid operation case studies aligned to substation practice.',
        ],
      },
      {
        name: 'Embedded Energy Lab',
        description: 'MCU kits, MPPT demonstrators, and bench supplies.',
        focus: 'IoT energy management',
        image: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Microcontroller workstations for smart metering and control logic.',
          'Solar MPPT and battery management demos for real-time testing.',
          'Mini projects on campus energy monitoring and optimization.',
        ],
      },
    ],
    research: [
      { title: 'Islanded microgrid controller', summary: 'Frequency-voltage droop experiments using hardware-in-the-loop setup.' },
    ],
    achievements: [
      { title: 'IEEE power & energy society chapter', detail: 'Student chapter recognized for outreach workshops in nearby schools.', year: '2025' },
      { title: 'National symposium host', detail: 'Department organized “Resilient Grids 2025” with 12 institutions.', year: '2025' },
    ],
    hod: {
      name: 'Dr. Anita Bose',
      title: 'Professor & Head, EEE',
      email: 'hod.eee@kppit.edu',
      phone: '+91 80 0000 2301',
      office: 'Electrical Block E, Room E-205',
      hours: 'Tue–Thu, 10:00–12:30',
    },
  },
  {
    slug: 'civil-engineering',
    name: 'Civil Engineering',
    short: 'Structures, infrastructure, environment, and surveying.',
    keywords: ['civil', 'structures', 'infra', 'geotech', 'environment', 'survey'],
    about:
      'Civil Engineering prepares engineers for infrastructure delivery with emphasis on durability, safety, and climate-conscious materials.',
    vision:
      'To graduate engineers who steward public assets through ethical design, digital workflows, and resilient construction practices.',
    programs: [
      { name: 'B.Tech Civil Engineering', summary: 'Structural analysis, transportation, environmental engineering, and BIM lab.', duration: '4 years' },
    ],
    curriculumHighlights: [
      'Total station and UAV surveying modules with field camps.',
      'Concrete and geotech labs aligned with IS codes.',
      'Capstone on campus sustainability projects (stormwater, retrofits).',
    ],
    faculty: [
      {
        id: 'civil-karthik',
        name: 'Dr. Karthik Sen',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
        email: 'hod.civil@kppit.edu',
        phone: '+91 80 0000 2401',
        bio: 'Structural health monitoring; advisor on metro-adjacent vibration studies.',
        areas: ['Structures', 'SHM', 'Retrofitting'],
      },
    ],
    labs: [
      {
        name: 'Structural Materials Lab',
        description: 'UTM, beam tests, and durability exposure chambers.',
        focus: 'Material characterization',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Compression, tension, and flexural testing of concrete and steel samples.',
          'Durability chambers for exposure-based behavior analysis.',
          'IS-code aligned practicals for structural design coursework.',
        ],
      },
      {
        name: 'Geotechnical Engineering Lab',
        description: 'SPT, compaction, and permeability apparatus.',
        focus: 'Foundation design support',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Soil classification, compaction, and permeability test workflows.',
          'Foundation parameter estimation using geotechnical apparatus.',
          'Field-to-lab correlation exercises for civil capstone projects.',
        ],
      },
    ],
    research: [
      { title: 'Low-carbon binder blends for tropical climates', summary: 'Field trials with local contractors for pavement shoulder mixes.' },
    ],
    achievements: [
      { title: 'NPTEL Local Chapter — Silver', detail: 'High certification rates and faculty-led flipped classrooms.', year: '2024' },
    ],
    hod: {
      name: 'Dr. Karthik Sen',
      title: 'Professor & Head, Civil',
      email: 'hod.civil@kppit.edu',
      phone: '+91 80 0000 2401',
      office: 'Civil Block C, Room C-118',
      hours: 'Mon–Fri, 9:30–11:30',
    },
  },
  {
    slug: 'electronics-communication',
    name: 'Electronics & Communication Engineering',
    short: 'RF, communication systems, VLSI, and signal processing.',
    keywords: ['ece', 'electronics', 'communication', 'rf', 'vlsi', 'signals', 'embedded'],
    about:
      'ECE bridges device physics to communication networks, with labs spanning analog, digital, and RF domains.',
    vision:
      'To produce engineers who can architect trustworthy communication links and embedded platforms for civilian and strategic applications.',
    programs: [
      { name: 'B.Tech Electronics & Communication Engineering', summary: 'Analog/communication IC labs, DSP, antennas, and wireless electives.', duration: '4 years' },
    ],
    curriculumHighlights: [
      'PCB design and fabrication workflow in-house.',
      'MATLAB/Python signal labs synchronized with theory pacing.',
      'Hardware–software co-design mini-project each year.',
    ],
    faculty: [
      {
        id: 'ece-divya',
        name: 'Dr. Divya Prasad',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85',
        email: 'hod.ece@kppit.edu',
        phone: '+91 80 0000 2501',
        bio: 'MMIC-aware antenna design; collaborates with national labs on test fixtures.',
        areas: ['RF systems', 'Antennas', 'Measurements'],
      },
      {
        id: 'ece-imran',
        name: 'Dr. Imran Khan',
        title: 'Assistant Professor',
        image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=800&q=85',
        email: 'imran.khan@kppit.edu',
        phone: '+91 80 0000 2502',
        bio: 'Software-defined radio and cognitive radio experimentation kits.',
        areas: ['Wireless', 'SDR', 'Signal processing'],
      },
    ],
    labs: [
      {
        name: 'RF & Antenna Lab',
        description: 'VNA, spectrum analyzers, and anechoic corner setup.',
        focus: 'Wireless experiments',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Antenna measurement and RF characterization using VNA and analyzers.',
          'Wireless communication experiments across modulation and link budgeting.',
          'Guided mini-projects in SDR and short-range communication systems.',
        ],
      },
      {
        name: 'VLSI & HDL Lab',
        description: 'FPGA boards and industry toolchains for academic licensing.',
        focus: 'Digital design',
        image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1200&q=85',
        details: [
          'HDL coding, simulation, and FPGA prototyping workflow for logic design.',
          'Timing analysis and verification exercises with industry-standard tools.',
          'Supports embedded hardware projects and final-year chip design tracks.',
        ],
      },
    ],
    research: [
      { title: 'Wearable health telemetry with ultra-low duty cycle', summary: 'BLE stack tuning and on-sensor feature extraction.' },
    ],
    achievements: [
      { title: 'IET student chapter award', detail: 'Recognized for lecture series on ethical spectrum use.', year: '2025' },
    ],
    hod: {
      name: 'Dr. Divya Prasad',
      title: 'Professor & Head, ECE',
      email: 'hod.ece@kppit.edu',
      phone: '+91 80 0000 2501',
      office: 'ECE Block, Room EC-330',
      hours: 'Mon–Thu, 14:00–16:00',
    },
  },
  {
    slug: 'artificial-intelligence-data-science',
    name: 'Artificial Intelligence & Data Science',
    short: 'Machine learning, responsible AI, and data platforms.',
    keywords: ['ai', 'ml', 'data science', 'deep learning', 'nlp', 'analytics', 'aids'],
    about:
      'AIDS offers a cross-cutting programme building statistical Thinking, modern ML, and deployable AI systems with governance in mind.',
    vision:
      'To cultivate practitioners who build explainable, fair, and useful AI systems grounded in domain partnerships.',
    programs: [
      { name: 'B.Tech Artificial Intelligence & Data Science', summary: 'Stats, optimization, ML, deep learning, MLOps, and ethics studios.', duration: '4 years' },
    ],
    curriculumHighlights: [
      'Kaggle-style internal leagues with reproducibility checks.',
      'Capstone with industry datasets under NDAs where applicable.',
      'Mandatory fairness & robustness review checklist for final models.',
    ],
    faculty: [
      {
        id: 'aids-neha',
        name: 'Dr. Neha Aggarwal',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=85',
        email: 'hod.aids@kppit.edu',
        phone: '+91 80 0000 2601',
        bio: 'Causal inference and policy evaluation; advises campus data governance committee.',
        areas: ['Causal ML', 'Policy analytics', 'Teaching ML'],
      },
    ],
    labs: [
      {
        name: 'ML Engineering Lab',
        description: 'Workstations with GPU pools and experiment tracking server.',
        focus: 'Model development',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=85',
        details: [
          'GPU-backed model training with centralized experiment tracking.',
          'Course labs for classification, NLP, and computer vision pipelines.',
          'Benchmark and reproducibility checks integrated into evaluation.',
        ],
      },
      {
        name: 'Data Platforms Lab',
        description: 'Spark, lakehouse mini-cluster, and streaming demos.',
        focus: 'Data engineering',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Hands-on big data processing with Spark and batch-stream pipelines.',
          'Data lake architecture demos for analytics and dashboarding.',
          'Industry-style ETL and observability exercises.',
        ],
      },
    ],
    research: [
      { title: 'Campus mobility demand forecasting', summary: 'Graph models on anonymized transit smart-card aggregates.' },
    ],
    achievements: [
      { title: 'Responsible AI symposium', detail: 'Student posters on bias audits and documentation standards.', year: '2025' },
    ],
    hod: {
      name: 'Dr. Neha Aggarwal',
      title: 'Professor & Head, AI & DS',
      email: 'hod.aids@kppit.edu',
      phone: '+91 80 0000 2601',
      office: 'Data Science Studio, Building DS-2',
      hours: 'Tue–Fri, 10:00–12:00',
    },
  },
  {
    slug: 'master-business-administration',
    name: 'Master of Business Administration',
    short: 'General management with technology leadership tracks.',
    keywords: ['mba', 'management', 'business', 'finance', 'marketing', 'operations', 'hr'],
    about:
      'The MBA programme at KPPIT is practice-led, pairing analytics with leadership labs and founder-in-residence clinics.',
    vision:
      'To develop managers who can steward growth, people, and technology responsibly in fast-changing markets.',
    programs: [
      { name: 'MBA — General Management', summary: 'Core courses plus tracks in product leadership, operations, and finance.', duration: '2 years' },
    ],
    curriculumHighlights: [
      'Live case cycles with regional enterprises each term.',
      'Summer internship with graded consulting memo.',
      'Capstone venture or intrapreneurship studio choice.',
    ],
    faculty: [
      {
        id: 'mba-raghav',
        name: 'Prof. Raghav Iyer',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=85',
        email: 'hod.mba@kppit.edu',
        phone: '+91 80 0000 2701',
        bio: 'Former COO-track leader; teaches operations strategy and negotiations.',
        areas: ['Operations', 'Strategy', 'Negotiations'],
      },
    ],
    labs: [
      {
        name: 'Analytics & Decision Lab',
        description: 'Spreadsheet, BI tools, and OR solvers for coursework.',
        focus: 'Analytics teaching',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Case-based analytics with dashboarding and decision modeling tools.',
          'Simulation and optimization exercises for operations and finance.',
          'Team strategy labs with presentation-ready insight reporting.',
        ],
      },
    ],
    research: [
      { title: 'MSME digitization readiness index', summary: 'Survey instrument deployed across three industrial clusters.' },
    ],
    achievements: [
      { title: 'National B-plan runners-up', detail: 'Team placed second at a tier-1 management fest.', year: '2025' },
    ],
    hod: {
      name: 'Prof. Raghav Iyer',
      title: 'Professor & Head, MBA',
      email: 'hod.mba@kppit.edu',
      phone: '+91 80 0000 2701',
      office: 'Management Block B, Room B-101',
      hours: 'By appointment via department office',
    },
  },
  {
    slug: 'applied-sciences-humanities',
    name: 'Applied Sciences & Humanities',
    short: 'Mathematics, physics, chemistry, and liberal learning.',
    keywords: ['science', 'maths', 'physics', 'chemistry', 'english', 'humanities', 'ash'],
    about:
      'ASH delivers the foundational sciences and communication skills that underpin every engineering programme at KPPIT.',
    vision:
      'To inspire rigorous thinking, clear expression, and scientific curiosity across the institute’s undergraduate and postgraduate cohorts.',
    programs: [
      { name: 'First-year Engineering Sciences', summary: 'Shared calculus, mechanics, chemistry, and communication studios.', duration: 'First year' },
      { name: 'Minors & electives', summary: 'Technical writing, philosophy of science, and industrial chemistry tasters.', duration: 'Elective terms' },
    ],
    curriculumHighlights: [
      'Studio-style labs coordinated with department timetables.',
      'Writing center staffed by faculty fellows.',
      'Interdisciplinary project fair with CSE and Civil partners.',
    ],
    faculty: [
      {
        id: 'ash-martin',
        name: 'Dr. Martin George',
        title: 'Professor & HOD',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85',
        email: 'hod.ash@kppit.edu',
        phone: '+91 80 0000 2801',
        bio: 'Mathematical modeling for environmental flows; leads first-year reforms.',
        areas: ['Applied mathematics', 'PDEs', 'First-year pedagogy'],
      },
    ],
    labs: [
      {
        name: 'Engineering Physics Lab',
        description: 'Optics, lasers, and semiconductor basics.',
        focus: 'Undergraduate experiments',
        image: 'https://images.unsplash.com/photo-1534777410147-084a460870fc?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Core physics experiments in optics, lasers, and material behavior.',
          'Measurement-focused practicals for first-year engineering cohorts.',
          'Foundational lab skills for instrumentation and analysis.',
        ],
      },
      {
        name: 'Engineering Chemistry Lab',
        description: 'Instrumental analysis and green chemistry modules.',
        focus: 'Safety-forward labs',
        image: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&w=1200&q=85',
        details: [
          'Wet lab and instrumental analysis for engineering chemistry concepts.',
          'Green chemistry exercises with waste minimization protocols.',
          'Strict lab safety orientation and compliance checklist for all batches.',
        ],
      },
    ],
    research: [
      { title: 'Mathematical outreach toolkit', summary: 'Open lessons for regional schools aligned with NCERT bridge topics.' },
    ],
    achievements: [
      { title: 'Best supporting department — student survey', detail: 'Recognized for approachable faculty and exam clarity.', year: '2025' },
    ],
    hod: {
      name: 'Dr. Martin George',
      title: 'Professor & Head, Applied Sciences & Humanities',
      email: 'hod.ash@kppit.edu',
      phone: '+91 80 0000 2801',
      office: 'Science Block S, Room S-009',
      hours: 'Daily office hour 15:00–16:00',
    },
  },
]

export function getDepartmentBySlug(slug: string) {
  return departments.find((d) => d.slug === slug)
}

export function searchDepartments(query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return departments
  return departments.filter((d) => {
    const hay = [d.name, d.short, ...d.keywords].join(' ').toLowerCase()
    return hay.includes(q)
  })
}
