export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  challenges: string;
  learnings: string;
  image: string;
  imageHint: string;
  gallery: { url: string; hint: string }[];
  tags: string[];
  github: string | null;
  live: string | null;
}


export const projects: Project[] = [
  {
    slug: 'learnmate',
    title: 'LearnMate (Mobile-Based Android App)',
    description:
      'An Android app to streamline remote learning with session booking, messaging, and video conferencing.',
    longDescription:
      'Learnmate is an Android-based mobile application designed to streamline remote learning and tutoring. It enables tutors and tutees to connect, communicate, and collaborate through an intuitive interface that supports session booking, in-app messaging, and video conferencing — all from a mobile device. The goal was to create a seamless and accessible platform for education, breaking down geographical barriers.',
    challenges: 'One of the main challenges was implementing a reliable and low-latency video conferencing feature within the app. Integrating the Agora SDK required careful handling of state management and native platform differences. Another challenge was designing an intuitive booking system that could handle multiple time zones and tutor availability.',
    learnings: 'This project was a deep dive into cross-platform mobile development with Flutter and Dart. I gained significant experience with real-time communication technologies and third-party SDK integration. I also learned a lot about UX/UI design for mobile applications and the importance of user feedback in the development cycle.',
    image: 'https://i.ibb.co/pB0sL53q/9da9f7d7-4f51-44e4-b003-c95f647bd3c1-1.jpg',
    imageHint: 'mobile learning',
    gallery: [
      { url: 'https://picsum.photos/seed/learnmate1/800/600', hint: 'app screenshot' },
      { url: 'https://picsum.photos/seed/learnmate2/800/600', hint: 'user profile' },
    ],
    tags: ['Mobile App', 'Dart', 'Flutter', 'Agora'],
    github: null,
    live: null,
  },
  {
    slug: 'wood-knot-detection',
    title: 'Wood Knot Detection App',
    description: 'An on-device, real-time app for identifying wood knots using an optimized YOLOv8 model on Flutter.',
    longDescription: 'This project involved building an on-device, real-time detection application for identifying wood knots. The core of the app uses a YOLOv8 model converted to TensorFlow Lite for efficient mobile deployment. The application features an image-preprocessing pipeline to optimize input for the model and renders bounding boxes with confidence scores on the live camera feed.',
    challenges: 'Optimizing the YOLOv8 model for on-device performance without sacrificing too much accuracy was a major hurdle. This involved experimenting with different quantization techniques and model architectures. Achieving real-time inference on a variety of Android devices also required careful memory and processor management.',
    learnings: 'I gained hands-on experience with the entire pipeline of deploying a computer vision model on a mobile device, from training and conversion with YOLOv8 and TFLite to building the user-facing application in Flutter. It was a great lesson in model optimization and native performance tuning.',
    image: 'https://i.ibb.co/tw9ntCnW/fd56b489-d02d-4fa3-b3d7-24963ae7812d-1.png',
    imageHint: 'wood detection',
    gallery: [
      { url: 'https://picsum.photos/seed/woodknot1/800/600', hint: 'detection overlay' },
      { url: 'https://picsum.photos/seed/woodknot2/800/600', hint: 'model analysis' },
    ],
    tags: ['Mobile App', 'AI', 'Flutter', 'Dart', 'TensorFlow Lite', 'YOLOv8'],
    github: null,
    live: null,
  },
  {
    slug: 'electrical-monitoring-system',
    title: 'Electrical Monitoring System',
    description: 'A low-cost energy/illumination monitoring system using Arduino with a C# app for data visualization.',
    longDescription: 'This project focused on creating a cost-effective system for monitoring energy consumption and ambient illumination. I designed and assembled the hardware using an Arduino, sensors, and an SD card module for data logging. The firmware was written in C/C++ to read sensor data and store it. A desktop application was then built using C# and .NET to ingest the logged CSV data and provide time-series visualizations for analysis.',
    challenges: 'Ensuring the accuracy and reliability of sensor readings over long periods was challenging. It required calibrating sensors and implementing error-checking in the firmware. Another task was designing a C# application that could efficiently parse large CSV files and render interactive charts without performance issues.',
    learnings: 'This project provided a full-stack experience from hardware design and firmware development to desktop application programming. I learned about interfacing with hardware, data logging techniques, and creating data visualization tools. It was a practical application of embedded systems and software engineering principles.',
    image: 'https://i.ibb.co/QFCZfdC1/2c2a6709-4da4-4894-89ca-0e6044f0735d.jpg',
    imageHint: 'electrical monitoring',
    gallery: [
        { url: 'https://picsum.photos/seed/electric1/800/600', hint: 'hardware setup' },
        { url: 'https://picsum.photos/seed/electric2/800/600', hint: 'data chart' },
    ],
    tags: ['IoT', 'Arduino', 'C/C++', 'C#', '.NET', 'CSV'],
    github: null,
    live: null,
  },
  {
    slug: 'braille-haptic-reader',
    title: 'Capstone: Braille Haptic Reader',
    description: "An OCR-to-Braille translation pipeline on Raspberry Pi using YOLOv5 for visually impaired users.",
    longDescription: "As my capstone project, I developed an OCR-to-Braille translation pipeline running on a Raspberry Pi. The system uses a camera to capture text, which is then processed by a custom-trained YOLOv5-based AI model for accurate text detection. The detected text is run through an OCR engine and translated into Braille, which is then outputted to a haptic display. The system achieved a 97.82% OCR accuracy, enabling real-time translation for visually impaired users.",
    challenges: 'Training a highly accurate text detection model for various fonts and lighting conditions was a significant challenge. Integrating the entire pipeline—camera capture, AI inference, OCR, and haptic output—on a resource-constrained device like the Raspberry Pi required extensive optimization. The real-time constraint meant every part of the process had to be as efficient as possible.',
    learnings: 'This project taught me a great deal about the practical application of machine learning models on edge devices. I learned about optimizing deep learning models for performance, working with hardware interfaces, and building a complete, end-to-end system that serves a real-world purpose.',
    image: 'https://i.ibb.co/3mYZWPgY/image-2025-09-06-230239249.png',
    imageHint: 'braille reader device',
    gallery: [
        { url: 'https://picsum.photos/seed/braille1/800/600', hint: 'device prototype' },
        { url: 'https://picsum.photos/seed/braille2/800/600', hint: 'ocr in action' },
    ],
    tags: ['AI', 'IoT', 'Python', 'Raspberry Pi', 'YOLOv5', 'OCR'],
    github: null,
    live: null,
  },
  {
    slug: 'inventory-system',
    title: 'Accountability and Inventory System',
    description: 'A robust PHP-based inventory system for streamlined asset tracking with dynamic form generation.',
    longDescription: 'This comprehensive inventory and accountability system, built with PHP, revolutionizes asset management. It provides a centralized platform for tracking equipment, generating dynamic accountability forms on-the-fly, and maintaining a clear chain of custody. Powerful search and sorting capabilities allow for instant access to asset information, significantly improving operational efficiency and reducing manual paperwork.',
    challenges: 'Developing a dynamic form generation engine that was both flexible and secure was a key challenge. It required careful database schema design and server-side logic to prevent injection vulnerabilities while allowing for customizable forms. Implementing an efficient search algorithm to handle a large inventory database was also a priority.',
    learnings: 'This project deepened my expertise in backend development with PHP and SQL. I mastered techniques for building secure, data-driven web applications and learned the importance of database normalization for scalability. It was also a great exercise in designing user-centric features like advanced search and dynamic content generation.',
    image: 'https://picsum.photos/seed/inventory/600/400',
    imageHint: 'inventory management',
    gallery: [
      { url: 'https://picsum.photos/seed/inventory1/800/600', hint: 'dashboard screen' },
      { url: 'https://picsum.photos/seed/inventory2/800/600', hint: 'asset list' },
    ],
    tags: ['Web App', 'PHP', 'SQL'],
    github: null,
    live: null,
  },
  {
    slug: 'custom-payroll-system',
    title: 'Custom Payroll Management System',
    description: 'A bespoke desktop payroll system using Python and PyQt for precise, efficient financial management.',
    longDescription: 'This custom-built payroll management system is a desktop application designed for precision and reliability. Developed with Python, PyQt for the GUI, and a powerful PostgreSQL database, it automates complex payroll calculations, tax deductions, and reporting. The system provides a secure and intuitive interface for managing employee data, processing pay runs, and generating detailed financial reports, ensuring accuracy and compliance.',
    challenges: 'The primary challenge was ensuring the accuracy of all financial calculations, including various tax laws and benefit deductions, which required meticulous logic and extensive testing. Building a responsive and user-friendly desktop interface with PyQt while managing a complex backend database connection was another significant hurdle. Data security was paramount, involving encrypted storage and access controls.',
    learnings: 'Through this project, I honed my skills in Python application development and GUI design with PyQt. I gained valuable experience in database management with PostgreSQL, including designing robust schemas for financial data. It also provided a deep understanding of the complexities involved in building business-critical software where accuracy and security are non-negotiable.',
    image: 'https://picsum.photos/seed/payroll/600/400',
    imageHint: 'payroll software',
    gallery: [
      { url: 'https://picsum.photos/seed/payroll1/800/600', hint: 'employee records' },
      { url: 'https://picsum.photos/seed/payroll2/800/600', hint: 'report generation' },
    ],
    tags: ['Desktop App', 'Python', 'PyQt', 'PostgreSQL'],
    github: null,
    live: null,
  },
];
