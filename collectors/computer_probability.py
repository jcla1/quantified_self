from sys import stdin
import csv

# How big shall the segments be to group the activity into?
SECOND_GROUPS = 30

def seconds_adder(seconds, r):
    r = xrange(r[0], r[1])

    for i in r:
        seconds[i] += 1

    return seconds

def main():
    reader = csv.reader(stdin)

    seconds = [0] * 86400

    seconds = reduce(
            seconds_adder,
            [(int(x[0])%86400,
                    (int(x[1])%86400) if (int(x[1])%86400) != 0 else 86400)
                for x in filter(
                    lambda x: x[3] == "All Programs",
            reader)], seconds)

    print "\n".join(
            ["%d,%d" % (i*SECOND_GROUPS, v)
                for i, v in
                    enumerate(
                        [sum(seconds[x:x+SECOND_GROUPS])
                        for x in range (0,len(seconds), SECOND_GROUPS)
                        ])])

if __name__ == '__main__':
    main()