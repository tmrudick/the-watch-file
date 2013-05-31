watch: install-sublime

install-sublime:
	rsync -av --exclude '.DS_Store' ./sublimetext2/WatchFile ~/Library/Application\ Support/Sublime\ Text\ 2/Packages