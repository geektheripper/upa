export const name = 'Docker Compose'
export const version = '1.20.1'
export const selected = false

export const afterInstall = `
# Install Docker Compose
COMPOSE_VERSION=${version}
sudo curl -L https://github.com/docker/compose/releases/download/"$COMPOSE_VERSION"/docker-compose-"$(uname -s)"-"$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
`
