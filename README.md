# Node.js CI/CD App 🚀

This project demonstrates a basic Node.js app deployed using Docker and GitHub Actions.

## Features
- Express server with `/` and `/status` routes
- Jest test on `/status`
- Docker containerization
- CI/CD via GitHub Actions

## Run Locally
```bash
npm install
npm start
```

## Run Tests
```bash
npm test
```

## Build Docker Image
```bash
docker build -t nodejs-ci-cd-app .
docker run -p 3000:3000 nodejs-ci-cd-app
```

## CI/CD Workflow
- Trigger: Push to `main`
- Actions: Install → Test → Build → Push Docker image

## Author
[Your Name](https://github.com/yourusername)
