export const name = 'Docker CE'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
# Add Source: Docker CE
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository -y \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
`

export const aptInstall = 'docker-ce'

export const afterInstall = `
# Add user to docker group
sudo usermod -a -G docker "$USER_NAME"
`
