export const name = 'Google Chrome Stable'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
# Add Source: Google Chrome Stable
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
`

export const aptInstall = 'google-chrome-stable'
