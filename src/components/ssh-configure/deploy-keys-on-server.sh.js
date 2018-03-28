export default function ({ local, remote }) {
  return `REMOTE_IP=${remote.host}
REMOTE_USER_NAME=${remote.user}

KEY_STORE_DIR=${local.keyStoreDir}
USER_KEY_NAME=ssh-${remote.host}-${remote.user}
${remote.root ? `ROOT_KEY_NAME=ssh-${remote.host}-root\n` : ''}\

rsync -hP "$KEY_STORE_DIR/$USER_KEY_NAME.pub" \\
  "root@$REMOTE_IP":/root/.ssh/authorized_keys
${remote.root ? '\n' : ''}\
${remote.root ? 'rsync -hP "$KEY_STORE_DIR/$ROOT_KEY_NAME.pub" \\\n  "root@$REMOTE_IP":/home/$REMOTE_USER_NAME/.ssh/authorized_keys\n' : ''}\
`
}
