#!/bin/sh
# computer activity data collection for http://jehiah.cz/one-two/
# initially by Jehiah Czebotar. Modified by Joseph Adams

FILE="data/misc/activity_log/`date +%Y%m%d`.log"
FRONT_APP="data/misc/cron/frontApp/frontApp.applescript"

function log_activity()
{
    local UTC=`date "+%s,%Z"`
    local IDLE=$((`/usr/sbin/ioreg -c IOHIDSystem | sed -e '/HIDIdleTime/!{ d' -e 't' -e '}' -e 's/.* = //g' -e 'q'` / 1000000000 ))
    local ACTIVE_PROGRAM=$(/usr/bin/osascript $FRONT_APP)

    echo "$UTC,$IDLE,$ACTIVE_PROGRAM" >> $FILE
}

log_activity
sleep 30
log_activity
