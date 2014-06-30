LOG_FILE="data/misc/activity_log/net_`date +%Y%m%d`.log"
echo "`date "+%s,%Z"`,`/usr/local/bin/vnstat --dumpdb | grep "^d;0" | tr ";" "," | cut -d, -f 4-`" >> $LOG_FILE