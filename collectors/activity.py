import sys
from itertools import groupby
import csv

# These are the timezone offsets from UTC
# We need them because `date` always gives
# time in sec since epoch in UTC!
timezone_offsets = {
    "CEST": 7200,
    "CET": 3600,
    "BST": 3600,
    "PDT": -25200,
    "GMT": 0
}

def get_duration_end(start_index, times, duration_step=360):
    while True:
        if len(times) == start_index+1: return start_index
        if (times[start_index+1] - times[start_index]) > duration_step:
            return start_index
        else:
            start_index += 1

def interval_to_row(t, program):
    return [t[0], t[1], t[1]-t[0], program]

def times_to_intervals(program, times):
    times.sort()
    rows = []

    i = 0
    while i < len(times):
        end_index = get_duration_end(i, times)
        if end_index != i:
            start = times[i]
            end = times[end_index]

            if (start / 86400) < (end / 86400): # The start and end are on seperate days
                row1 = interval_to_row([start, (end / 86400) * 86400], program)
                row2 = interval_to_row([(end / 86400) * 86400, end], program)

                rows.append(row1)
                rows.append(row2)
            else:
                row = interval_to_row([start, end], program)
                rows.append(row)
        #else:
        #    rows.append(interval_to_row([times[i], times[i]+60], program))

        i = end_index + 1

    return rows

def main():
    valid_programs = ["Google Chrome", "Sublime Text 2", "iTerm", "Finder", "Activity Monitor"]
    program_name = lambda x: x[3]
    time_lambda = lambda x: -1 if int(x[2]) > 300 else int(x[0]) + timezone_offsets[x[1]]
    invalid_times = lambda x: x > 0

    records = []

    for filename in sys.argv[1:]:
        with open(filename) as f:
            records += list(csv.reader(f))

    s = sorted(records, key=program_name)

    all_program_times = []
    activity_rows = []

    for program, line in groupby(s, program_name):
        times = filter(invalid_times, map(time_lambda, line))

        all_program_times += times

        if len(times) < 20 or (program not in valid_programs):
            continue

        rows = times_to_intervals(program, times)
        activity_rows += rows

    activity_rows += times_to_intervals("All Programs", list(set(all_program_times)))


    #print "start_ts,end_ts,duration,program"
    csv.writer(sys.stdout).writerows(activity_rows)

if __name__ == "__main__":
    main()