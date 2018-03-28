__SUDO__apt-get update
__SUDO__apt-get upgrade -y
__SUDO__apt-get dist-upgrade -y

__SUDO__apt-get install -y \
  axel curl wget \
  zip unzip p7zip \
  tmux screen \
  vim git \
  gcc g++ build-essential cmake \
  apt-transport-https ca-certificates software-properties-common
