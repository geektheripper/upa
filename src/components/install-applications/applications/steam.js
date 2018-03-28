export const name = 'Steam'
export const version = 'latest'
export const selected = false

export const aptInstall = 'python-apt libgl1-mesa-dri:i386 libgl1-mesa-glx:i386 libc6:i386'

export const afterInstall = `
STEAM_URL="http://repo.steampowered.com/steam/archive/precise/steam_latest.deb"

wget -o /tmp/steam.deb "$STEAM_URL"

dpkg -i /tmp/steam.deb
`
