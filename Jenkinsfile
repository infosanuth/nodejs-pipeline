pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'dockerhub-credentials'
        IMAGE_NAME = 'sanuth79/nodejs-pipeline'
        IMAGE_TAG = "${BUILD_NUMBER}"          
    }

    stages {

        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'master', url: 'https://github.com/infosanuth/nodejs-pipeline'
                }
            }
        }

        stage('Build') {
            steps {
                dir('nodeapp') {
                bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('nodeapp') {
                bat 'npm test'
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", 
                                                  usernameVariable: 'DOCKER_USER', 
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    bat "docker login -u %DOCKER_USER% -p %DOCKER_PASS%"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                bat "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

    }

    post {
        always {
            bat 'docker logout'
        }
    }
}
