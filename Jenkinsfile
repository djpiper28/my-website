pipeline {
    agent { label 'master' }

    stages {
        stage('Build') {
          steps {
            sh 'docker build -t my-website .'
            sh 'docker tag my-website localhost:5000/my-website'
          }
        }

        stage('Push') {
          steps {
            sh 'docker push localhost:5000/my-website'
          }
        }

        stage('Package') {
          steps {
            sh '/var/lib/jenkins/go/bin/helmVersioner my-website/Chart.yaml'
            sh 'helm install my-website my-website || true'
            sh 'helm upgrade my-website my-website'
          }
        }
    }
}
