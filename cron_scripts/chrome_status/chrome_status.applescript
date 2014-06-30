tell application "System Events"
    set chromeRunning to (length of (get name of every process whose name is "Google Chrome") is greater than 0)
    set chromeInFocus to ((name of first application process whose frontmost is true) is "Google Chrome")

    set activeURL to ""
    set numTabs to 0

    if chromeRunning then
        tell application "Google Chrome"
            set normalWindows to (windows whose mode is not "incognito")

            if length of normalWindows is greater than 0 then
                set activeURL to (get URL of active tab of (first item of normalWindows))
            end if

            repeat with w in normalWindows
                set numTabs to numTabs + (length of (get tabs of w))
            end repeat

        end tell
    end if
end tell

(chromeRunning as integer) & "," & (chromeInFocus as integer) & "," & numTabs & "\n" & (activeURL) as string