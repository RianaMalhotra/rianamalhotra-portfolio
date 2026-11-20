export type ProjectCategory =
  | 'Digital Design'
  | 'Embedded & Robotics'
  | 'Software & Data'
  | 'Aviation & Tools'
  | 'Design & Community'
  | 'Coursework & Experiments'

export type Project = {
  title: string
  category: ProjectCategory
  description: string
  stack: string[]
  github?: string
  live?: string
  highlight?: string
  featured?: boolean
  source?: 'GitHub' | 'LinkedIn'
}

export const projects: Project[] = [
  {
    title: 'EmberWatch',
    category: 'Software & Data',
    description: 'An AI-assisted wildfire detection and risk platform combining environmental signals, geospatial analysis, and an interactive risk dashboard.',
    stack: ['Python', 'Geospatial', 'Machine learning'],
    github: 'https://github.com/RianaMalhotra/EmberWatch',
    live: 'https://ember-watch-xi.vercel.app',
    highlight: 'Wildfire risk, made visible',
    featured: true,
  },
  {
    title: 'Cache Controller RTL Design & Verification',
    category: 'Digital Design',
    description: 'A two-way set-associative cache controller with write-back, write-allocate, dirty eviction, per-set LRU, and an FSM-driven miss path.',
    stack: ['SystemVerilog', 'cocotb', 'Verilator'],
    github: 'https://github.com/RianaMalhotra/Cache-Controller-RTL-Verification',
    highlight: 'Directed + randomized verification',
    featured: true,
  },
  {
    title: 'RVCore — RISC-V Processor',
    category: 'Digital Design',
    description: 'A simulation-first 32-bit RISC-V SoC project with synthesizable RTL, Python reference models, automated regression, and early DFT exploration.',
    stack: ['SystemVerilog', 'Python', 'cocotb'],
    github: 'https://github.com/RianaMalhotra/RVCore-RISC-V-Processor-Design-Verification',
    highlight: 'Building toward RV32I',
    featured: true,
  },
  {
    title: 'BreadCrumb Trail',
    category: 'Embedded & Robotics',
    description: 'A handheld GNSS breadcrumb navigator that records a route, guides the return journey, and sends a compact emergency SOS with location context.',
    stack: ['Arduino Uno Q', 'GNSS', 'I²C / UART'],
    github: 'https://github.com/RianaMalhotra/BreadCrumb_Trail',
    highlight: 'Best Use of Arduino Uno Q · MakeUofT',
    featured: true,
  },
  {
    title: 'TransitFlow — GIS for Commuters',
    category: 'Software & Data',
    description: 'A commuter-focused routing system blending walking and driving, pickup-point selection, GIS layers, and parallel route optimization.',
    stack: ['GIS', 'A* / Dijkstra', 'Optimization'],
    github: 'https://github.com/RianaMalhotra/TransitFlow---GIS-for-Commuters',
    highlight: '+8% solution quality over baseline',
    featured: true,
  },
  {
    title: 'Runway Crosswind Calculator',
    category: 'Aviation & Tools',
    description: 'A cockpit-inspired flight-training tool that visualizes headwind, tailwind, and crosswind components, with runway selection and METAR decoding.',
    stack: ['JavaScript', 'Weather APIs', 'Trigonometry'],
    github: 'https://github.com/RianaMalhotra/runway-crosswind-calculator',
    live: 'https://rianamalhotra.github.io/runway-crosswind-calculator/',
    highlight: 'Wind vectors at a glance',
    featured: true,
  },
  {
    title: 'TestPilot',
    category: 'Software & Data',
    description: 'A backend test intelligence platform for finding flaky tests and regressions, tracking failure patterns, and prioritizing reruns.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pytest'],
    github: 'https://github.com/RianaMalhotra/TestPilot',
    highlight: 'Reliability signals for CI',
  },
  {
    title: 'Adaptive Mixed-Precision Systolic Array Accelerator',
    category: 'Digital Design',
    description: 'A parameterized AI accelerator with mixed-precision systolic MAC arrays, tiled matrix multiplication, on-chip buffering, and fault-injection verification.',
    stack: ['SystemVerilog', 'Cocotb', 'Accelerator design'],
    github: 'https://github.com/RianaMalhotra/Adaptive-Mixed-Precision-Systolic-Array-Accelerator',
  },
  {
    title: 'FPGA DJ Booth',
    category: 'Digital Design',
    description: 'An audio-visual DJ controller on the DE1-SoC, bringing together real-time audio effects, hardware controls, and a VGA interface.',
    stack: ['DE1-SoC', 'Nios V', 'Assembly', 'VGA'],
    github: 'https://github.com/RianaMalhotra/DJ-Booth',
    source: 'LinkedIn',
  },
  {
    title: '’70s-Inspired Pong on FPGA',
    category: 'Digital Design',
    description: 'A two-player Pong game rendered directly in hardware, with VGA graphics, keyboard input, collision logic, and score tracking.',
    stack: ['Verilog', 'DE1-SoC', 'VGA'],
    github: 'https://github.com/RianaMalhotra/-70s-Inspired-Pong-Game-on-FPGA-with-Real-Time-VGA-Graphics',
    source: 'LinkedIn',
  },
  {
    title: 'Morse Code Blink Decoder',
    category: 'Digital Design',
    description: 'An assistive communication prototype that detects eye blinks with OpenCV and decodes Morse input on FPGA hardware.',
    stack: ['OpenCV', 'Verilog', 'UART'],
    github: 'https://github.com/RianaMalhotra/Morse-Code-Blink-Decoder-FPGA',
    source: 'LinkedIn',
  },
  {
    title: 'ClawBot — The Autonomous Flag Seeker',
    category: 'Embedded & Robotics',
    description: 'A competition robot that combines color and ultrasonic sensing, PID motion control, Bluetooth overrides, and a servo-powered claw.',
    stack: ['Arduino', 'PID control', 'Sensors'],
    source: 'LinkedIn',
  },
  {
    title: 'Bluetooth Line-Following Robot',
    category: 'Embedded & Robotics',
    description: 'An autonomous line-following car with IR sensing, Bluetooth control, and a custom 3D-printed chassis.',
    stack: ['Arduino', 'IR sensors', 'Fusion 360'],
    source: 'LinkedIn',
  },
  {
    title: 'RM VentureX',
    category: 'Software & Data',
    description: 'An investment intelligence platform connecting financial data pipelines, structured research workflows, and interactive tools for equity analysis.',
    stack: ['TypeScript', 'Financial data', 'Web app'],
    github: 'https://github.com/RianaMalhotra/rmventurex',
    live: 'https://www.rmventurex.com/',
  },
  {
    title: 'TelMe — Gen AI in Telecom',
    category: 'Software & Data',
    description: 'A hackathon prototype for telecom onboarding and plan recommendations, pairing a customer chatbot with clustering-based insights.',
    stack: ['Python', 'Flask', 'scikit-learn'],
    github: 'https://github.com/RianaMalhotra/TelMe',
    source: 'LinkedIn',
  },
  {
    title: 'Accessible Stationery for One-Handed Use',
    category: 'Design & Community',
    description: 'A design-engineering project exploring a stable rubber-base glide tool to make everyday writing tasks easier to complete one-handed.',
    stack: ['Inclusive design', 'SOLIDWORKS', 'Prototyping'],
    source: 'LinkedIn',
  },
  {
    title: 'Stage Without Limits',
    category: 'Design & Community',
    description: 'A team proposal for practical, budget-conscious accessibility improvements at Hart House Theatre, grounded in site analysis and stakeholder feedback.',
    stack: ['Accessibility', 'Spatial planning', 'Team leadership'],
    source: 'LinkedIn',
  },
  {
    title: 'Riana’s Lens — STEM Podcast',
    category: 'Design & Community',
    description: 'A podcast sharing the journeys and advice of women in STEM with a global audience.',
    stack: ['STEM', 'Storytelling', 'Community'],
    source: 'LinkedIn',
  },
  {
    title: 'Aviation Unit Converter',
    category: 'Aviation & Tools',
    description: 'A lightweight aviation reference tool for converting knots, nautical miles, feet, and temperature.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RianaMalhotra/aviation-unit-converter',
    live: 'https://rianamalhotra.github.io/aviation-unit-converter/',
  },
  {
    title: 'StudyBunny',
    category: 'Software & Data',
    description: 'A cozy study companion with a Pomodoro timer, focus streaks, rewards, and a growing bunny character.',
    stack: ['JavaScript', 'Web app', 'Productivity'],
    github: 'https://github.com/RianaMalhotra/StudyBunny',
    live: 'https://rianamalhotra.github.io/StudyBunny/',
  },
  {
    title: 'Lily Leap',
    category: 'Software & Data',
    description: 'A small browser game about helping a frog hop across shifting lily pads and collect fireflies.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RianaMalhotra/Lily-Leap',
    live: 'https://rianamalhotra.github.io/Lily-Leap/',
  },
  {
    title: 'ECE444 PRA6 — Test-Driven Development',
    category: 'Coursework & Experiments',
    description: 'Coursework exploring test-driven development and deployment of a web application.',
    stack: ['Python', 'TDD', 'Deployment'],
    github: 'https://github.com/RianaMalhotra/ece444-pra6',
    live: 'https://ece444-pra6.onrender.com',
  },
  {
    title: 'ECE444 PRA7 Starter',
    category: 'Coursework & Experiments',
    description: 'A clean course starter for Ruff, pre-commit hooks, and GitHub Actions workflows.',
    stack: ['Python', 'Ruff', 'GitHub Actions'],
    github: 'https://github.com/RianaMalhotra/ece444-pra7-starter',
  },
  {
    title: 'ECE444 F2026 PRA3',
    category: 'Coursework & Experiments',
    description: 'A University of Toronto software engineering practical repository.',
    stack: ['Python', 'Software engineering'],
    github: 'https://github.com/RianaMalhotra/E444-F2026-PRA3',
  },
  {
    title: 'ECE444 F2026 PRA1',
    category: 'Coursework & Experiments',
    description: 'Software engineering coursework focused on Git, collaboration, Agile workflows, testing, and CI/CD.',
    stack: ['Python', 'Git', 'CI/CD'],
    github: 'https://github.com/RianaMalhotra/RianaMalhotra-ECE444-F2026-PRA1',
  },
  {
    title: 'Portfolio — v1',
    category: 'Software & Data',
    description: 'An earlier personal portfolio introducing my work across software engineering, embedded systems, AI, and robotics.',
    stack: ['HTML', 'CSS', 'GitHub Pages'],
    github: 'https://github.com/RianaMalhotra/RianaMalhotra.github.io',
    live: 'https://rianamalhotra.github.io/',
  },
  {
    title: 'Numerical Integration',
    category: 'Coursework & Experiments',
    description: 'A C program that approximates a definite integral with a rectangle-based numerical method.',
    stack: ['C', 'Numerical methods'],
    github: 'https://github.com/RianaMalhotra/Numerical-Integration',
  },
  {
    title: 'Robot Shooting Angle',
    category: 'Coursework & Experiments',
    description: 'A compact C program that calculates the angle a robot needs to launch a ball toward a target.',
    stack: ['C', 'Geometry'],
    github: 'https://github.com/RianaMalhotra/Robot-Shooting',
  },
  {
    title: 'Arrival Time Calculator',
    category: 'Aviation & Tools',
    description: 'A C utility that adds trip duration to a departure time and reports the arrival time.',
    stack: ['C', 'Time calculation'],
    github: 'https://github.com/RianaMalhotra/Arrival-Time-Calculator',
  },
  {
    title: 'Law of Sines Calculator',
    category: 'Coursework & Experiments',
    description: 'A small C program for solving triangle side lengths and angles using the law of sines.',
    stack: ['C', 'Trigonometry'],
    github: 'https://github.com/RianaMalhotra/Law-of-sines',
  },
  {
    title: 'Planet Properties',
    category: 'Coursework & Experiments',
    description: 'A C exercise for calculating a planet’s radius, mass, and velocity from user-provided inputs.',
    stack: ['C', 'Physics'],
    github: 'https://github.com/RianaMalhotra/Planets',
  },
  {
    title: 'Thermostat Converter',
    category: 'Coursework & Experiments',
    description: 'A simple C utility for converting thermostat readings between Fahrenheit and Celsius.',
    stack: ['C', 'Unit conversion'],
    github: 'https://github.com/RianaMalhotra/Thermostat',
  },
  {
    title: 'Palindrome Check',
    category: 'Coursework & Experiments',
    description: 'A concise C++ program that checks whether a string reads the same forward and backward.',
    stack: ['C++', 'Algorithms'],
    github: 'https://github.com/RianaMalhotra/Palindrome',
  },
  {
    title: 'Tic-Tac-Toe',
    category: 'Coursework & Experiments',
    description: 'A classic two-player game built as an early C++ programming project.',
    stack: ['C++', 'Game'],
    github: 'https://github.com/RianaMalhotra/Tic-Tac-Toe',
  },
  {
    title: 'Unit Convertor',
    category: 'Coursework & Experiments',
    description: 'A C utility for converting common mass, length, volume, and temperature units.',
    stack: ['C', 'Unit conversion'],
    github: 'https://github.com/RianaMalhotra/Unit-Convertor',
  },
  {
    title: '8-Ball',
    category: 'Coursework & Experiments',
    description: 'A small command-line 8-ball style program built while learning C.',
    stack: ['C', 'Interactive program'],
    github: 'https://github.com/RianaMalhotra/8-Ball',
  },
  {
    title: 'Quadratics',
    category: 'Coursework & Experiments',
    description: 'A C program for working with quadratic equations and their roots.',
    stack: ['C', 'Math'],
    github: 'https://github.com/RianaMalhotra/Quadratics',
  },
]

export const projectCategories = Array.from(
  new Set(projects.map((project) => project.category)),
)
