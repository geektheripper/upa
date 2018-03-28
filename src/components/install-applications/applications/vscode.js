export const name = 'Visual Studio Code'
export const version = 'latest'
export const selected = false

export const beforeUpdate = `
# Add Source: Visual Studio Code
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /tmp/microsoft.gpg
mv /tmp/microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
`

export const aptInstall = 'code'
