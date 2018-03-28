export default function ({ remote, forbidPasswordLogin }) {
  return `ssh root@${remote.ip} <<'ENDSSH'

REMOTE_USER_NAME=${remote.user}

chown -R "$REMOTE_USER_NAME:$REMOTE_USER_NAME" "/home/$REMOTE_USER_NAME/.ssh"

chmod 700 /home/$REMOTE_USER_NAME/.ssh/authorized_keys
${remote ? 'chmod 700 /root/.ssh/authorized_keys\n' : ''}\

echo "AuthorizedKeysFile  %h/.ssh/authorized_keys">>/etc/ssh/sshd_config
${forbidPasswordLogin ? 'echo "PasswordAuthentication no">>/etc/ssh/sshd_config\n' : ''}\

service sshd restart

ENDSSH`
}
