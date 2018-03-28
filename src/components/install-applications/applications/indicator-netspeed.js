export const name = 'Indicator Netspeed'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
sudo add-apt-repository -y ppa:fixnix/netspeed
`

export const aptInstall = 'indicator-netspeed-unity'
