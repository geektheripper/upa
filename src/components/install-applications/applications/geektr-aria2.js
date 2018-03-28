export const name = 'GeekTR: Aria 2'
export const version = '1.33.1'
export const selected = false
export const geektr = true

export const beforeUpdate = `
ARIA2_VERSION=${version}
ARIA2_SOURCE="https://github.com/aria2/aria2/releases/download/release-$ARIA2_VERSION/aria2-$ARIA2_VERSION.tar.gz"
`

export const aptInstall = 'libcurl4-openssl-dev libevent-dev ca-certificates libssl-dev pkg-config build-essential intltool libgcrypt-dev libssl-dev libxml2-dev'

export const afterInstall = `
# Download aria2 source code
curl -L "$ARIA2_SOURCE" -o /tmp/aria2.tar.gz
tar -xzf /tmp/aria2.tar.gz -C /tmp

# Modifiy Source File
cd /tmp/aria2-$ARIA2_VERSION || exit

MAX_CONNECTION_PER_SERVER=64
PREF_SPLIT=8

L443="                                              \\"1\\", 1, $MAX_CONNECTION_PER_SERVER, 'x'));"
L974="        new NumberOptionHandler(PREF_SPLIT, TEXT_SPLIT, \\"$PREF_SPLIT\\", 1, -1, 's'));"

sed -i '443s/.*/'"$L443"'/' .src/OptionHandlerFactory.cc
sed -i '974s/.*/'"$L974"'/' .src/OptionHandlerFactory.cc

# Build
./configure
make

# Config
cp ./src/aria2c /usr/local/bin

sudo mkdir -p /etc/aria2
sudo touch /etc/aria2/aria2.session
sudo curl -L "$STATIC_PREFIX/aria2/aria2.conf" -o /etc/aria2/aria2.conf

sudo curl -L "$STATIC_PREFIX/aria2/init" -o /etc/init.d/aria2c
chmod 755 /etc/init.d/aria2c

sudo update-rc.d aria2c defaults
sudo service aria2c start
`
