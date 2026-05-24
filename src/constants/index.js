import {
    mobile,
    backend,
    database,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    VT,
    SI,
    farmer,
    telecom,
    chatapp,
    game
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Cybersecurity Analyst",
      icon: backend,
    },
    {
      title: "SOC & Threat Detection",
      icon: mobile,
    },
    {
      title: "Cloud & Infrastructure",
      icon: web,
    },
    {
      title: "AI & ML Engineering",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: javascript,   
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Triage Cybersecurity Analyst",
      company_name: "Arctic Wolf",
      icon: SI,
      iconBg: "#003865",
      date: "Dec 2025 – Present",
      points: [
        "Reduced MTTR by 30% across 250+ customer environments by triaging and correlating security alerts in a 24×7 SOC using Splunk SIEM, threat intelligence feeds, and the MITRE ATT&CK framework, maintaining 95%+ SLA adherence.",
        "Sustained 99%+ MDR/EDR agent health across 500+ customer endpoints by proactively monitoring agent deployments and diagnosing connectivity failures.",
        "Accelerated Tier 2/3 escalation accuracy by investigating anomalous authentication events, Active Directory lockouts, and IOCs using structured incident response playbooks aligned to NIST CSF.",
        "Decreased mean time to detect (MTTD) endpoint threats by delivering proactive threat notifications and monitoring network security pipelines across cloud and on-premises environments.",
        "Improved customer security posture for 50+ accounts by executing account management, policy configuration, and service customization requests within defined SLA windows.",
      ],
    },
    {
      title: "Network & Technology Operations Analyst",
      company_name: "Arctic Wolf",
      icon: SI,
      iconBg: "#003865",
      date: "May 2025 – Dec 2025",
      points: [
        "Resolved sensor health and log source integrity issues for 100+ customers daily, diagnosing endpoint agent installations, cloud sensor communication failures, and AWS/Azure configuration mismatches across Windows and Linux environments.",
        "Maintained 99%+ sensor health and log source uptime by standardizing troubleshooting runbooks for DNS, VPN, Active Directory, and endpoint-related failures, cutting repeat ticket volume by 20%.",
        "Accelerated mean time to resolve (MTTR) network incidents by diagnosing firewall rules, network protocol anomalies, and cloud connectivity issues across hybrid AWS/Azure environments.",
        "Improved first-contact resolution rate by authoring a 20+ FAQ customer guide covering common sensor, agent, and connectivity issues, reducing repeat escalations across 100+ accounts.",
      ],
    },
    {
      title: "IT Server Infrastructure Administrator",
      company_name: "Septodont",
      icon: VT,
      iconBg: "#E6DEDD",
      date: "May 2024 – Aug 2024",
      points: [
        "Maintained 99.9% server uptime across Windows and Linux infrastructure by configuring, patching, and monitoring production servers and enforcing hardening baselines.",
        "Achieved 90%+ customer satisfaction rating by delivering Tier 1 server infrastructure support via FreshService, resolving 50+ tickets per week with documented resolution steps.",
        "Eliminated manual backup failures by implementing an automated VEEAM backup and disaster recovery strategy, achieving 100% successful data recovery across all DR test cycles.",
        "Reduced network configuration drift by automating DNS, DHCP, and VPN management tasks using PowerShell scripts, cutting provisioning time by 40%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Dhyey's cybersecurity instincts are sharp — he catches things others miss and communicates findings clearly to both technical and non-technical stakeholders.",
      name: "Alex",
      designation: "Colleague",
      company: "Arctic Wolf",
      image: "https://ui-avatars.com/api/?name=Alex&background=915EFF&color=fff&size=200",
    },
    {
      testimonial:
        "Working with Dhyey on the AI Classifier project was impressive. He built a full ML pipeline and deployed it end-to-end with real-time inference — not just a notebook demo.",
      name: "Tushar Patel",
      designation: "Software Developer",
      company: "Conestoga College",
      image: "https://ui-avatars.com/api/?name=Tushar&background=915EFF&color=fff&size=200",
    },
  ];
  
  const projects = [
    {
      name: "AI Cyber Attack Classifier",
      description: [
        "Achieved 97%+ multiclass classification accuracy by training XGBoost and Random Forest models on the CICIDS-2017 dataset (2.3M+ rows) to detect 7 attack categories including DoS, DDoS, Brute Force, and Port Scan.",
        "Built an end-to-end ML pipeline with FastAPI, feature engineering, and joblib model serialization, serving real-time and batch CSV predictions.",
        "Deployed a live interactive threat dashboard on Render visualizing model prediction, confidence scores, and classification accuracy metrics.",
      ],
      tags: [
        { name: "Python", color: "blue-text-gradient" },
        { name: "XGBoost", color: "green-text-gradient" },
        { name: "FastAPI", color: "pink-text-gradient" },
        { name: "Machine Learning", color: "blue-text-gradient" },
      ],
      image: chatapp,
      source_code_link: "https://github.com/DHYEYBHATT9/AI_Cyberattck_Classifier",
    },
    {
      name: "Vulnerability Assessment & Secure Code Review",
      description: [
        "Identified 23 vulnerabilities (7 High, 7 Medium, 9 Low) in a C-based server application using static analysis (CPPCheck, Infer) and dynamic analysis (Valgrind) alongside manual code review.",
        "Produced a professional security audit report mapping each finding to OWASP and NIST 800-82 controls with code-level remediation steps for buffer overflows, command injections, and privilege escalation.",
        "Delivered industry-standard code-level fixes for all 23 vulnerabilities aligned to OWASP secure coding guidelines, confirmed zero residual high-severity findings post-fix.",
      ],
      tags: [
        { name: "OWASP", color: "blue-text-gradient" },
        { name: "NIST 800-82", color: "green-text-gradient" },
        { name: "Static Analysis", color: "pink-text-gradient" },
        { name: "C", color: "blue-text-gradient" },
      ],
      image: farmer,
      source_code_link: "https://github.com/DHYEYBHATT9",
    },
    {
      name: "MISRA C:2012 Compliance Audit",
      description: [
        "Identified 13 MISRA C:2012 violations (6 High, 4 Medium, 3 Low) across an STM32 vehicle dashboard codebase using PVS-Studio and Keil uVision, covering implicit type conversions, external linkage declarations, and control-flow completeness.",
        "Delivered code-level remediations for all 13 violations aligned to MISRA C:2012 required and advisory guidelines, achieving partial-to-full compliance on all application-scope files.",
      ],
      tags: [
        { name: "MISRA C:2012", color: "blue-text-gradient" },
        { name: "PVS-Studio", color: "green-text-gradient" },
        { name: "Embedded Systems", color: "pink-text-gradient" },
        { name: "C", color: "blue-text-gradient" },
      ],
      image: telecom,
      source_code_link: "https://github.com/DHYEYBHATT9",
    },
    {
      name: "Phone Orientation Classifier",
      description: [
        "Designed a phone orientation prediction system using k-Nearest Neighbors (kNN) and Neural Network classifiers in C++.",
        "Processed orientation data from phone sensors (accelerometers and gyroscopes) with feature extraction techniques for efficient real-time predictions.",
        "Validated performance through accuracy testing on labeled datasets, demonstrating proficiency in ML concepts and C++ programming.",
      ],
      tags: [
        { name: "C++", color: "blue-text-gradient" },
        { name: "Machine Learning", color: "green-text-gradient" },
        { name: "Sensor Programming", color: "pink-text-gradient" },
      ],
      image: game,
      source_code_link: "https://github.com/DHYEYBHATT9/Phone-orientation-Generator.git",
    },
    {
      name: "Retro Snake Game",
      description:[
            "Developed a classic Snake Game in C programming language.",
            "Implemented real-time gameplay mechanics, including snake movement and food generation.",
            "Added features like collision detection and score tracking.",
            "Optimized game loop for smooth performance in console environments.",
            "Demonstrated skills in structured programming and logical problem-solving."

      ],
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Game Development",
          color: "green-text-gradient",
        },
      ],
      image: farmer,
      source_code_link: "https://github.com/DHYEYBHATT9/Retro-Snake-Game.git",
    },
     {
      name: "Library Database Management System",
      description:[
      "Developed a relational database schema to model the library's structure, including tables for books, users, transactions, and administrative functions by implementing SQL queries for data manipulation, retrieval, and management, ensuring optimal performance and data integrity.", 
      "Skills: SQL (Structured Query Language), Database Management System (DBMS).",
  ],
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "Database management",
          color: "green-text-gradient",
        },
      ],
      image: telecom,
      source_code_link: "https://github.com/DHYEYBHATT9/Library-management-system.git",
    },
    {
      name: "Resume-E-portfolio",
      description:[
	      "Developed a dynamic e-portfolio using JavaScript for functionality and JSON for data storage.",
             "Created a modular, interactive design to showcase personal projects, skills, and achievements.",
             "Utilized JSON to store and dynamically render portfolio content such as project descriptions, skills, and contact details.",
             "Implemented responsive web design for seamless viewing across devices.",
             "Added features like navigation, filtering by skills/projects, and contact form integration.",
             "Ensured scalability by making the system easily extensible for new sections or updates.",
             "Demonstrated expertise in front-end development and structured data handling."

      ],
      tags: [
        {
          name: "Web-Development",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/DHYEYBHATT9/resume.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
