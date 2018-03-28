__SUDO__apt-get purge -y libreoffice* unity-webapps-common thunderbird totem && \
  rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot && \
  gnome-mines cheese gnome-sudoku transmission-common gnome-orca && \
  webbrowser-app landscape-client-ui-install deja-dup firefox

__SUDO__apt-get autoremove -y

__SUDO__apt-get install -y unity-tweak-tool chromium-browser psensor
