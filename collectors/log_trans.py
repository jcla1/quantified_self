import sys
from os import path
from itertools import izip
import csv

def main():
    for filename in sys.argv[1:]:
        convert_file(filename)

def convert_file(filename):
    with open(filename) as f:
        lines = list(csv.reader(f))
        groups = izip(lines[::3], lines[1::3], lines[2::3])

        activity_rows = []
        programs_rows = []
        urls_rows = []

        for g in groups:
            timestamp = [g[0][:1]]

            activity_rows.append(g[0])
            programs_rows.append(timestamp + g[1])
            urls_rows.append(timestamp + g[2])

        base = path.basename(filename)
        filepath = path.dirname(filename)

        csv.writer(open(filepath + "/activity_" + base, "w")).writerows(activity_rows)
        csv.writer(open(filepath + "/programs_" + base, "w")).writerows(programs_rows)
        csv.writer(open(filepath + "/urls_" + base, "w")).writerows(urls_rows)

if __name__ == '__main__':
    main()