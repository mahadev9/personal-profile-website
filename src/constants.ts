export const STATIC_VALUES = {
  name: 'Mahadev Maitri',
  fullName: 'Mahadev Mahesh Maitri',
  phone: '+1-302-685-6915',
  email: 'mmaitri@udel.edu',
  github: 'https://github.com/mahadev9',
  linkedin: 'https://www.linkedin.com/in/mahadev-maitri/',
  description1: 'I am a Computer Science Graduate Student at the University of Delaware.',
  intro: 'Hello',
  animationPath: '/lottie/coding.json',
  greetingWords: ['Hello', 'Namaste', 'Bonjour', 'Hola', '👋🏻'],
  education: [
    {
      institutionName: 'University of Delaware',
      location: 'Newark, DE',
      degree: 'Master of Science in Computer Science',
      period: '2022 - 2024',
      url: 'https://www.udel.edu/'
    },
    {
      institutionName: 'R. V. College of Engineering',
      location: 'Bengaluru, India',
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      period: '2016 - 2020',
      url: 'https://rvce.edu.in/'
    }
  ],
  experience: [
    {
      organizationName: 'Optum Global Solutions (India) Private Limited - UnitedHealth Group',
      location: 'Bengaluru, India',
      position: 'Associate Software Engineer - II',
      period: 'Jul 2020 - Jul 2022',
      description: [
        'Designed and developed User Interfaces using ReactJs to meet requested features and provided demos to the Business Team upon completion. Worked for Integrated Eligibility (IE) project over a period of 1 year.',
        'Conducted an end-to-end functional regression testing suite using Robot Framework, as well as performance testing of REST APIs using JMeter, to ensure the quality and reliability of development servers in the Optum Medicaid Management Services (OMMS) project. Test suites were run twice weekly over the course of one year.'
      ]
    },
    {
      organizationName: 'Electronics and Radar Development Establishment (LRDE), DRDO',
      location: 'Bengaluru, India',
      position: 'Trainee',
      period: 'Jan 2020 - May 2020',
      description: [
        'Designed a state-of-the-art solution for Automatic Target Recognition of ships using Deep Learning algorithms. Con- structed GAN framework (2.87M parameters) with help of CNNs to extract features, like the amplitude of signals, mast, and orientation, to increase the number of ISAR images of ships in the dataset.',
        'Utilized transfer learning method for classification of ships which was backed by MobileNetV2 network with an accuracy of 89.6%.',
        'The original dataset of ISAR images was generated using ANSYS Electromagnetics SBR+ with 3-D models of ships, allowing for accurate representation of ship features.',
        'Published a paper on ”Classification of Ships using ISAR Images with Combined Deep Transfer Learning and GAN Processing Framework”, International Journal of Engineering Research & Technology (IJERT) Volume 10, Issue 10 (October 2021).'
      ]
    },
    {
      organizationName: 'Wipro IISc Research Innovation Network (WIRIN), IISc',
      location: 'Bengaluru, India',
      position: 'Project Intern',
      period: 'Jun 2019 - Jul 2019',
      description: [
        'Improved the inference timing and frames per second for an input video stream by implementing sequence-by- sequence batch augmentation of video frames and reducing the computational complexity of the semantic segmen- tation algorithm.',
        'Improved the overall performance of the semantic segmentation algorithm by reducing the processing time and increasing the accuracy of video segmentation.'
      ]
    }
  ],
  projects: [
    {
      name: 'Cryptocurrency Price Forecasting',
      tools: 'Python, TensorFlow, Numpy, Pandas, Matplotlib',
      period: 'Sept 2022 - Dec 2022',
      description: [
        'Collaborated with a team of three to develop neural networks for predicting cryptocurrency prices through an ablation study. Conducted experiments on different numbers of LSTM layers and 1D-CNN with LSTM layers, using a range of hyperparameters.',
        'Based on analysis of data collected from Binance Data Vision, we determined that a single layer of LSTM with 128 units produced the most accurate predictions. Additionally, we found that the 1D-CNN with LSTM architecture could be effective in cases where additional data input streams, such as current news, are available.'
      ]
    },
    {
      name: 'Movie Booking System',
      tools: 'ReactJs, MySQL',
      period: 'Jan 2019 - Apr 2019',
      description: [
        'Worked with a team of two and was responsible for developing the front end of the application using ReactJs. The backend was developed using Express.js in connection to the MySQL server on Azure. Each of the services was deployed separately to understand microservices and their benefits.'
      ]
    },
    {
      name: 'Class Attendance Application based on Facial Recognition and Cognitive Services',
      tools: 'Android, Java, Azure Face API',
      period: 'Aug 2018 - Nov 2018',
      description: [
        'Developed an android application to streamline the attendance-taking process for a class, leveraging image recogni- tion technology to automatically mark attendance based on facial recognition. Integrated the Azure cognitive services Face API with the application to accurately identify matching faces registered for the class.'
      ]
    },
    {
      name: 'Detection of Common Plant Diseases using Convolutional Neural Network',
      tools: 'Python, PyTorch, Numpy, Pandas, Scikit-Learn',
      period: 'Aug 2018 - Nov 2018',
      description: [
        'Addressing the issue of common plant diseases at an early stage to inform farmers at the right time by designing a state-of-the-art solution using a Convolutional Neural Network to detect diseases and suggest appropriate weedicides. This project was shared with a team of two and was responsible for the collection and pre-processing of the dataset, and building the classifier using CNN.'
      ]
    }
  ]
}
