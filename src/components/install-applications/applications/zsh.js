export const name = 'ZSH'
export const version = 'latest'
export const selected = false

export const aptInstall = 'zsh'
export const afterInstall = `
su "$USER_NAME" -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
`
