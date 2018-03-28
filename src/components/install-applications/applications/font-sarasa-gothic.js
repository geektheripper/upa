export const name = 'Sarasa Gothic Font'
export const version = '0.4.0'
export const selected = false

export const afterInstall = `
SARASA_VERSION=${version}
SARASA_URL="https://github.com/be5invis/Iosevka/releases/download/v$IOSEVKA_VER/02-iosevka-term-$IOSEVKA_VER.zip"

# Download: ${name}
wget -o /tmp/sarasa.7z "$SARASA_URL"
mkdir -p /tmp/iosevka
7z x -o /tmp/sarasa /tmp/sarasa.7z

# Install: ${name}
sudo mkdir -p /usr/share/fonts/Sarasa-Gothic
sudo mv /tmp/sarasa/* /usr/share/fonts/Sarasa-Gothic
sudo chmod 755 /usr/share/fonts/Sarasa-Gothic
sudo chmod 644 /usr/share/fonts/Sarasa-Gothic/*
sudo fc-cache -fv
`
