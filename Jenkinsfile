pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
              sh 'npm i'
            }
        }

        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }

        stage('Deploy') {
          steps {
            sh 'rm -r /home/static/my-website/* || true'
            sh 'cp -r ./dist/* /home/static/my-website/'
            sh 'cp -r ./cdn/cdn /home/static/my-website/'
            sh 'sudo /home/scripts/restart_nginx'
          }
        }
    }
}
