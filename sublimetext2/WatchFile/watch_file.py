# coding: utf8
import sublime_plugin
import os
import sys
import time

print "Loading WatchFile"

def debug(message):
    print >> sys.stderr, "WatchFile:", message

class CommandOnSave(sublime_plugin.EventListener):
    def on_post_save(self, view):
        print
        test_dir = view.file_name()
        watch_file = None
        while test_dir != '/':
            test_file = os.path.join(test_dir, ".watchfile")
            if os.path.exists(test_file):
                watch_file = test_file
                break
            test_dir = os.path.dirname(test_dir)
        if not watch_file:
            debug("No .watchfile file found in parent dirs")
            return
        debug("Found %s" % watch_file)
        local_dir = os.path.dirname(watch_file)
        with open(watch_file, 'w') as f:
            f.write(str(time.time()))
        print
