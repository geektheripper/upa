export const name = 'Steam Metro Skin'
export const version = '4.2.4'
export const selected = false
export const geektr = true

export const aptInstall = 'python-apt libgl1-mesa-dri:i386 libgl1-mesa-glx:i386 libc6:i386'

export const afterInstall = `
SKIN_VERSION=${version}

SKIN_URL="http://www.metroforsteam.com/downloads/$SKIN_VERSION.zip"

wget -O /tmp/steam-metro-skin.zip "$SKIN_URL"

su "$USER_NAME" -c \
  "unzip /tmp/steam-metro-skin.zip -d /home/$USER_NAME/.local/share/Steam/skins/"

su "$USER_NAME" -c \
  "cp -f $STATIC_PREFIX/steam/miku.styles /home/$USER_NAME/.local/share/Steam/skins/Metro\\ $SKIN_VERSION\\/custom.styles"
`
