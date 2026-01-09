# 📊 Generator Rapor Siswa (Complex Project)

A professional web-based tool for managing student academic reports. This project is a **Level 4: Complex Project**, demonstrating advanced JavaScript concepts, Object-Oriented Programming (OOP), and data persistence.

## 🚀 Key Features
* **Automatic Calculations**: Using a logical engine to calculate total scores, averages, and letter grades (A-E) instantly.
* **Data Persistence**: Built with `LocalStorage` integration, ensuring your data remains safe even after closing the browser or refreshing the page.
* **Smart Indicators**: Real-time statistics showing the total number of students, those who passed, and those who failed.
* **Data Export**: Features a built-in JSON exporter to backup or move your data easily.
* **Print-Ready Design**: Optimized UI for printing reports directly from the browser.

## 🛠️ Tech Stack & Concepts
### Core Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Advanced Concepts Applied
* **Object-Oriented Programming (OOP)**: Logic managed through a `Student` class with getters and methods for cleaner data handling.
* **ES6 Modules**: Organized code structure using `import/export` to maintain high scalability.
* **DOM Manipulation**: Dynamic UI rendering based on the current state of the data.
* **JSON Handling**: Efficient data parsing and stringifying for storage and export features.

## 📂 Project Structure
```text
├── index.html          # Main interface
├── style.css           # Custom styling & animations
├── main.js             # Application entry point
└── module/             # Modular logic files
    ├── Students.js     # Student Class (OOP Logic)
    ├── display.js      # UI Rendering & Event Listeners
    ├── data.js         # Data storage & constants
    └── helper.js       # Utility functions (Storage & Selectors)
