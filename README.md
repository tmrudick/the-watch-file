The Watch File
==============

Sublime Text 2 plugin and grunt script to help in keeping source code sync'd across servers. Extremely based on [Nice Setup](https://github.com/freider/nice-setup).

Installation
--------------

    git clone https://github.com/tmrudick/the-watch-file.git
    cd the-watch-file
    make watch
    sudo npm install -g grunt-cli
    npm install

Running
--------------

* Create an empty file called .watchfile in the root of your Sublime Text project
* Update Gruntfile rsync config object and add your server and project paths
* Run grunt/sync project_name
* Save stuff in Sublime Text and it will be synced