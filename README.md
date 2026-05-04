# 📚 Digital Library Web Application

## 🚀 Project Name
**Digital Library System**

---

## 📖 Project Overview
A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform focuses on performance, security, and user experience using modern technologies like Next.js, MongoDB, and BetterAuth.

---

## 🌐 Live URL
🔗 https://your-live-link.vercel.app

---

## 🎯 Purpose
The goal of this project is to provide a fully functional online library system where users can:
- Discover books easily  
- Borrow books digitally  
- Manage personal profiles  
- Experience a fast and responsive UI  

---

## ✨ Key Features

### 🔐 Authentication System
- Email & Password Login/Register  
- Google Social Login  
- Secure authentication with BetterAuth  
- Private Routes (Protected Pages)  

### 🏠 Home Page
- 📢 Banner with CTA ("Find Your Next Read")  
- 🔁 Marquee for announcements  
- ⭐ Featured Books Section (Top 4 books)  
- ➕ Two additional custom sections  

### 📚 Book Management
- All Books Page with search functionality  
- Book filtering by categories (Story, Tech, Science)  
- Detailed Book Information Page  
- Borrow system with availability tracking  

### 👤 User Profile
- View user information  
- Personalized experience  

### 📱 Responsive Design
- Fully responsive for Mobile, Tablet, Desktop  

---

## 🧩 Layout Structure

### 🔝 Navbar
- Left: Logo (Home link)  
- Center: Navigation (Home | All Books | My Profile)  
- Right:  
  - Logged Out → Login Button  
  - Logged In → User Name + Logout  

### 🔚 Footer
- Custom design  
- Social media links  
- Contact section  

---

## 🗂️ Data Structure (Books JSON)

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "description": "string",
  "category": "Story | Tech | Science",
  "available_quantity": 5,
  "image_url": "string"
}
