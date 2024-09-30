/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eddie Ho",
  title: "Hi all, I'm Eddie",
  subTitle: emoji(
    "A passionate Data Engineer 🚀 having an experience of building data pipeline and data infrastructure with Python / AWS / Azure / Snowflake and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zvTa0CaW-2jRvfg7QxUYorCUAyJXI4aa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/noodleslove",
  linkedin: "https://www.linkedin.com/in/eddie-bojian-ho/",
  gmail: "edwin.ho.bj@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly scalable data pipeline and data infrastructure"),
    emoji(
      "⚡ Scalable data processing with SQL / PySpark / AWS Glue / Azure Data Factory"
    ),
    emoji(
      "⚡ Efficient data storage with AWS S3 / Azure Blob Storage / Snowflake"
    ),
    emoji("⚡ Real-time data processing with Kafka / Kinesis")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "September 2021 - March 2024",
      desc: "Ranked top 10% in the program. Took courses about Data Science, Optimization, Operating Systems, ...",
      descBullets: [
        "Minor in Cognitive Science",
        "GPA: 3.8/4.0",
        "Provost Honors"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Pipeline", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Warehousing",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Lesso",
      companylogo: require("./assets/images/lessoLogo.jpeg"),
      date: "May 2024 – Present",
      desc: "LESSO America is a leading player in the field of plumbing and irrigation. The SCM project enhances the efficiency of the supply chain by developing data-driven models that predict demand, optimize inventory levels, and reduce lead times. As a Data Scientist my responsibilities lie in developing and productionalize data science models as products to optimize business decisions, establishing claims forecasting models to reduce costs."
    },
    {
      role: "Student Engineer",
      company: "UC San Diego",
      companylogo: require("./assets/images/ucsdLogo.png"),
      date: "Dec 2023 – Mar 2024",
      desc: "Analytics Portal is a centralized analytics platform which empowers university departments by providing real-time insights and data-driven decision-making capabilities. My role as a student engineer is responsible for data integration using GraphQL, data pipeline development, and dashboards development."
    },
    {
      role: "Azure Data Engineer Intern",
      company: "Avanade",
      companylogo: require("./assets/images/avanadeLogo.png"),
      date: "Dec 2022 – Mar 2023",
      desc: "Avanade is the leading provider of innovative digital, cloud and advisory services, with over 59,000 employees in over 26 countries. The EDW consolidates data from disparate sources, centralizing data as a single source of truth. As a Data Engineer Intern, I worked on the data storage solution like Azure Data Lake integration, tiered storage strategy, and data partitioning."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ethstateLogo.png"),
      projectName: "EthState",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dapper-malasada-9683a3.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/csesLogo.png"),
      projectName: "UCSD CSES",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://csesucsd.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nutripal.jpg"),
      projectName: "NutriPal",
      projectDesc:
        "NutriPal is a user-friendly diet information website that aims to simplify the daily diet logging process.",
      footerLink: [
        {name: "Visit Website", url: "https://nutripal-ucsd.herokuapp.com/"}
      ]
    },
    {
      image: require("./assets/images/covid.jpg"),
      projectName: "COVID-19 Analysis",
      projectDesc:
        "Analysis on impact of the COVID-19 pandemic on global warming",
      footerLink: [
        {
          name: "Visit Report",
          url: "https://drive.google.com/file/d/1Vt1BsArRcmB9PU4JPViPP8tBLWDt1QkI/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/lfm.jpg"),
      projectName: "LFM Recommender System",
      projectDesc:
        "A Yelp Recommender System using Latent Factor Collaborative Filtering to provide personalized business recommendations through a web application, enhancing user experience and engagement.",
      footerLink: [
        {
          name: "Visit Report",
          url: "https://drive.google.com/file/d/1cbem5KYzXJhihUirzvo_5JAMdW6Dw8LF/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/stock-2.jpg"),
      projectName: "House of Representatives Analysis II",
      projectDesc:
        "This project analyzes stock trades made by members of the 116th U.S. House of Representatives, combining it with information on their political affiliation to evaluate missingness associations in the dataset.",
      footerLink: [
        {
          name: "Visit Report",
          url: "https://drive.google.com/file/d/10AgiJjXxIM7ZC-H-ScfD9iZHK3lsnAdt/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/stock.jpg"),
      projectName: "House of Representatives Analysis I",
      projectDesc:
        "This project analyzes stock trades made by members of the 116th U.S. House of Representatives, combining it with information on their political affiliation to evaluate missingness associations in the dataset.",
      footerLink: [
        {
          name: "Visit Report",
          url: "https://drive.google.com/file/d/1M3fHZAFZXAAp5A9QwROB91KcIcK2SG03/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/blockchain.jpg"),
      projectName: "Blockchain in Go",
      projectDesc: `A simplified blockchain implementation in Golang`,
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/noodleslove/blockchain-go"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Franklin Templeton 2024 University Hackathon",
      subtitle:
        "Developed a blockchain-driven platform to streamline the investment process and reduce the risk of fraud.",
      image: require("./assets/images/franklinLogo.png"),
      imageAlt: "Franklin Templeton Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1-MN93huEGwy4Oc8a-R5-QbU30tOG3Y5Q/view?usp=sharing"
        },
        {
          name: "Final Pitch",
          url: "https://docs.google.com/presentation/d/1gTUgpzRujxQxFXZn1tmR9YmpH0cofRFG/edit?usp=sharing&ouid=117471858530228216140&rtpof=true&sd=true"
        }
      ]
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      subtitle:
        "Earned by completing the IBM Data Engineering Professional Certificate from Coursera",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/YHCEDJEA9ZCT"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      subtitle:
        "Earned by passing the DP-203: Data Engineering on Microsoft Azure exam",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [{name: "Certification", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  resume:
    "https://drive.google.com/file/d/1zvTa0CaW-2jRvfg7QxUYorCUAyJXI4aa/view?usp=sharing",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6266625830",
  email_address: "edwin.ho.bj@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
