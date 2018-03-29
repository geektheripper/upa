export default function ({ local, remote }) {
  return `REMOTE_USER=${remote.user}

KEY_STORE_DIR=${local.keyStoreDir}
USER_KEY_NAME=ssh-${remote.host}-${remote.user}
${remote.root ? `ROOT_KEY_NAME=ssh-${remote.host}-root\n` : ''}\

mkdir -p "KEY_STORE_DIR"

echo "generate the key for $REMOTE_USER@$HOST_NAME: "
ssh-keygen -f "$KEY_STORE_DIR/$USER_KEY_NAME"
${remote.root ? '\n' : ''}\
${remote.root ? 'echo "generate the key for root@$HOST_NAME: "\n' : ''}\
${remote.root ? 'echo "ssh-keygen -f "$KEY_STORE_DIR/$ROOT_KEY_NAME"\n' : ''}\
`
}
