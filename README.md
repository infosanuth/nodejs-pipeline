# CI/CD Pipeline with Docker and Jenkins

This project implements an automated CI/CD pipeline using Docker and Jenkins. It automates the entire process of building, testing, and deploying the application for consistent delivery.

## Overview

The CI/CD pipeline involves the following steps:

1. User pushes code to the GitHub repository.
2. GitHub triggers a build in Jenkins.
3. Jenkins pulls the latest code from GitHub.
4. Jenkins runs tests and builds a Docker image.
5. Jenkins pushes the built Docker image to Docker Hub.