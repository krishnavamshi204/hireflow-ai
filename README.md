# 🚀 HireFlow-AI – Dockerized Full Stack Application

## 📌 Project Overview

HireFlow-AI is a Dockerized full stack application built to demonstrate how modern applications are developed, containerized, and managed using DevOps practices.

This project integrates:

* ⚛️ React.js Frontend
* 🟢 Node.js + Express Backend
* 🍃 MongoDB Database
* 🐳 Docker Containers
* 🧩 Docker Compose Orchestration
* 🔧 Git & GitHub Version Control

The goal of this project was to understand how multiple services communicate inside containers and how real-world applications are managed using Docker.

---

# 🏗️ System Architecture

```text
                    ┌─────────────────┐
                    │   React Frontend │
                    │     Port 3000    │
                    └────────┬────────┘
                             │
                             │ API Calls
                             ▼
                    ┌─────────────────┐
                    │ Node.js Backend │
                    │    Port 5000    │
                    └────────┬────────┘
                             │
                             │ Database Connection
                             ▼
                    ┌─────────────────┐
                    │    MongoDB      │
                    │    Port 27017   │
                    └─────────────────┘

 All services run inside Docker containers.
```

---

# ✨ Key Features

✅ Dockerized Frontend

✅ Dockerized Backend

✅ MongoDB Container Integration

✅ Multi-Container Architecture

✅ Docker Networking

✅ Port Mapping

✅ Docker Compose Setup

✅ GitHub Version Control

✅ Beginner-Friendly DevOps Project

---

# 🛠️ Tech Stack

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| React.js       | Frontend User Interface    |
| Node.js        | Backend Runtime            |
| Express.js     | REST API Handling          |
| MongoDB        | NoSQL Database             |
| Docker         | Containerization           |
| Docker Compose | Multi-Container Management |
| Git            | Version Control            |
| GitHub         | Repository Hosting         |

---

# 📂 Project Structure

```text
hireflow-ai/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Step-by-Step Implementation Process

## 1️⃣ Creating the Frontend Application

The frontend was created using React.

### Command

```bash
npx create-react-app frontend
```

### Purpose

* Builds the user interface
* Runs on localhost:3000
* Handles client-side rendering

---

# 2️⃣ Creating the Backend Server

A Node.js + Express backend was developed.

### Purpose

* Handles API requests
* Connects frontend with database
* Processes application logic
* Runs on localhost:5000

---

# 3️⃣ Installing Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

### Purpose

* Downloads required libraries
* Creates node_modules directory
* Generates package-lock.json

---

# 4️⃣ Dockerizing the Frontend

### Frontend Dockerfile

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Explanation

| Instruction | Purpose                            |
| ----------- | ---------------------------------- |
| FROM        | Base image                         |
| WORKDIR     | Working directory inside container |
| COPY        | Copies application files           |
| RUN         | Executes npm install               |
| EXPOSE      | Opens container port               |
| CMD         | Starts React application           |

---

# 5️⃣ Dockerizing the Backend

### Backend Dockerfile

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
```

### Purpose

* Creates backend image
* Runs Node.js server inside container
* Exposes backend API

---

# 6️⃣ Building Docker Images

### Frontend Image

```bash
docker build -t hireflow-frontend ./frontend
```

### Backend Image

```bash
docker build -t hireflow-backend ./backend
```

### Purpose

Docker converts application source code into runnable images.

---

# 7️⃣ Running Containers Individually

### Frontend

```bash
docker run -p 3000:3000 hireflow-frontend
```

### Backend

```bash
docker run -p 5000:5000 hireflow-backend
```

### Purpose

* Starts application containers
* Maps container ports to local machine ports

---

# 8️⃣ Docker Compose Setup

### docker-compose.yml

```yaml
version: '3'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"

  backend:
    build: ./backend
    ports:
      - "5000:5000"

  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

### Why Docker Compose?

Instead of manually starting multiple containers, Docker Compose manages all services together.

It:

* Creates containers
* Builds images
* Creates Docker network
* Starts all services together
* Simplifies management

---

# 9️⃣ Running Complete Application

### Command

```bash
docker compose up
```

### What Happens Internally?

✅ Docker reads docker-compose.yml

✅ Creates frontend container

✅ Creates backend container

✅ Pulls MongoDB image

✅ Creates internal network

✅ Connects all services together

---

# 🔟 Git & GitHub Workflow

## Initialize Git

```bash
git init
```

## Add Files

```bash
git add .
```

## Commit Changes

```bash
git commit -m "Dockerized full stack application"
```

## Connect GitHub Repository

```bash
git remote add origin <repository-url>
```

## Push Code to GitHub

```bash
git push -u origin main
```

### Purpose

* Tracks project versions
* Stores project online
* Helps recruiters review work
* Enables collaboration

---

# 🐳 Docker Commands Used

| Command             | Description              |
| ------------------- | ------------------------ |
| docker build        | Builds Docker image      |
| docker run          | Runs container           |
| docker ps           | Shows running containers |
| docker images       | Lists Docker images      |
| docker compose up   | Starts all services      |
| docker compose down | Stops all services       |

---

# 🚧 Challenges Faced During Development

During the project, several practical DevOps issues were solved:

* Docker port conflicts
* MongoDB container errors
* Wrong working directory issues
* Git push errors
* Docker networking understanding
* Container orchestration debugging

These problems improved troubleshooting and debugging skills.

---

# 📚 Learning Outcomes

This project helped in understanding:

✅ Docker fundamentals

✅ Container lifecycle

✅ Full stack application structure

✅ Multi-container applications

✅ Docker networking

✅ Docker Compose orchestration

✅ Git & GitHub workflow

✅ DevOps project deployment basics

---

# 🚀 Future Improvements

Planned upgrades:

* Kubernetes Deployment
* CI/CD Pipeline using GitHub Actions
* Nginx Reverse Proxy
* AWS/Azure Deployment
* Monitoring using Prometheus & Grafana
* Automated Testing

---

# ▶️ How to Run This Project

## Clone Repository

```bash
git clone https://github.com/krishnavamshi1204/hireflow-ai.git
```

## Move into Project Directory

```bash
cd hireflow-ai
```

## Start Containers

```bash
docker compose up
```

## Access Application

### Frontend

```text
http://localhost:3000
```

### Backend

```text
http://localhost:5000
```

---

# 📸 Project Screenshots

Add screenshots here:

* Docker Compose Running
* React Frontend Running
* Docker Containers
* GitHub Repository

---

# 👨‍💻 Author

## Krishna Vamshi

Aspiring DevOps Engineer passionate about:

* Docker
* Kubernetes
* CI/CD
* Cloud Computing
* Automation
* DevOps Engineering

### GitHub

[https://github.com/krishnavamshi1204](https://github.com/krishnavamshi1204)

### LinkedIn

Add your LinkedIn profile link here.

---

# ⭐ Final Note

This project was built as part of my DevOps learning journey to understand how real-world applications are containerized and managed using Docker.

If you found this project useful, feel free to ⭐ the repository.
