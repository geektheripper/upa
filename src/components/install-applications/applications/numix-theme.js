export const name = 'Numix Theme'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
sudo add-apt-repository -y ppa:numix/ppa
`

export const aptInstall = 'numix-gtk-theme'
