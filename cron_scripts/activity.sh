# Log computer activity to daily log file
# by Joseph Adams
# MIT Licensed

CHROME_STATUS="data/misc/cron/chrome_status/chrome_status.applescript"
RUNNING_PROGRAMS="data/misc/cron/running_programs/running_programs.applescript"
FRONT_APP="data/misc/cron/front_app/front_app.applescript"

LOG_BASE="data/misc/activity_log/"
LOG_END="`date +%Y%m%d`.log"

ACTIVITY_LOG=$LOG_BASE"activity_"$LOG_END
PROGRAMS_LOG=$LOG_BASE"programs_"$LOG_END
URLS_LOG=$LOG_BASE"urls_"$LOG_END

function log_activity()
{
    local UTC=`date "+%s,%Z"`
    local IDLE=$((`/usr/sbin/ioreg -c IOHIDSystem | sed -e '/HIDIdleTime/!{ d' -e 't' -e '}' -e 's/.* = //g' -e 'q'` / 1000000000 ))

    local BATTERY_CHARGE=$(/usr/sbin/ioreg -n AppleSmartBattery -r | awk '$1~/Capacity/{c[$1]=$3} END{OFMT="%.1f"; max=c["\"MaxCapacity\""]; print (max>0? 100*c["\"CurrentCapacity\""]/max: "?")}')

    local ACTIVE_PROGRAM=$(/usr/bin/osascript $FRONT_APP)

    read CHROME_STATS ACTIVE_URL <<< `/usr/bin/osascript $CHROME_STATUS`

    local PROGRAMS=$(/usr/bin/osascript $RUNNING_PROGRAMS)

    echo "$UTC,$IDLE,$ACTIVE_PROGRAM,$CHROME_STATS,$BATTERY_CHARGE" >> $ACTIVITY_LOG
    echo "$UTC,$PROGRAMS" >> $PROGRAMS_LOG
    echo "$UTC,$ACTIVE_URL" >> $URLS_LOG

    #echo "`vnstat --dumpdb | grep "^d;0" | tr ";" "," | cut -d, -f 3-`" >> $LOG_FILE
}

log_activity
sleep 15
log_activity
sleep 15
log_activity
sleep 15
log_activity
