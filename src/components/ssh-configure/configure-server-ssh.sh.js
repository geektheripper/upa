export default function ({ remote, forbidPasswordLogin }) {
  if (remote.usingRoot) {
    return `ssh root@${remote.ip} <<'ENDSSH'

REMOTE_USER=${remote.user}

chown -R "$REMOTE_USER:$REMOTE_USER" "/home/$REMOTE_USER/.ssh"

chmod 700 /home/$REMOTE_USER/.ssh/authorized_keys
${remote ? 'chmod 700 /root/.ssh/authorized_keys\n' : ''}\

echo "AuthorizedKeysFile  %h/.ssh/authorized_keys">>/etc/ssh/sshd_config
${forbidPasswordLogin ? 'echo "PasswordAuthentication no">>/etc/ssh/sshd_config\n' : ''}\

service sshd restart

ENDSSH`
  }
  return `
ssh ${remote.user}@${remote.ip}

========================================
 Run Following Command On Remote Server
========================================

REMOTE_USER=${remote.user}

sudo chown -R "$REMOTE_USER:$REMOTE_USER" "/home/$REMOTE_USER/.ssh"
sudo chmod 700 /home/$REMOTE_USER/.ssh/authorized_keys
${remote.root ? 'sudo chmod 700 /root/.ssh/authorized_keys\n' : ''}\

sudo echo "AuthorizedKeysFile  %h/.ssh/authorized_keys">>/etc/ssh/sshd_config
${forbidPasswordLogin ? 'sudo echo "PasswordAuthentication no">>/etc/ssh/sshd_config\n' : ''}\

sudo service sshd restart
`
}
