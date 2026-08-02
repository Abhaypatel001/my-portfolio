LIVE LINK :  https://abhaypatel001.github.io/my-portfolio/

# 🌐 Personal Portfolio Website

A modern and responsive Full Stack Portfolio Website built using **HTML, CSS, JavaScript, Node.js, Express.js, and MySQL**. This portfolio showcases my skills, projects, education, and provides a working contact form that stores visitor messages in a MySQL database.

---

## 🚀 Features

- 🎨 Responsive Design
- 🌙 Dark / Light Mode
- ✨ Scroll Reveal Animation
- 🖼️ Hero Section
- 👨‍💻 About Me Section
- 🛠️ Skills Section
- 🎓 Education Section
- 📂 Projects Section
- 📞 Contact Form
- 📄 Resume Download
- 🔝 Back to Top Button
- ⚡ Node.js + Express Backend
- 🗄️ MySQL Database Integration
- 💾 Contact Form Data Stored in Database

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```text
MY_PORTFOLIO/
│
├── assets/
│   └── resume.pdf
│
├── backend/
│   ├── node_modules/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── index.html
├── style.css
├── script.js
├── profile.jpeg
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Abhaypatel001/MY_PORTFOLIO.git
```

### Open Project

```bash
cd MY_PORTFOLIO
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Start Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

---

## 🗄️ Database Setup

Create a MySQL database:

```sql
CREATE DATABASE portfolio_db;
```

Use the database:

```sql
USE portfolio_db;
```

Create the contacts table:

```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📸 Screenshots

- Home Page
- Hero Section
- About Section
- Projects Section
- Contact Form

(Add screenshots here)

---

## 👨‍💻 Author

**Abhay Patel**

- 📧 Email: abhayjipatel9821@gmail.com
- 💻 GitHub: https://github.com/Abhaypatel001
- 💼 LinkedIn: https://www.linkedin.com/in/abhay-patel-b8877b382

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
