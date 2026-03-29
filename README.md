# ⌨️ TypeMeter - Interactive Typing Speed Web Application

##  Project Overview

TypeMeter is an interactive web application designed to help users improve their typing speed and accuracy. It provides both practice and test modes with real-time feedback and performance evaluation.

---
The application includes:

* Typing practice and test modules
* User registration and login system
* Contact form with database storage
* Backend integration using PHP and MySQL

---

## ⚙️ Technologies Used

* HTML, CSS, Bootstrap
* JavaScript
* PHP
* MySQL (via XAMPP)

---

## 🚀 Features

### 🧠 Practice Mode

- 60-second typing session
- Real-time WPM (Words Per Minute)
- Live accuracy calculation
- Character highlighting:
  - ✅ Correct → Green
  - ❌ Incorrect → Red
- Reset functionality at any time
- Performance-based result display with colored feedback

---

### ⏱️ Typing Test Mode
- Select test duration:
  - 30 seconds
  - 60 seconds
  - 90 seconds
  - 120 seconds
- Dynamic paragraph based on selected time
- Live WPM and accuracy tracking
- Automatic test stop when timer reaches 0
- Result message with performance feedback

---

### 📊 Performance Evaluation

| Performance Level | Condition | Feedback |
|------------------|----------|---------|
| 🔴 Low | WPM < 20 OR Accuracy < 50% | Don’t give up! Accuracy improves with consistent practice. |
| 🟡 Moderate | WPM 20–30 AND Accuracy > 75% | Good effort! Practice more to improve your accuracy. |
| 🟢 High | WPM > 30 AND Accuracy > 80% | Your accuracy is excellent! Keep up the amazing work!Excellent work! |

---

### 🔐 Login System
- Simple login functionality using JavaScript and PHP
- User authentication with session/local storage

---

### 📩 Contact Form
- Frontend validation (JavaScript)
- Backend validation (PHP)
- Displays success and error messages

---

## 🗄️ Database Setup (How to Import)

1. Open **XAMPP Control Panel**

2. Start:

   * Apache
   * MySQL

3. Open your browser and go to:
   http://localhost/phpmyadmin

4. Click **New** (left sidebar)

5. Create a database:

   * Name: `typemeter`

6. Click on the created database (`typemeter`)

7. Go to the **Import** tab

8. Click **Choose File** and select:

   * `database.sql` (included in the project)

9. Click **Go**

✅ Now your database is ready.

---

## 🚀 How to Run the Project (XAMPP/WAMP)

1. Copy the project folder (e.g., `typemeter`) into:

   For XAMPP:

   ```
   C:\xampp\htdocs\
   ```

   For WAMP:

   ```
   C:\wamp\www\
   ```

2. Open **XAMPP/WAMP Control Panel**

3. Start:

   * Apache
   * MySQL

4. Open your browser and go to:

   ```
   http://localhost/typemeter/
   ```

5. You will see the home page of the application.

---

## 🔐 User Authentication

* Users can register using the registration page
* Passwords are securely stored using `password_hash()`
* Login is validated using `password_verify()`
* Sessions are used to manage logged-in users

---

## 📩 Contact Form

* Users can send messages through the contact page
* Messages are stored in the MySQL database (`messages` table)

---

## 📁 Project Structure

```
typemeter/
│── styles.css
│── script.js
│── includes/
│   └── db.php
│── auth/
│   ├── login.php
│   ├── register.php
│   ├── logout.php
│── contact.php
│── index.html 
│── login.html
│── register.html
│── dashboard.php
│── database.sql
│── contact.html
│── practice.html
│── test.html
│── tips.html
```

---

## 📌 Notes

* This project runs on a local server (XAMPP/WAMP)
* PHP will not work on GitHub Pages
* Ensure Apache and MySQL are running before accessing the project

---

## 👨‍💻 Developed By

TypeMeter group
Course: ICT 2204
University: Rajarata University of Sri Lanka

---


