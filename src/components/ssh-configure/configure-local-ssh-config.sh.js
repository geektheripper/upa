import fecha from 'fecha'

export default function ({ local, remote, localSSHConfigPlainText }) {
  if (localSSHConfigPlainText) {
    return `# ${remote.host}
# ${fecha.format(new Date(), 'YYYY-MM-DD hh:mm:ss')}

Host ${remote.host}
User ${remote.user}
Hostname ${remote.host}
IdentityFile ${local.keyStoreDir}/ssh-${remote.host}-${remote.user}
${remote.root ? '\n' : ''}\
${remote.root ? `Host ${remote.host}\n` : ''}\
${remote.root ? 'User root\n' : ''}\
${remote.root ? `Hostname ${remote.host}\n` : ''}\
${remote.root ? `IdentityFile ${local.keyStoreDir}/ssh-${remote.host}-root\n` : ''}\
`
  }
  return `SSH_CONFIG_FILE=${local.sshConfig}
HOST_NAME=${remote.host}
REMOTE_USER=${remote.user}

KEY_STORE_DIR=${local.keyStoreDir}
USER_KEY_NAME=ssh-${remote.host}-${remote.user}
${remote.root ? `ROOT_KEY_NAME=ssh-${remote.host}-root\n` : ''}\

cat <<EOT >> $SSH_CONFIG_FILE

# $HOST_NAME
# $(date '+%Y-%m-%d %H:%M:%S')

Host $HOST_NAME
User $REMOTE_USER
Hostname $HOST_NAME
IdentityFile $KEY_STORE_DIR/$USER_KEY_NAME

${remote.root ? 'Host $HOST_NAME\n' : ''}\
${remote.root ? 'User root\n' : ''}\
${remote.root ? 'Hostname $HOST_NAME\n' : ''}\
${remote.root ? 'IdentityFile $KEY_STORE_DIR/$ROOT_KEY_NAME\n' : ''}\

EOT`
}
