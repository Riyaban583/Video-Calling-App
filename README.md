<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/ZEGOCLOUD-1A73E8?style=for-the-badge&logo=webrtc&logoColor=white" />

# 🎥 Video Calling App

**A blazing-fast, real-time video calling application built with React + ZEGOCLOUD SDK.**  
Join or host video rooms instantly — no downloads, no friction.

[🚀 Live Demo](#) · [🐛 Report Bug](https://github.com/Riyaban583/Video-Calling-App/issues) · [✨ Request Feature](https://github.com/Riyaban583/Video-Calling-App/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔗 **Instant Room Join** | Join any video room with a simple Room ID |
| 🎥 **Real-time Video & Audio** | Low-latency peer-to-peer communication |
| 🖥️ **Screen Sharing** | Share your screen with one click |
| 📋 **Shareable Room Links** | Copy & share room links easily |
| ⚡ **Fast UI** | Powered by Vite for near-instant load times |
| 📱 **Responsive Design** | Works across desktop and mobile browsers |

---

## 🛠️ Tech Stack

- **Frontend:** React 18 (Vite)
- **Routing:** React Router DOM
- **Video SDK:** ZEGOCLOUD UIKit Prebuilt
- **Styling:** CSS Modules

---

## 📁 Project Structure

```
videocall/
├── public/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx       # Landing page with room join form
│   │   ├── VideoPage.jsx      # Video call interface
│   │   └── constant.js        # ZEGOCLOUD credentials (keep private!)
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v16+`
- A free [ZEGOCLOUD](https://www.zegocloud.com/) account

### 1. Clone the repository

```bash
git clone https://github.com/Riyaban583/Video-Calling-App.git
cd Video-Calling-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure ZEGOCLOUD credentials

Create or edit `src/components/constant.js`:

```js
export const APP_ID = YOUR_APP_ID;           // numeric value, no quotes
export const SERVER_SECRET = "YOUR_SERVER_SECRET";
```

> 🔑 Get your credentials from the [ZEGOCLOUD Console](https://console.zegocloud.com/)

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Usage

1. Enter your **name** on the home page
2. Enter or generate a **Room ID**
3. Click **Join** — that's it!
4. Share the Room ID with others to call together 🎉

---

## 🔐 Security Note

> ⚠️ **Never expose `SERVER_SECRET` in a production frontend.**  
> For production apps, generate tokens on a secure backend server.  
> See [ZEGOCLOUD Token Authentication Docs](https://docs.zegocloud.com/article/11648).

---

## 🚀 Roadmap

- [ ] Group video calls (3+ participants)
- [ ] Secure backend token generation
- [ ] Zoom / Google Meet–style advanced UI
- [ ] Mobile-first responsive overhaul
- [ ] Chat sidebar during calls
- [ ] Virtual backgrounds

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo, then:
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
# Open a Pull Request
```

---


<div align="center">

Made with ❤️ by **Riya Bansal**

[![GitHub](https://img.shields.io/badge/GitHub-Riyaban583-181717?style=flat&logo=github)](https://github.com/Riyaban583)

⭐ **Star this repo if you found it helpful!**

</div>
