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
      name: "Farmer's Hut",
      description:[
            "Two Hybrid App used for online grocery of fresh produce items.",
            "One App is used by farmer to manage inventory and handle orders",
            "Second App is used by consumer to search items and add different items to cart then order the products from different farmers based on consumer’s location.",
            "Uses fetch() API for CRUD operations.",
            "Uses Node Mailer for sending e-mails.",
            "Uses Twilio for OTPs.",
            "Uses mongo DB for storage."

      ],
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "native style",
          color: "pink-text-gradient",
        },
      ],
      image: farmer,
      source_code_link: "https://github.com/Dilpreet1996/Farmer-sHut",
    },
    {
      name: "Telecom Management System",
      description:[
      "Two Android app, one is used for managing the administration work and second one is for customers.",
      "Defined Role management for employees.",
      "Implemented with Telecom management system API to fetch the data from the database."

  ],
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: telecom,
      source_code_link: "https://github.com/Dilpreet1996/bsnlAppForPortofolio",
    },
    {
      name: "Chat App",
      description:[
         "Using socket.io to create real-time messaging and notification system",
         "Managing state using context API",
         "Code reuse (Custom hooks and util functions)",
         "Auth in react, node and JWT",
         "Creating and Consuming APIs"
        ],
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "socket",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Dilpreet1996/chatapp",
    },
    {
      name: "Mind Map Game",
      description:[
            "Using props for State management",
            "Simple and easy to guess number"

      ],
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "native style",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Dilpreet1996/Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
