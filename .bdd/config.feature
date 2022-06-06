Feature: Configuration
	the process used to determine the configuration file for the user when they call the process

	Background:
	Scenario:
		Given no inline arguments
		When there is at least 1 file matching in cwd
			And matches > 1
				Then Prompt User for selection
				Then Load that file into the process
			And matches === 1
				Then Load that file into the process
		When no file matching a valid path is in the directory that the process was called from
			Then print warning, load default settings dry.
	Scenario:
		Given a single, anonymous <argument> inline
		When there is at least 1 file matching in cwd/<argument>
			And matches > 1
				Then Prompt User for selection
				Then Load that file into the process
			And matches === 1
				Then Load that file into the process
		When no file matching a valid path is in the directory that the process was called from
			Then print warning, load default settings dry.
