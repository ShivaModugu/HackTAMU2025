# 🚗 Ryota - A Toyota Car Shopping Assistant

Helping users find their dream Toyota vehicles with ease!

## 🌟 Overview

The **Toyota Car Shopping Assistant** is an AI-powered web application designed to deliver a seamless and personalized car-shopping experience. This platform leverages modern technologies and AI to help users search, compare, and choose Toyota vehicles tailored to their preferences. **All the code is in branch shiva_dev.**

---

## 🔧 Features

### 🌐 Dynamic Web Interface
- Built with **HTML**, **CSS**, **JavaScript**, **TypeScript**, and styled using **Tailwind CSS** for a visually engaging and responsive design
- Developed with **Next.js** for fast, server-side rendering and efficient routing

### 🤖 AI-Powered Recommendations
- Integrated **OpenAI's GPT API** to provide intelligent, context-aware suggestions
- Personalized recommendations based on user preferences like budget, model, and financing options
- Leveraged **custom APIs** to perform percentage-based calculations and provide optimized results based on user quiz/questionnaire inputs

### 📊 Comprehensive Vehicle Data
- Access to Toyota vehicle specifications, pricing, and financing details using a structured SQL database
- Powerful filtering options to refine searches and compare vehicles effectively

### 🔗 Seamless Backend Integration
- Backend powered by **Flask** and **Python** for robust API management and logic handling
- Efficient data fetching and real-time query processing for smooth user experiences

### 🚀 Real-Time Performance
- Optimized database queries with **SQL** to handle large datasets and ensure accurate results
- Scalable and responsive architecture for handling multiple users concurrently

---

## 📂 Folder Structure

```
📁 ToyotaCarAssistant
├── 📂 src
│   ├── 📂 components         # React components (UI)
│   ├── 📂 pages              # Next.js pages and routing
│   ├── 📂 styles             # Tailwind CSS and custom styles
│   ├── 📂 utils              # Utility functions (e.g., API handlers)
│   └── 📂 assets             # Images and static files
├── 📂 backend
│   ├── app.py                # Flask backend application
│   ├── models.py             # SQL database models
│   └── routes.py             # Flask API endpoints
├── 📂 database
│   └── schema.sql            # SQL schema for database setup
├── 📜 package.json           # Node.js dependencies
├── 📜 README.md              # Project documentation (this file)
└── 📜 .env                   # API keys and sensitive data
```

---

## 🚀 Technologies Used

### Frontend
- **HTML**, **CSS**, **JavaScript**, **TypeScript**
- **Next.js** for server-side rendering and dynamic routing
- **Tailwind CSS** for styling

### Backend
- **Flask** and **Python** for API development and backend logic

### Database
- **SQL** for structured data storage and management

### AI Integration
- **OpenAI GPT API** for intelligent, context-aware suggestions
- **Custom APIs** for advanced calculations based on user inputs

---

## 🛠️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ShivaModugu/HackTAMU2025.git
   cd HackTAMU2025
   ```

2. **Switch to the `shiva_dev` Branch**
   
   **Important:** The code is located under the `shiva_dev` branch. Use the following command to switch to it:
   ```bash
   git checkout shiva_dev
   ```

3. **Frontend Setup**
   - Navigate to the `src` folder:
     ```bash
     cd src
     npm install
     ```
   - Start the Next.js application:
     ```bash
     npm run dev
     ```

4. **Backend Setup**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     python3 -m venv venv
     source venv/bin/activate  # (use venv\Scripts\activate on Windows)
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```bash
     flask run
     ```

5. **Database Setup**
   - Navigate to the `database` folder:
     ```bash
     sqlite3 database.db < schema.sql
     ```

6. **Add API Keys**
   - Create a `.env` file in the project root with the following:
     ```env
     OPENAI_API_KEY=your_openai_api_key
     FLASK_APP_SECRET=your_flask_secret_key
     DATABASE_URL=sqlite:///database/database.db
     ```

---

## 🎉 How It Works

1. **Enter Preferences:** Users input preferences like budget, model, and features
2. **API Suggestions:** The platform uses AI to provide tailored vehicle recommendations
3. **Custom Calculations:** Custom APIs analyze user inputs from quizzes/questionnaires to deliver percentage-based optimized results
4. **Compare Vehicles:** Users can compare specs side-by-side for informed decisions
5. **Save Searches:** Favorites can be saved for future reference

---

## ✨ Future Enhancements

- **🏦 Finance Tools:** Add fully implemented RAG AI for better financial planning
- **🌎 Localization:** Support for multiple languages for global accessibility

---

## 🤝 Contributing

We welcome contributions to improve the project! To contribute:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes and push them
4. Open a pull request for review
