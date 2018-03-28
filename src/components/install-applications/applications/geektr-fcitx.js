export const name = 'GeekTR: Fcitx Dark Theme'
export const version = 'latest'
export const selected = false
export const geektr = true

export const afterInstall = `
# Download 'geek-dark' files
sudo curl -L "$STATIC_PREFIX/fcitx/geek-dark.tar.gz" -o /tmp/geek-dark.tar.gz
sudo tar -xzf /tmp/geek-dark.tar.gz -C /usr/share/fcitx/skin/

# Set Permission
sudo chown -R root:root /usr/share/fcitx/skin/geek-dark
sudo chmod 755 /usr/share/fcitx/skin/geek-dark
sudo chmod 644 /usr/share/fcitx/skin/geek-dark/*
`
