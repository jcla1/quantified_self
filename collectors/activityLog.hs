import System.Environment
import Control.Monad
import Data.Function
import Data.List.Utils (replace)
import Data.List
import Data.Ord
import Text.CSV

main = do
    (path:_) <- getArgs
    Right csv <- parseCSVFromFile path
    let mainRecords = (every 3 $ init csv)
        programTimeRecords = toProgramTime $ filterValidTimes mainRecords
        programGroups = cleanGroups . groupBy ((==) `on` snd) $ sortBy (comparing snd) programTimeRecords
        validProgramTimes = filterValidPrograms programGroups
        allProgramsTimes = concatMap snd programGroups
    --putStrLn . postpareCSV . intervalsToCSV "All Programs" $ timesToInterval allProgramsTimes
    putStrLn . postpareCSV . concatMap (uncurry intervalsToCSV) $ mapTimesToInterval validProgramTimes

postpareCSV :: CSV -> String
postpareCSV = removeQuotes . printCSV

removeQuotes :: String -> String
removeQuotes = replace "\"" ""

intervalsToCSV :: String -> [(Int, Int)] -> CSV
intervalsToCSV name = map (uncurry (intervalToCSV name))

intervalToCSV :: String -> Int -> Int -> Record
intervalToCSV name s e = [show s, show e, show (e - s), name]

mapTimesToInterval :: [(String, [Int])] -> [(String, [(Int, Int)])]
mapTimesToInterval = map (\ x -> (fst x, timesToInterval $ snd x))

timesToInterval :: [Int] -> [(Int, Int)]
timesToInterval (x:xs) = foldl
    (\ ((start, end):intervals) timestamp ->
        if timestamp > end && timestamp - end <= 1000 then
            (start, timestamp) : intervals
        else
            -- TODO: see if this can be refactored
            if start /= end then
                (timestamp, timestamp) : (start, end) : intervals
            else
                (timestamp, timestamp) : intervals
    ) [(x, x)] xs

validPrograms = ["Google Chrome", "Sublime Text 2", "iTerm", "Finder", "Activity Monitor"]

filterValidPrograms = filter (\ x -> fst x `elem` validPrograms)

filterValidTimes = filter (\ r -> (read (r !! 2) :: Int) <= 300)

filterProgramGroups = filter (\ x -> (length $ snd x) >= 20)

toProgramTime :: CSV -> [(Int, String)]
toProgramTime = map (\ r -> (adjustTime r, r !! 3))

adjustTime :: [String] -> Int
adjustTime (t:tz:_) = (read t :: Int) + case tz of
            "CEST" -> 7200
            "CET" -> 3600

cleanGroups :: [[(a, b)]] -> [(b, [a])]
cleanGroups = map (\ x -> (snd $ head x, map fst x))

every :: Int -> [a] -> [a]
every n [] = []
every n (x:xs) = x : (every n $ drop (n-1) xs)