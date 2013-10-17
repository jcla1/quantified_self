from sys import stdin, stdout
from itertools import groupby
import csv


# This recursive version worked well, but when there were too many
# events the call stack size was exceeded, so it failed
def get_duration_end_recursive(start_index, times, duration_step=360):
    if len(times) == start_index+1: return start_index
    if (times[start_index+1] - times[start_index]) > 1000:
        return start_index
    else:
        return get_duration_end(start_index+1, times)

def get_duration_end(start_index, times, duration_step=360):
    while True:
        if len(times) == start_index+1: return start_index
        if (times[start_index+1] - times[start_index]) > 1000:
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
            row = interval_to_row([times[i], times[end_index]], program)
            rows.append(row)
        else:
            rows.append(interval_to_row([times[i], times[i]+60], program))

        i = end_index + 1

    return rows

def main():
    valid_programs = ["Google Chrome", "Sublime Text 2", "iTerm", "Finder", "Xcode", "Picasa", "Activity Monitor"]
    program_name = lambda x: x[3]
    time_lambda = lambda x: int(x[0])

    reader = csv.reader(stdin)
    s = sorted(reader, key=program_name)

    all_program_times = []
    activity_rows = []

    for program, line in groupby(s, program_name):
        times = map(time_lambda, line)
        if len(times) < 20 or (program not in valid_programs):
            continue
        all_program_times += times

        rows = times_to_intervals(program, times)
        activity_rows += rows

    activity_rows += times_to_intervals("All Programs", list(set(all_program_times)))


    #print "start_ts,end_ts,duration,program"
    csv.writer(stdout).writerows(activity_rows)

if __name__ == "__main__":
    main()