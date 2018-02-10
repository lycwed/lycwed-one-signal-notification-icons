#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var rootdir = process.argv[2];
var filestocopy = [
    {
        "resources/ic_notification/drawable-hdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png"
    },
    {
        "resources/ic_notification/drawable-mdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png"
    },
    {
        "resources/ic_notification/drawable-xhdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png"
    },
    {
        "resources/ic_notification/drawable-xxhdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
    },
    {
        "resources/ic_notification/drawable-xxxhdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
    },
    {
        "resources/ic_notification/drawable-xxxhdpi/ic_stat_icon.png":
        "platforms/android/res/drawable-xxxhdpi/ic_onesignal_large_icon_default.png"
    }
];

if (fs.existsSync('./platforms/android/')) {
    for (var i = 0, l = filestocopy.length; i < l; i++) {
        var file = filestocopy[i];

        for (var key in file) {
            var val = file[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile)) {
                if (!fs.existsSync(destdir)) {
                    fs.mkdirSync(destdir);
                }
                console.log("copying " + key + " to " + val);
                fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
            }
        }
    }
}