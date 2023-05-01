pipeline {
   agent any

   environment {
        AWS_DEFAULT_REGION = "eu-west-2"
        DOCKER_REPO = "unimart-dkr-repo"
        DOCKER_TAG = "latest"
   }
    stages {
        stage('Checkout UI Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/my-username/my-ui-repo.git'
            }
        }
        stage('Checkout Cypress Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/my-username/my-cypress-repo.git'
            }
        }
        stage('Build and Test UI') {
            steps {
                sh 'cd my-ui-repo && npm install && npm run build && npm run cypress:run'
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'aws-ecr-creds', variable: 'AWS_ECR_CREDS')]) {
                    sh 'aws ecr get-login-password | docker login --username AWS --password-stdin $DOCKER_REPO'
                    sh 'cd my-ui-repo && docker build -t $DOCKER_REPO:$DOCKER_TAG .'
                    sh 'docker push $DOCKER_REPO:$DOCKER_TAG'
                }
            }
        }
       stage('Dependencies') {
           steps {
              nodejs('nodejs'){
               sh 'npm i'
              }
           }
       }
       stage('e2e Tests') {
           steps {
               nodejs('nodejs'){
                  sh 'npm run cy:runJenkins'
               }
           }
       }
   }
    post{
        always {
        script {
            allure jdk: '', properties: [[key: 'allure.results.directory', value: 'target/allure-results']], results: [[path: 'target/allure-results'],[path:'**/target/alluer-results']]
            }
        }
        
        cleanup {
            dir("${workspace}@tmp") {
            deleteDir()
            }
            dir("${workspace}@script") {
            deleteDir()
            }
            dir("${workspace}@libs") {
            deleteDir()
            }
            cleanWs()
        }
    }
}
