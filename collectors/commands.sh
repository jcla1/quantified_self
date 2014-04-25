LOGS=~/data/misc/activity_log/2014*
NET_LOGS=~/data/misc/activity_log/net_2014*
NUM_DAYS=114

echo "start_ts,end_ts,duration,program" > data/activity_log.csv;
echo "timestart,occ" > data/computer_probability.csv;
sed -n "1~3p" $LOGS | python collectors/activity.py | tee -a data/activity_log.csv | python collectors/computer_probability.py >> data/computer_probability.csv

echo "date,mib" > data/net_usage_daily.csv; tail -qn 1 $NET_LOGS | cut -d, -f1,3 >> data/net_usage_daily.csv

echo "count,n" > data/tab_distr.csv; cat $LOGS | sed -n "1~3p" | cut -d, -f7 | sed /^$/d | sort | uniq -c | sort | sed "s/^ *//g" | tr " " "," >> data/tab_distr.csv

echo "date" > data/search_distr.csv; cat $LOGS | sed 'N;N;s/^\(.*\)\n.*\n\(.*\)$/\1,\2/' | cut -d, -f1,8 | grep www.google.com/search | cut -d, -f1 >> data/search_distr.csv;

echo "title,value,subtext,special,color" > data/stats.csv;
sed -n "3~3p" $LOGS | python collectors/url_stats.py >> data/stats.csv;
tail -n +2 data/net_usage_daily.csv | awk -F"," -v "NUM_DAYS=$NUM_DAYS" -v OFS="," '{ sum+=$2 } END {u=sum/1024; printf("network usage,%dGiB,+ <span>%dMiB</span> / day,,\n", u, (u*1024)/NUM_DAYS)}' >> data/stats.csv

# echo "date" > data/sites_distr.csv; cat $LOGS | sed 'N;N;s/^\(.*\)\n.*\n\(.*\)$/\1,\2/' | cut -d, -f1,8 | tr "," " " | uniq -f1 | cut -d" " -f1 >> data/sites_distr.csv