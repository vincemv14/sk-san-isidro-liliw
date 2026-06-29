SK San Isidro Digital Portal
The SK San Isidro Digital Portal is a web-based platform designed to bridge the gap between Barangay San Isidro and its residents. By transitioning from manual, paper-based workflows to a centralized digital hub, the platform enhances transparency, streamlines administrative services, and empowers youth-led governance.

🚀 Key Features
Centralized Community Hub: A responsive homepage providing a single point of access for barangay history, news, and upcoming community events.

Administrative Transparency: An integrated Public Disclosure Board for SK and national news, ensuring verifiable data for all constituents.

Digital Request & Tracking System: A simplified portal allowing residents to submit service requests and monitor their status in real-time.

"Kuya Isidro" AI Chatbot: An LLM-powered support system providing 24/7 autonomous assistance to residents.

Mobile-First Design: A fully responsive architecture ensuring seamless accessibility across all devices.

🛠 Tech Stack
Frontend: React.js.

Backend & Database: Supabase (PostgreSQL) for secure, relational data management and authentication.

API & Integration:

Groq AI: Powers the "Kuya Isidro" chatbot logic.

Brevo API: Integrated for automated email notification pipelines.

Deployment: Vercel.

🏗 System Architecture
Modular Component Design: Utilizes React to build reusable components, ensuring the platform can grow with future barangay needs.

Secure Data Layer: Implements Role-Based Access Control (RBAC) to protect sensitive resident information within the PostgreSQL database.

Asynchronous Processing: Employs efficient API orchestration to handle real-time request tracking and chatbot queries without blocking the main UI thread.

💡 Technical Challenges & Solutions
Data Integrity vs. Transparency: To ensure resident data remained secure while providing public transparency, a role-based administrative dashboard was designed to strictly separate public information from sensitive backend records.

User Accessibility: To keep the data-heavy portal performant on low-bandwidth mobile devices, lazy loading and optimized state management were implemented to ensure the site remains fast and reliable for all community members.

🌐 Live Demo
Visit the portal here: sk-san-isidro-liliw.vercel.app

Documentation maintained by the project development team.
