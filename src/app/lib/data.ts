
export const resumeData = {
  name: 'Mahadev Maitri',
  aboutMe: '',
  school: [
    {
      name: 'University of Delaware',
      location: 'Newark, DE',
      logo: '/UDMonogramC.jpg',
      link: 'https://udel.edu',
      degree: 'Master of Science',
      major: 'Computer Science',
      gpa: '4.0',
      totalgpa: '4.0',
      start: '2022',
      end: '2024',
      courses: [
        'CISC 621: Introduction to Algorithms',
        'CISC 684: Introduction to Machine Learning',
      ],
    },
    {
      name: 'R. V. College of Engineering',
      location: 'Bengaluru, India',
      logo: '/rvce_logo.png',
      link: 'https://rvce.edu.in',
      degree: 'Bachelor of Engineering',
      major: 'Electronics and Communication Engineering',
      gpa: '7.97',
      totalgpa: '10',
      start: '2016',
      end: '2020',
      courses: [],
    },
  ],
  experience: [
    {
      company: 'Swechchha',
      location: 'Remote',
      title: 'Back-end Developer - Part Time',
      start: 'December 2022',
      end: 'Present',
      link: 'https://swechchha.org',
      description: [
        'Restructured data tables and converted them into a relational database, enhanced the codebase to ensure it is error-free and fail-safe, and introduced new features such as a payment system and a location-based search. Additionally, optimized Round-Trip Time (RTT) for the majority of request calls.',
        'Oversee the maintenance of all servers and manage development cycles of the application using Jenkins and Amazon EC2, ensuring smooth operations and continuous improvement.',
        'The project initiated to address challenges in government toilet desludging in slum areas. The focus is on efficiently managing toilet operations, facilities, and addressing user complaints to the BMC.',
        'Actively contributing under the VESIT College of Engineering and the Brihanmumbai Municipal Corporation (BMC). The project, in its developmental phase, has secured funding from State Bank of India and Star Union Daichi, the support from reputable institutions for Social Responsibility.',
      ]
    },
    {
      company: 'English Language Institute - University of Delaware',
      location: 'Newark, DE',
      title: 'Instructor',
      start: 'August 2023',
      end: 'December 2023',
      description: [
        'Teach CISC106: General Computer Science for Engineers to a class with more than 10 students, and also supervise my assistant for lab work with structured comprehensive syllabi and coursework.',
        'Taught Python and MATLAB, incorporating instruction on fundamental libraries such as math and guided 3 projects on file reading as tour recommendation, cramer\'s rule for solving equations and any game using pygame library.',
      ]
    },
    {
      company: 'IT Client Support \& Services - University of Delaware',
      location: 'Newark, DE',
      title: 'Troubleshooter - Part Time',
      start: 'August 2023',
      end: 'August 2023',
      description: [
        'Supported UD students and professors with issues related to Wi-Fi, scantrons, any UD software, and also fixed hardware issues with personal laptops.',
      ]
    },
    {
      company: 'Optum - UnitedHealth Group',
      location: 'Bengaluru, India',
      title: 'Associate Software Engineer - II',
      start: 'July 2020',
      end: 'July 2022',
      description: [
        'Designed and developed dynamic User Interfaces using ReactJs and Redux, aligning closely with business requirements. Delivered comprehensive demos to the Business Team upon completion, showcasing the functionality and features implemented.',
        'Enhanced front-end microservice functionality by optimizing page loading times and implementing advanced data management strategies using Redux. Collaborated with the team to ensure a more efficient and responsive user interface in the Integrated Eligibility (IE) project, contributing to overall project success during a year engagement.',
        'Led the execution of an end-to-end functional regression testing suite using Robot Framework and conducted performance testing of REST APIs using JMeter. Developed expertise in handling complex features, becoming the go-to person for specific challenges. Ensured the quality and reliability of development servers in the Optum Medicaid Management Services (OMMS) project by executing and analyzing all test suites twice weekly for a year.',
      ]
    },
  ],
  researchExperience: [
    {
      company: 'Electronics and Radar Development Establishment (LRDE), DRDO',
      location: 'Bengaluru, India',
      title: 'Trainee',
      start: 'January 2020',
      end: 'May 2020',
      description: [
        'Designed a state-of-the-art solution for Automatic Target Recognition of ships using Deep Learning algorithms. Constructed a GAN framework (2.87M parameters) with the aid of CNNs to extract features such as the amplitude of signals, mast, and orientation, thereby increasing the number of ISAR images of ships in the dataset.',
        'Employed a transfer learning method for the classification of ships, leveraging the MobileNetV2 network, achieving an accuracy of 89.6%.',
        'Generated the original dataset of ISAR images using ANSYS Electromagnetics SBR+ with 3-D models of ships, ensuring an accurate representation of ship features.',
        'Published a paper on "Classification of Ships using ISAR Images with a Combined Deep Transfer Learning and GAN Processing Framework" in the International Journal of Engineering Research \& Technology (IJERT), Volume 10, Issue 10 (October 2021).',
      ],
    },
    {
      company: 'Wipro IISc Research Innovation Network (WIRIN), IISc',
      location: 'Bengaluru, India',
      title: 'Project Intern',
      start: 'June 2019',
      end: 'July 2019',
      description: [
        'Enhanced inference timing and frames per second for input video streams by implementing sequence-by-sequence batch augmentation of video frames and reducing the computational complexity of the semantic segmentation algorithm.',
        'Improved the overall performance of the semantic segmentation algorithm by reducing the processing time and increasing the accuracy of video segmentation.',
      ],
    }
  ],
  projects: [
    {
      title: 'Poultry Farms to Manage Depopulation Using Nash Equilibrium through MR Simulation',
      technologies: [
        'C#',
        'Unity Engine',
      ],
      start: 'September 2023',
      end: 'December 2023',
      description: [
        'Designed a Nash Equilibrium, a game-theoretical approach aimed at maximizing revenue generation for poultry farms. This innovative strategy involves optimizing various attributes in the management of depopulation through a mixed reality simulation, which also includes training new personnel. These attributes, including but not limited to, timing of vaccination, depopulation, and risk management, contribute to the overall effectiveness of the approach.',
      ],
    },
    {
      title: 'Sudoku using Backtrack Search',
      technologies: [
        'Python',
        'Flask',
        'HTML',
        'CSS',
      ],
      start: 'February 2023',
      end: 'May 2023',
      description: [
        'Built a Flask application for solving Sudoku puzzles using the AC3 algorithm and Backtracking search algorithm, featuring predefined puzzles and custom input. Implemented step-by-step solutions with color-coded clarity and successfully tracked and managed failed values using binary constraints in the AC-3 algorithm.',
      ],
    },
    {
      title: 'Cryptocurrency Price Forecasting',
      technologies: [
        'Python',
        'TensorFlow',
        'Numpy',
        'Pandas',
        'Matplotlib',
      ],
      start: 'September 2022',
      end: 'December 2022',
      description: [
        'Collaborated with a team of three to develop neural networks for predicting cryptocurrency prices through an ablation study. Conducted experiments on different numbers of LSTM layers and 1D-CNN with LSTM layers, using a range of hyperparameters.',
        'Based on analysis of data collected from Binance Data Vision, we determined that a single layer of LSTM with 128 units produced the most accurate predictions. Additionally, we found that the 1D-CNN with LSTM architecture could be effective in cases where additional data input streams, such as current news, are available.',
      ],
    },
    {
      title: 'Class Attendance Application based on Facial Recognition and Cognitive Services',
      technologies: [
        'Android',
        'Java',
        'Microsoft Azure Face API',
      ],
      start: 'August 2018',
      end: 'November 2018',
      description: [
        'Developed an android application to streamline the attendance-taking process for a class, leveraging image recognition technology to automatically mark attendance based on facial recognition. Integrated the Azure cognitive services Face API with the application to accurately identify matching faces registered for the class.',
      ],
    },
    {
      title: 'Detection of Common Plant Diseases using Convolutional Neural Network',
      technologies: [
        'Python',
        'PyTorch', 
        'Numpy', 
        'Pandas', 
        'Scikit-Learn',
      ],
      start: 'August 2018',
      end: 'November 2018',
      description: [
        'Addressing the issue of common plant diseases at an early stage to inform farmers at the right time by designing a state-of-the-art solution using a Convolutional Neural Network to detect diseases and suggest appropriate weedicides. This project was shared with a team of two and was responsible for the collection and pre-processing of the dataset, and building the classifier using CNN.',
      ],
    },
  ],
  achievements: [
    {
      title: 'Won the Creativity Award at the DS+AI Hackathon 2023 for the work towards the "Generating High-quality, Fine-scale Precipitation Dataset for the Great Lakes Region Building upon Existing Dataset".',
      link: 'https://sites.udel.edu/ai/dsai-summer-hackathon-2023/',
      description: [],
    },
    {
      title: 'Published a paper on “Face Aging Through Uniqueness Conserving by cGAN with Separable Convolution” in Sustainable Communication Networks and Application, Proceedings of ICSCN 2020.',
      link: 'https://link.springer.com/chapter/10.1007/978-981-15-8677-4_6',
      description: [],
    },
    {
      title: 'Secured the second place out of 30 participating teams in Hackathon (Blockchain Hackathon 2019) organized by NextGrids and powered by JUiNCUBATOR, a TBI supported by DST, Government of India and JAIN(Deemed-to-be-University).',
      link: '',
      description: [
        'Built a smart contract using Ethereum for verification of employee background check and deployed on to IBM Blockchain platform. To demonstrate, we developed a sample Angular website to perform the transactions.',
      ],
    },
    {
      title: 'Secured the first place out of 50 participating teams in Hackathon (Stay Late And Code, 2019) organized by Amrita School of Engineering sponsored by General Electricals Healthcare.',
      link: '',
      description: [
        'Built a Machine Learning model for Speech Recognition (offline) with help of Recurrent Neural Network and implemented an Android Application using the same model’s lite version for efficient computation as demo which could be implemented in medical appliances.',
      ],
    },
  ],
  volunteerExperience: [
    {
      link: '',
      description: [
        'Served as the Website Manager for IGSA, overseeing the comprehensive redesign of the WordPress site. Implemented enhancements to showcase upcoming events, student information and news, and curated photos and videos captured during events. Additionally, took a leadership role in planning and executing various events hosted by IGSA.',
      ],
    }
  ],
  certifications: [
    {
      title: 'Structuring Machine Learning Projects from Coursera. (2020)',
      link: 'https://coursera.org/account/accomplishments/certificate/2JGT88YLP7AR',
    },
    {
      title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization from Coursera. (2020)',
      link: 'https://coursera.org/account/accomplishments/certificate/Z4L6ZPBD5XQT',
    },
    {
      title: 'Neural Networks and Deep Learning from Coursera. (2020)',
      link: 'https://coursera.org/account/accomplishments/certificate/XCLPC88BC5N3',
    },
    {
      title: 'Machine Learning Basic Nanodegree from Udacity India. (2018)',
      link: 'https://confirm.udacity.com/RSXCMEGL',
    },
    {
      title: 'Android Foundation Nanodegree II from Udacity India. (2018)',
      link: 'https://confirm.udacity.com/HJP5C35N',
    },
  ],
}

