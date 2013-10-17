echo "start_ts,end_ts,duration,program" > activity_log.csv; for f in ~/data/misc/activity_log/2013*.log; do sed -n "1~3p" $f | python activity.py >> activity_log.csv; done

sed -n "1~3p" ~/data/misc/activity_log/2013*.log
