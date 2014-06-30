# Log computer activity to daily log file
# by Joseph Adams
# MIT Licensed

CHROME_STATUS="data/misc/cron/chrome_status/chrome_status.applescript"
RUNNING_PROGRAMS="data/misc/cron/running_programs/running_programs.applescript"
FRONT_APP="data/misc/cron/front_app/front_app.applescript"

LOG_FILE="data/misc/activity_log/`date +%Y%m%d`.log"

function log_activity()
{
    local UTC=`date "+%s,%Z"`
    local IDLE=$((`/usr/sbin/ioreg -c IOHIDSystem | sed -e '/HIDIdleTime/!{ d' -e 't' -e '}' -e 's/.* = //g' -e 'q'` / 1000000000 ))

    local BATTERY_CHARGE=$(/usr/sbin/ioreg -n AppleSmartBattery -r | awk '$1~/Capacity/{c[$1]=$3} END{OFMT="%.1f"; max=c["\"MaxCapacity\""]; print (max>0? 100*c["\"CurrentCapacity\""]/max: "?")}')

    local ACTIVE_PROGRAM=$(/usr/bin/osascript $FRONT_APP)

    read CHROME_STATS ACTIVE_URL <<< `/usr/bin/osascript $CHROME_STATUS`

    local PROGRAMS=$(/usr/bin/osascript $RUNNING_PROGRAMS)

    echo "$UTC,$IDLE,$ACTIVE_PROGRAM,$CHROME_STATS,$BATTERY_CHARGE\n$PROGRAMS\n$ACTIVE_URL" >> $LOG_FILE

    #echo "`vnstat --dumpdb | grep "^d;0" | tr ";" "," | cut -d, -f 3-`" >> $LOG_FILE
}

log_activity
sleep 15
log_activity
sleep 15
log_activity
sleep 15
log_activity
