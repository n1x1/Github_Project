pipeline {
    agent any 
    stages {
         stage("build image") {
             withCredentials([usernamePassword(
                 credentialsId: 'docker-hub-repo',
                 usernameVariable: "USER",
                 passwordVariable: "PASS"

            )]) {
                sh "docker build -t n1x13/n1x1-twn:jenkins-project-${env.BUILD_NUMBER} ."
                sh "echo $PASS | dockekr login -u $USER --password-stdin"
                sh "docker push n1x13/n1x1-twn:jenkins-project-${env.BUILD_NUMBER}"
                }
         }
    }
}
