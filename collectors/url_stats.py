from urlparse import urlparse
from itertools import groupby
from time import time
import sys
import re

def num_sites(urls):
    return len(set(urls))

def num_domains(urls):
    return len(set(map(lambda x: urlparse(x).netloc, urls)))

def num_times_hn(urls):
    return (len(filter(
        lambda x: urlparse(x).netloc == "news.ycombinator.com",
        [x[0] for x in groupby(urls)]
        )), "#F60")

def num_wikipedia(urls):
    domains = [urlparse(x).netloc for x in set(urls)]
    de = len(filter(lambda x: re.match("de\.wikipedia\.org", x), domains))
    en = len(filter(lambda x: re.match("en\.wikipedia\.org", x), domains))
    others = len(filter(lambda x: re.search("\.wikipedia\.org", x), domains)) - (de+en)
    return de + en + others

def num_github_repos(urls):
    return len(filter(
        lambda x: x[0] == "github.com" and 5 > len(re.split("/", x[1])) > 2,
        [(x.netloc, x.path) for x in
            [urlparse(x) for x in set(urls)]
            ]))

def num_youtube_vids(urls):
    return len(filter(
        lambda x: re.search("http\:\/\/www.youtube.com\/watch\?v\=", x),
        set(urls)))

names = {
    "num_sites": "# sites visited",
    "num_domains": "# domains visited",
    "num_times_hn": "# times on hn",
    "num_wikipedia": "# wikipedia articles visited",
    "num_github_repos": "Github projects viewed",
    # "num_youtube_vids": "# Youtube videos viewed"
}

START_TIME = 1388530800 # in seconds


def main():
    urls = list(sys.stdin)
    for func, name in names.iteritems():
        ret = globals()[func](urls)

        if type(ret) == tuple:
            value = ret[0]
            special = 1
            color = ret[1]
        else:
            value = ret
            special = 0
            color = ""

        subtext = "+ <span>%d</span> / day" % (value / int(((int(time()) - START_TIME) / 86400)))
        vals = (name, value, subtext, special, color)

        print "%s,%d,%s,%s,%s" % vals

if __name__ == "__main__":
    main()