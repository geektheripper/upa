export default function ({ login, homeDir, groups }) {
  const replacedGroups = groups.replace(/ |,|\|/g, ',')
  return `LOGIN=${login}
HOME_DIR=${homeDir}
${replacedGroups ? `GROUPS=${replacedGroups}\n` : ''}\

echo "- Create Home Directory: $HOME_DIR ..."
mkdir -p "$HOME_DIR"

echo "- Create User: $LOGIN ..."
useradd \\
  --home-dir "$HOME_DIR" \\
${replacedGroups ? '  --groups "$GROUPS" \\\n' : ''}\
  "$LOGIN"

chown "$LOGIN:$LOGIN" "$HOME_DIR"

echo "- Setup Passwd for $LOGIN: ..."
passwd $LOGIN`
}
