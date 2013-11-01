echo "start_ts,end_ts,duration,program" > data/activity_log.csv; for f in ~/data/misc/activity_log/2013*.log; do sed -n "1~3p" $f | python collectors/activity.py >> data/activity_log.csv; done

echo "date,mib" > data/net_usage_daily.csv; tail -qn 1 ~/data/misc/activity_log/net_2013* | cut -d, -f1,3 >> data/net_usage_daily.csv

echo "count,n" > data/tab_distr.csv; cat ~/data/misc/activity_log/2013* | sed -n "1~3p" | cut -d, -f7 | sed /^$/d | sort | uniq -c | sort | sed "s/^ *//g" | tr " " "," >> data/tab_distr.csv

echo "date" > data/search_distr.csv; cat ~/data/misc/activity_log/2013* | sed 'N;N;s/^\(.*\)\n.*\n\(.*\)$/\1,\2/' | cut -d, -f1,8 | grep www.google.com/search | cut -d, -f1 >> data/search_distr.csv;

#echo "date" > data/sites_distr.csv; cat ~/data/misc/activity_log/2013* | sed 'N;N;s/^\(.*\)\n.*\n\(.*\)$/\1,\2/' | cut -d, -f1,8 | tr "," " " | uniq -f1 | cut -d" " -f1 >> data/sites_distr.csv