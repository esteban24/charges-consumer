pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout from repo'
                checkout scm
            }
        }
        stage('Install React App') {
            steps {
                echo 'Building server'
                sh 'npm install'
            }
        }
        stage('Test UT') {
            steps {
                echo 'Unit Testing React components'
                sh 'CI=true npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Generating production optimized files'
                sh 'npm run build'

                echo 'Installing production server and starting it'
                sh 'cd server && npm install && STATIC_CONTENT=../build npm start'

                // workdir('server') {
                //     sh 'npm install'

                //     echo 'Starting server'
                //     sh 'STATIC_CONTENT=../build npm start'
                // }
            }
        }
        // stage('Docker build') {
        //     steps {
        //         echo 'Building docker image'
        //         sh 'docker build -t charges-consumer-pipeline:latest .'
        //     }
        // }
        // stage('Docker run') {
        //     steps {
        //         echo 'Running docker image'
        //         sh 'docker run -p 8080:80 --name charges-consumer-pipeline charges-consumer-pipeline:latest'
        //     }
        // }
    }
}