const resumeData = {
  // ── PERSONAL INFO ──────────────────────────────────────────────
  name: {
    first: "Dmytro",
    last: "Filiurskyi",
  },
  title: "Software Engineer | OpenAI API/LLMs | Python/OpenCV/TensorFlow | HTML/CSS/JS",
  location: "Košice, Slovakia",
  email: "dmytrofiliurskyi@tutamail.com",
  phone: "+421 951 829 558",
  tagline:
    "Building intelligent systems at the intersection of machine learning, computer vision, and clean user interfaces. Based in Košice, Slovakia - open to full-time & internship opportunities",

  // ── ABOUT ──────────────────────────────────────────────────────
  about: `I'm a studying <strong>Intelligent Systems</strong> at the Technical University of Košice,
    with a deep passion for the places where AI meets the real world - drones that recognize handwriting,
    solvers that think step-by-step, embedded systems that blink in perfect timing.<br><br>
    My work spans <strong>neural networks</strong>, <strong>computer vision</strong>,
    <strong>embedded systems</strong>, and <strong>front-end development</strong>.
    I enjoy building things end-to-end: from training a model to shipping a clean UI that makes it usable.
    I'm a fast learner, comfortable in both Python and C# environments, and I thrive in collaborative teams
    where experimentation is encouraged`,

  // ── SKILLS ─────────────────────────────────────────────────────
  skills: [
    {
      category: "Programming",
      tags: ["Python", "C#", "C", "HTML5", "CSS3", "JS", "C++"],
    },
    {
      category: "AI & Data",
      tags: ["TensorFlow", "OpenCV", "Neural Networks", "Computer Vision", "Data Analysis"],
    },
    {
      category: "Tools & Platforms",
      tags: ["Linux", "Unity", "Arduino", "LaTeX", "Photoshop", "WordPress"],
    },
    {
      category: "Languages",
      tags: ["Ukrainian - C2", "Russian - C2", "Slovak - B1", "English - B2"],
      variant: "lang", // applies .skill-tag.lang styling
    },
  ],

  // ── EDUCATION ──────────────────────────────────────────────────
  education: [
    {
      period: "Sep 2021 - Nowadays",
      degree: "BSc in Intelligent Systems",
      institution: "Technical University of Košice (TUKE), Slovakia",
      description:
        "Final thesis on neural networks and visual data recognition. Coursework covered Machine Learning, Neural Networks, Algorithms, Web Development, and Data Structures. Participated in collaborative university projects and tech competitions.",
      tags: ["Machine Learning", "Neural Networks", "Algorithms", "Web Dev"],
    },
],

  // ── PROJECTS ───────────────────────────────────────────────────
  // To add a new project — just add a new object to this array.
  projects: [
    {
      label: "AI Vision",
      title: "AI Drone Handwriting Mimic System",
      description:
        "A system where a drone recognizes handwritten or screen-displayed digits and reproduces them mid-air through movement patterns. Combines real-time computer vision with precise UAV control.",
      tech: ["Python", "OpenCV", "TensorFlow", "UAV SDK"],
    },
    {
      label: "Embedded",
      title: "Traffic Light Simulation — Arduino",
      description:
        "A programmable traffic light system built on Arduino with multiple blinking conditions, timing logic, and LED patterns simulating real-world traffic scenarios.",
      tech: ["Arduino", "C++", "Breadboard", "LEDs"],
    },
    {
      label: "Game Dev",
      title: "2D Platformer Game",
      description:
        "A 2D game created in Unity as a final exam project. Implemented core physics, movement mechanics, and interactive game elements from scratch.",
      tech: ["C#", "Unity"],
    },
    {
      label: "AI Algorithm",
      title: "AI-Based Sudoku Solver",
      description:
        "An automated Sudoku solver using backtracking and heuristic algorithms, with a custom-built GUI for user input and step-by-step visualization of the solving process.",
      tech: ["Python", "Tkinter", "Backtracking"],
    },
    {
      label: "CLI Tool",
      title: "Command Line Task Manager",
      description:
        "A lightweight terminal-based task manager for organizing daily to-dos. Features task categories, deadlines, completion tracking, and persistent file storage.",
      tech: ["Python", "argparse", "JSON"],
    },
  ],

  // ── CONTACT ────────────────────────────────────────────────────
  availability: "Available for opportunities",
  footerYear: "2026",
};
