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
                    git branch: 'main', url: 'https://github.com/infosanuth/nodejs-pipeline'
                }
            }
        }

        stage('Build') {
            steps {
                dir('nodeapp') {
                sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('nodeapp') {
                sh 'npm test'
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", 
                                                  usernameVariable: 'DOCKER_USER', 
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
