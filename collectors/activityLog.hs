import Data.Function (on)
import Data.List (sort, sortBy, groupBy, nub)
import Data.List.Utils (replace)
import Data.Ord (comparing)

import Control.Monad (liftM)
import System.Environment (getArgs)

import qualified Text.CSV as CSV

validPrograms   = ["Google Chrome", "Sublime Text 2", "iTerm", "Finder", "Activity Monitor"]
maxIntervalDiff = 360
minUsage        = 720

main = do
    Right csv <- ((liftM head) getArgs) >>= CSV.parseCSVFromFile
    let activityRecords = (every 3 $ init csv)
    putStrLn $ processActivityRecords activityRecords

processActivityRecords :: CSV.CSV -> String
processActivityRecords rs = ((++) `on` ((flip (++)) "\n") . postpareCSV) otherPrograms allPrograms
    where
        allPrograms = intervalsToCSV "All Programs" allProgramIntervals
        allProgramIntervals = timesToInterval . sort . nub $ concatMap snd programTimes

        otherPrograms = concatMap (uncurry intervalsToCSV) . filterPrograms $ mapTimesToInterval programTimes
        programTimes = cleanGroups . groupBy ((==) `on` fst) . sortBy (comparing fst) $ toProgramTime rs

        filterPrograms = filterMinUsage . filterValidPrograms

postpareCSV :: CSV.CSV -> String
postpareCSV = removeQuotes . CSV.printCSV

intervalsToCSV :: String -> [(Int, Int)] -> CSV.CSV
intervalsToCSV name = map (uncurry (intervalToCSV name))

intervalToCSV :: String -> Int -> Int -> CSV.Record
intervalToCSV name s e = [show s, show e, show (e - s), name]

mapTimesToInterval :: [(String, [Int])] -> [(String, [(Int, Int)])]
mapTimesToInterval = map (\ x -> (fst x, timesToInterval $ snd x))

timesToInterval :: [Int] -> [(Int, Int)]
timesToInterval (x:xs) = foldl concatIntervals [(x, x)] xs
    where
        concatIntervals (i:is) t = makeInterval i t ++ is
        makeInterval (start, end) t
            | t > end && t - end <= maxIntervalDiff = [(start, t)]
            | start /= end                          = [(t, t), (start, end)]
            | otherwise                             = [(t, t)]

filterValidPrograms :: [(String, a)] -> [(String, a)]
filterValidPrograms = filter (\ x -> fst x `elem` validPrograms)

filterMinUsage :: [(a, [(Int, Int)])] -> [(a, [(Int, Int)])]
filterMinUsage = filter (\ (_, is) -> (intervalsToDuration is) >= minUsage)

intervalsToDuration :: [(Int, Int)] -> Int
intervalsToDuration = foldl (\ acc (a, b) -> acc + b - a) 0

toProgramTime :: CSV.CSV -> [(String, Int)]
toProgramTime = map (\ r -> (r !! 3, adjustTime r))

adjustTime :: CSV.Record -> Int
adjustTime (t:tz:_) = (read t :: Int) + case tz of
            "CEST" -> 7200
            "CET" -> 3600

removeQuotes :: String -> String
removeQuotes = replace "\"" ""

cleanGroups :: [[(a, b)]] -> [(a, [b])]
cleanGroups = map (\ x -> (fst $ head x, map snd x))

every :: Int -> [a] -> [a]
every n [] = []
every n (x:xs) = x : (every n $ drop (n-1) xs)