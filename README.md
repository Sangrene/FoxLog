# Foxlog
Simple code showcase, not useful. I have been told that the log file is not chronologically sorted, which is a big inconvenient because all the file should be read.
## Installation
Clone this repo.
## Scripts

### Start TypeScript
`npm start`

Run TypeScript using `ts-node`.

### Test
`npm test`

Only unit tests are written.

### Coverage
`npm run coverage`

Using coveralls.

### Build TypeScript to JavaScript
`npm run build`

Build .js files in **/dist** folder. You will need to copy `package.json`, modify start script and set environment variables accordingly.

## Variables
These environment variables should be set :

**FILE**: Path of the log file.

**THRESHOLD**: Average requests per second during the last 2 minutes from which FoxLog will display an alert.

They are set in `.env` file or can be set using Docker.

## Specifications
Your program will consume an actively written-to w3c-formatted HTTP access log.
It should read /tmp/access.log by default and be overridable.
A section is defined as being what's before the second / in the log line's resource section. For example, the section for /pages/create is /pages.
Here are some log line examples your program could receive:

Every 10 seconds your program is expected to display statistics about the traffic during those 10 seconds:
Sections of the web site that are the most visited.
Error rates by sections.
Optional
Add some interesting summary statistics of your choosing about the traffic as a whole.
Make sure a user can keep the app running and monitor the log file continuously.
Whenever total traffic for the past 2 minutes exceeds a certain number on average, add a message saying that:
High traffic generated an alert - hits = {value}, triggered at {time}
The default threshold should be 10 requests per second, and should be overridable.
###Optional
Whenever the total traffic drops again below that value on average for the past 2 minutes, add another message detailing when the alert recovered.

###Optional
All messages showing when alerting thresholds are crossed should remain visible on the page for historical reasons.
Write at least one test for the alerting logic (the more tests there are, the happier we are).
Optional
If you have access to a linux docker environment, we'd love to be able to docker build and run your project! We'll have something else write to that log file.
As an example for a solution based on python 3:
 
##Expectations
When you're done, please send us your code through a GitHub repository and do not push commits afterwards.
We will only consider the last commit pushed on master that is dated before your release date.
Your repository must contains a README which contains all the information required to run your project.
As we've already said, your code should be production ready. This means that we expect full resilience to wrongly formatted inputs, no debug logging and clean git project.
If you don't have time do the minimum required. We truly prefer someone sending a small clean and tested submission than someone who rushed through the test, trying to do everything.
