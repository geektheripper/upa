export default function ({ local, remote }) {
  return `REMOTE_IP=${remote.host}
REMOTE_USER=${remote.user}
OPERATE_USER=${remote.usingRoot ? 'root' : remote.user}

KEY_STORE_DIR=${local.keyStoreDir}
USER_KEY_NAME=ssh-${remote.host}-${remote.user}
${remote.root ? `ROOT_KEY_NAME=ssh-${remote.host}-root\n` : ''}\

ssh $OPERATE_USER@${remote.ip} <<'ENDSSH'
${remote.usingRoot ? `${remote.root ? 'mkdir -p /root/.ssh\n' : ''}\
mkdir -p /home/${remote.user}/.ssh
chown -R "${remote.user}:${remote.user}" "/home/${remote.user}/.ssh"` : `mkdir -p /home/${remote.user}/.ssh`
}
ENDSSH

rsync -hP "$KEY_STORE_DIR/$USER_KEY_NAME.pub" \\
  "$OPERATE_USER@$REMOTE_IP":/home/$REMOTE_USER/.ssh/authorized_keys

${remote.root ? 'rsync -hP "$KEY_STORE_DIR/$ROOT_KEY_NAME.pub" \\\n' : ''}\
${remote.root ? '  "$OPERATE_USER@$REMOTE_IP":/root/.ssh/authorized_keys\n' : ''}\
`
}
