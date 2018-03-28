export const name = 'Docker Machine'
export const version = '0.13.0'
export const selected = false

export const afterInstall = `
# Install Docker Compose
MACHINE_VERSION=${version}
sudo curl -L https://github.com/docker/machine/releases/download/v"$MACHINE_VERSION"/docker-machine-"$(uname -s)"-"$(uname -m)" -o /usr/local/bin/docker-machine
sudo chmod +x /usr/local/bin/docker-machine
`
