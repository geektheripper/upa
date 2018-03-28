export const name = 'GeekTR: ZSH'
export const version = 'latest'
export const selected = false
export const geektr = true

export const afterInstall = `
# Config: ${name}
wget -o "/home/$USER_HOME/.zshrc" "$STATIC_PREFIX/config/zsh/.zshrc"
`
