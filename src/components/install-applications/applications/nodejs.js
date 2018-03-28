export const name = 'NodeJS & Yarn'
export const version = '9'
export const selected = false

export const beforeUpdate = `
# Add Source: Yarn
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
`

export const aptInstall = 'yarn'

export const afterInstall = `
# Install: NodeJS
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential

# Config: NodeJS
mkdir -p "$USER_NAME"/.npm-global/{lib/node_modules,bin,shell}

npm config set prefix '~/.npm-global'

echo >>"$USER_NAME/.profile"
echo 'export PATH=~/.npm-global/bin:$PATH'>>"$USER_NAME/.profile"

source "$USER_NAME/.profile"

# Install Yarn
sudo apt-get install -y yarn
`
