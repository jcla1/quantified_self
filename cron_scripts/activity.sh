# Log computer activity to daily log file
# by Joseph Adams
# MIT Licensed

CHROME_STATUS="data/misc/cron/chrome_status/chrome_status.applescript"
RUNNING_PROGRAMS="data/misc/cron/running_programs/running_programs.applescript"
FRONT_APP="data/misc/cron/frontApp/frontApp.applescript"

LOG_FILE="data/misc/activity_log/`date +%Y%m%d`.log"

function log_activity()
{
    local UTC=`date "+%s,%Z"`
    local IDLE=$((`/usr/sbin/ioreg -c IOHIDSystem | sed -e '/HIDIdleTime/!{ d' -e 't' -e '}' -e 's/.* = //g' -e 'q'` / 1000000000 ))
    local ACTIVE_PROGRAM=$(/usr/bin/osascript $FRONT_APP)

    read CHROME_STATS ACTIVE_URL <<< `/usr/bin/osascript $CHROME_STATUS`

    local PROGRAMS=$(/usr/bin/osascript $RUNNING_PROGRAMS)

    echo "$UTC,$IDLE,$ACTIVE_PROGRAM,$CHROME_STATS\n$PROGRAMS\n$ACTIVE_URL" >> $LOG_FILE

    #echo "`vnstat --dumpdb | grep "^d;0" | tr ";" "," | cut -d, -f 3-`" >> $LOG_FILE
}

log_activity
sleep 15
log_activity
sleep 15
log_activity
sleep 15
log_activity
