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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    adobe,
    walmart,
    SI,
    VT,
    farmer,
    telecom,
    chatapp,
    threejs,
    game
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Desktop Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DataBase Developer",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe",
      icon: adobe,
    },
  
  ];
  
  const experiences = [

       {
      title : "IT infrastructure Engineer",
      company_name: "Septodont Novocol Pharma",
      icon: VT,
      date : "May 2024- August 2024",
      points: [
        "Acts as a primary point of contact for technical inquiries from customers.",
        "Managed and maintained server infrastructure, including Windows and Linux servers, and implemented virtualization solutions using VMware and Hyper-V.",
	    "Configured and managed network services (DNS, DHCP, VPN) and ensured network security through firewalls and IDS/IPS systems.",
	    "Automated tasks using PowerShell and Bash, and managed cloud-based infrastructure on AWS/Azure.",
        "Ensured data integrity and availability through proper backup and disaster recovery plans using VEEAM.",
        "Reduced server downtime through proactive monitoring, successfully migrated servers to a virtualized environment saving company’s costs"

      ]
    },
    {
      title : "Technical Sales Support",
      company_name: "Network Telecom",
      icon: VT,
      date : "May 2023- August 2023",
      points: [
        "Acts as a primary point of contact for technical inquiries from customers.",
        "Provides product knowledge and technical expertise to assist customers in understanding and using products effectively.",
        "Collaborates with the sales team to identify and address technical concerns during the sales process"
      ]
    },
    {
      title: "Technical Support Specialist Smart-Computers   ",
      company_name: "Smart Computers",
      icon: VT,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Jan 2021 ",
      points: [
       "Provide technical support to customers via phone, email and chat, assisting with hardware and software issues related to desktops, laptops, printers, and mobile devices",
       "Collaborate with cross-functional teams to troubleshoot and resolve complex technical issues, ensuring customer satisfaction while dealing in ADM app.",
       "Document all customer interactions and maintain detailed records of technical issues and solutions",
       "Train and mentor new team members on technical support best practices and procedures",
       "Consistently meet and exceed customer service metrics, including response time, first call resolution rate, and customer satisfaction scores"
      ],
    },
 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dhyey proved me wrong.",
      name: "Yashas",
      designation: "Freelancer",
      company: "UpWork",
      image: "https://media.licdn.com/dms/image/D4E35AQH0DR6lj0_BKg/profile-framedphoto-shrink_200_200/0/1677638456127?e=1690398000&v=beta&t=kpF_x2-yKyj1-5TgvKghtUIkVzehkMNZAHNCKfot3Io",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dilpreet does.",
      name: "Dilpreet Singh",
      designation: "Freelancer",
      company: "freelancing.com",
      image: "https://media.licdn.com/dms/image/D5635AQFq82Kq0Md2Cg/profile-framedphoto-shrink_200_200/0/1694485157142?e=1700704800&v=beta&t=25hTcxlilDFdC1ocTT4Uov_eoMHhqNeoIGm0MsF1gOU",
    },
    {
      testimonial:"Dhyey's expertise and attention to detail transformed our React Native app into a flawless and user-friendly experience.",
      name: "Tushar Patel",
      designation: "Software Developer",
      company: "freelancing.com",
      image: "https://media.licdn.com/dms/image/D5635AQFYsw1KIeux7A/profile-framedphoto-shrink_800_800/0/1668795496060?e=1690221600&v=beta&t=n0W4GWnEUUYa0mZtEmxwG1t5GvBcAeq6bjaZgcrlVp0"
    },

  ];
  
  const projects = [
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
      name: "Phone Orientation Generator",
      description:[
	      "Designed a phone orientation prediction system using k-Nearest Neighbors (kNN) and Neural Network (NN) classifiers in C++.",
              "Processed orientation data from phone sensors such as accelerometers and gyroscopes.",
              "Implemented kNN algorithm for classification by calculating distances between sensor data points and labeled training examples.",
              "Developed a Neural Network classifier with configurable layers and activation functions for improved accuracy.",
              "Used feature extraction techniques to prepare sensor data for efficient processing.",
              "Optimized the system for real-time predictions with low computational latency.",
              "Validated performance through accuracy testing on labeled datasets.",
              "Demonstrated proficiency in machine learning concepts and C++ programming."
        ],
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "Sensor Programming",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/DHYEYBHATT9/Phone-orientation-Generator.git",
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
