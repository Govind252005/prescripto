# Prescripto - Healthcare Appointment Booking System
A full-stack healthcare appointment booking application built with React.js, Node.js, Express.js, and MongoDB.

## 🚀 Features
- **Patient Portal**: Register, login, browse doctors by specialty, book appointments
- **Admin Panel**: Manage doctors, appointments, and system settings
- **Doctor Dashboard**: View and manage appointments, update profile
- **Image Upload**: Doctor profile pictures via Cloudinary
- **Payment Integration**: Razorpay and Stripe support (ready to configure)
- **Responsive Design**: Works on all devices
- **Secure Authentication**: JWT-based authentication system
- **Real-time Updates**: Appointment status updates

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS
- React Router DOM
- Axios for API calls
- Context API for state management

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- Cloudinary for image storage
- Multer for file uploads

### Payment Gateways
- Razorpay (configurable)
- Stripe (configurable)

## 📁 Project Structure
```
prescripto-full-stack/
├── frontend/          # Patient-facing React application
├── admin/            # Admin panel React application
├── backend/          # Node.js/Express.js API server
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git

### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/prescripto-full-stack.git
cd prescripto-full-stack
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```bash
CURRENCY="INR"
JWT_SECRET="your-jwt-secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-admin-password"
MONGODB_URI="your-mongodb-connection-string"
CLOUDINARY_URL="your-cloudinary-url"
RAZORPAY_KEY_ID="your-razorpay-key"
RAZORPAY_KEY_SECRET="your-razorpay-secret"
STRIPE_SECRET_KEY="your-stripe-secret"
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
```

## 🚀 Running the Application

Start all servers:

**Backend Server (Port 4000):**
```bash
cd backend
npm run server
```

**Frontend (Port 5173):**
```bash
cd frontend
npm run dev
```

**Admin Panel (Port 5174):**
```bash
cd admin
npm run dev
```

## 🌐 Application URLs
- **Frontend (Patients)**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:4000

## 👥 Default Admin Credentials
- **Email**: admin@example.com
- **Password**: Govind@123

## 📚 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/get-profile` - Get user profile
- `POST /api/user/update-profile` - Update user profile
- `POST /api/user/book-appointment` - Book appointment
- `GET /api/user/appointments` - Get user appointments

### Admin Routes
- `POST /api/admin/login` - Admin login
- `POST /api/admin/add-doctor` - Add new doctor
- `GET /api/admin/all-doctors` - Get all doctors
- `GET /api/admin/appointments` - Get all appointments
- `GET /api/admin/dashboard` - Get dashboard data

### Doctor Routes
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor appointments
- `GET /api/doctor/dashboard` - Get doctor dashboard
- `GET /api/doctor/list` - Get all available doctors

## 🔐 Environment Variables

### Backend (.env)
```env
CURRENCY="INR"
JWT_SECRET="your-jwt-secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-password"
MONGODB_URI="your-mongodb-connection-string"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
RAZORPAY_KEY_ID="your-razorpay-key"
RAZORPAY_KEY_SECRET="your-razorpay-secret"
STRIPE_SECRET_KEY="your-stripe-secret"
```

## 🌟 Key Features in Detail

### For Patients
- Browse doctors by specialty
- View doctor profiles and availability
- Book appointments with preferred time slots
- Manage appointment history
- Update personal profile

### For Admins
- Add and manage doctors
- View all appointments
- Monitor system analytics
- Manage user accounts

### For Doctors
- View scheduled appointments
- Update appointment status
- Manage personal profile
- View patient information

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer
**Govind**
- Email: gomac2507@gmail.com
- Phone: 9870159269
- GitHub: Govind252005

## 🙏 Acknowledgments
- Thanks to all contributors who helped build this project
- Special thanks to the open-source community for the amazing tools and libraries
- MongoDB Atlas for database hosting
- Cloudinary for image management services

## 📞 Support
If you have any questions or need help, please feel free to reach out:
- **Email**: gomac2507@gmail.com
- **Phone**: 9870159269
- **GitHub Issues**: [Create an Issue](https://github.com/YourUsername/prescripto-full-stack/issues)

## 🚀 Deployment
This application is ready to be deployed on platforms like:
- **Vercel** (Recommended for frontend and admin)
- **Railway** or **Render** (For backend)
- **Netlify** (Alternative for frontend)

---

⭐ **Star this repository if you found it helpful!** ⭐