from urlparse import urlparse
from itertools import groupby
import sys
import re

def num_sites(urls):
    return len(set(urls))

def num_domains(urls):
    return len(set(map(lambda x: urlparse(x).netloc, urls)))

def num_times_hn(urls):
    return len(filter(
        lambda x: urlparse(x).netloc == "news.ycombinator.com",
        [x[0] for x in groupby(urls)]
        ))

def num_wikipedia(urls):
    domains = [urlparse(x).netloc for x in set(urls)]
    de = len(filter(lambda x: re.match("de\.wikipedia\.org", x), domains))
    en = len(filter(lambda x: re.match("en\.wikipedia\.org", x), domains))
    others = len(filter(lambda x: re.search("\.wikipedia\.org", x), domains)) - (de+en)
    return (de, en, others)

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

def main():
    urls = list(sys.stdin)
    print "%s,%d" % ("num_sites", num_sites(urls))
    print "%s,%d" % ("num_domains", num_domains(urls))
    print "%s,%d" % ("num_times_hn", num_times_hn(urls))

    de, en, other = num_wikipedia(urls)
    #print "%s,%d" % ("num_wikipedia_de", de)
    #print "%s,%d" % ("num_wikipedia_en", en)
    #print "%s,%d" % ("num_wikipedia_other", other)
    print "%s,%d" % ("num_wikipedia", de+en+other)

    print "%s,%d" % ("num_github_repos", num_github_repos(urls))
    print "%s,%d" % ("num_youtube_vids", num_youtube_vids(urls))

if __name__ == "__main__":
    main()