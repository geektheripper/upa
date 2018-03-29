export const name = 'GeekTR: ZSH'
export const version = 'latest'
export const selected = false
export const geektr = true

export const afterInstall = `
# Config: ${name}
wget -O "/home/$USER_NAME/.zshrc" "$STATIC_PREFIX/zsh/geektr.zshrc"
`
