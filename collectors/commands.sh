ACTIVITY_LOGS=~/data/misc/activity_log/activity_2014*
PROGRAM_LOGS=~/data/misc/activity_log/programs_2014*
URL_LOGS=~/data/misc/activity_log/urls_2014*
NET_LOGS=~/data/misc/activity_log/net_2014*
NUM_DAYS=365

echo "Working on activity & computer probability..."
python collectors/activity.py $ACTIVITY_LOGS > data/activity_log.csv
python collectors/computer_probability.py data/activity_log.csv > data/computer_probability.csv;

echo "Pulling together daily network usage..."
tail -qn 1 $NET_LOGS | cut -d, -f1,3 > data/net_usage_daily.csv;

echo "Collecting the distribution of tabs..."
python collectors/tab_distr.py $ACTIVITY_LOGS > data/tab_distr.csv

echo "Finding distribution of Google searches..."
cat $URL_LOGS | grep www.google.com/search | cut -d, -f1 > data/search_distr.csv;

echo "Calculating other stats..."
cat $URL_LOGS | cut -d, -f3 | python collectors/url_stats.py > data/stats.csv;
tail -n +2 data/net_usage_daily.csv | awk -F"," -v "NUM_DAYS=$NUM_DAYS" -v OFS="," '{ sum+=$2 } END {u=sum/1024; printf("network usage,%dGiB,+ <span>%dMiB</span> / day,,\n", u, (u*1024)/NUM_DAYS)}' >> data/stats.csv;

# echo "date" > data/sites_distr.csv; cat $LOGS | sed 'N;N;s/^\(.*\)\n.*\n\(.*\)$/\1,\2/' | cut -d, -f1,8 | tr "," " " | uniq -f1 | cut -d" " -f1 >> data/sites_distr.csv
