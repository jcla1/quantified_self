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
        data = filter(lambda x: len(x) >= 7, r)

        tabs = map(lambda x: int(x[6]), data)
        num_open_tabs.append(tabs)

    groups = groupby(sorted(flatten(num_open_tabs)))
    tab_distr = map(lambda x: (len(list(x[1])), x[0]), groups)

    csv.writer(sys.stdout).writerows(tab_distr)

if __name__ == '__main__':
    main()