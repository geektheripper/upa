export const name = 'Inziu Iosevka Font'
export const version = '1.13.3'
export const selected = false

export const afterInstall = `
IOSEVKA_VER=${version}
IOSEVKA_URL="https://github.com/be5invis/Iosevka/releases/download/v$IOSEVKA_VER/02-iosevka-term-$IOSEVKA_VER.zip"

# Download: ${name}
wget -O /tmp/iosevka.zip "$IOSEVKA_URL"
mkdir -p /tmp/iosevka
unzip /tmp/iosevka.zip -d /tmp/iosevka

# Install: ${name}
sudo mkdir -p /usr/share/fonts/InziuIosevka
sudo mv /tmp/iosevka/ttf/* /usr/share/fonts/InziuIosevka
sudo chmod 755 /usr/share/fonts/InziuIosevka
sudo chmod 644 /usr/share/fonts/InziuIosevka/*
sudo fc-cache -fv
`