export const techLogos = [
  {
    name: 'Python',
    logo: '/tech/python-logo-only.svg',
    alt: 'Python Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'TypeScript',
    logo: '/tech/typescript-icon.svg',
    alt: 'TypeScript Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'JavaScript',
    logo: '/tech/javascript.svg',
    alt: 'JavaScript Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'C++',
    logo: '/tech/C++_Logo.svg',
    alt: 'C++ Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'CSS',
    logo: '/tech/css3.svg',
    alt: 'CSS Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'SQL',
    logo: '/tech/sql-database.svg',
    alt: 'SQL Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'Node.js',
    logo: '/tech/nodejs.svg',
    alt: 'Node.js Logo',
    width: 80,
    height: 30,
  },
  {
    name: 'React',
    logo: '/tech/react.svg',
    alt: 'Rect Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'Bootstrap',
    logo: '/tech/bootstrap.svg',
    alt: 'Bootstrap Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'Redux',
    logo: '/tech/redux.svg',
    alt: 'Redux Logo',
    width: 80,
    height: 30,
  },
  {
    name: 'Robot Framework',
    logo: '/tech/robotframework.svg',
    alt: 'Robot Framework Logo',
    width: 40,
    height: 30,
  },
  {
    name: 'MongoDB',
    logo: '/tech/mongodb.svg',
    alt: 'MongoDB Logo',
    width: 90,
    height: 30,
  },
  {
    name: 'Flask',
    logo: '/tech/flask.svg',
    alt: 'Flask Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'Next.js',
    logo: '/tech/nextjs-icon.svg',
    alt: 'Next.js Logo',
    width: 30,
    height: 30,
  },
  {
    name: 'PyTorch',
    logo: '/tech/pytorch.svg',
    alt: 'PyTorch Logo',
    width: 90,
    height: 30,
  },
  {
    name: 'TensorFlow',
    logo: '/tech/FullColorPrimary Icon.svg',
    alt: 'TensorFlow Logo',
    width: 40,
    height: 30,
  },
  {
    name: 'Google Cloud Platform',
    logo: '/tech/Google_Cloud_logo.svg',
    alt: 'Google Cloud Platform Logo',
    width: 120,
    height: 30,
  },
  {
    name: 'Amazon Web Services',
    logo: '/tech/aws.svg',
    alt: 'Amazon Web Services Logo',
    width: 30,
    height: 30,
  },
]
