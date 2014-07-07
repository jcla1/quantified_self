import sys
import csv
from itertools import groupby, chain

def flatten(listOfLists):
    "Flatten one level of nesting"
    return chain.from_iterable(listOfLists)

def main():
    num_open_tabs = []

    for filename in sys.argv[1:]:
        r = csv.reader(open(filename))
        tabs = map(lambda x: int(x[6]), r)
        num_open_tabs.append(tabs)

    groups = groupby(sorted(flatten(num_open_tabs)))
    tab_distr = map(lambda x: (x[0], len(list(x[1]))), groups)

    csv.writer(sys.stdout).writerows(tab_distr)

if __name__ == '__main__':
    main()