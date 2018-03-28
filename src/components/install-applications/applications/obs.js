export const name = 'OBS'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
add-apt-repository -y ppa:obsproject/obs-studio
`

export const aptInstall = 'ffmpeg obs-studio'
