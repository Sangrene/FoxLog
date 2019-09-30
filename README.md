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