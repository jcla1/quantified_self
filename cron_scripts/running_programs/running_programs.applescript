tell application "System Events"
  set programs to get name of every process whose background only is false and name is not "Finder"

	set AppleScript's text item delimiters to {","}
	programs as string

end tell