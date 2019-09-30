import LogEntry from "../src/interfaces/LogEntry";

const fakeLogs = `92.128.96.211 - - [02/Aug/2019:12:52:39 +0000] "GET /users/me HTTP/1.1" 200 352 "-" "okhttp/3.12.1" "-"
77.154.225.254 - - [02/Aug/2019:12:52:40 +0000] "GET /users/me HTTP/1.1" 200 373 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:52:40 +0000] "GET /shops/13005/firstTime HTTP/1.1" 200 61 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:52:41 +0000] "GET /users/bills/uploadLink/?idShop=13005 HTTP/1.1" 200 1497 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:53:44 +0000] "GET /users/me HTTP/1.1" 200 349 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:53:47 +0000] "GET /users/jackpot HTTP/1.1" 304 0 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:53:47 +0000] "GET /users/me HTTP/1.1" 200 349 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
77.154.225.254 - - [02/Aug/2019:12:53:49 +0000] "GET /shops/search?name=mc HTTP/1.1" 200 59626 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
77.154.225.254 - - [02/Aug/2019:12:54:50 +0000] "GET /shops/search?name=mcd HTTP/1.1" 200 58639 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
77.154.225.254 - - [02/Aug/2019:12:54:50 +0000] "GET /shops/search?name=mcdo HTTP/1.1" 200 58639 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
92.128.96.211 - - [02/Aug/2019:12:54:51 +0000] "GET /users/me HTTP/1.1" 200 352 "-" "okhttp/3.12.1" "-"
88.189.229.231 - - [02/Aug/2019:12:54:53 +0000] "GET /users/jackpot HTTP/1.1" 304 0 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:54:54 +0000] "GET /users/me HTTP/1.1" 200 350 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:54:55 +0000] "GET /users/bills/isReceipt?idShop=13005&url=img/bills/13005/35019-1564750360613.jpeg HTTP/1.1" 200 92 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:54:00 +0000] "POST /users/bills/report HTTP/1.1" 200 13 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:54:01 +0000] "GET /users/me HTTP/1.1" 200 384 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
80.214.223.215 - - [02/Aug/2019:12:54:01 +0000] "POST /users HTTP/1.1" 200 290 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:54:01 +0000] "GET /users/jackpot HTTP/1.1" 304 0 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
80.214.223.215 - - [02/Aug/2019:12:55:02 +0000] "GET /infos HTTP/1.1" 200 174 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
88.189.229.231 - - [02/Aug/2019:12:56:02 +0000] "GET /users/me HTTP/1.1" 200 349 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:55:04 +0000] "GET /users/me HTTP/1.1" 200 384 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:56:05 +0000] "GET /users/me HTTP/1.1" 200 383 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:55:05 +0000] "GET /users/jackpot HTTP/1.1" 304 0 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"
164.177.10.181 - - [02/Aug/2019:12:56:06 +0000] "GET /users/me HTTP/1.1" 200 382 "-" "spineatapp/27 CFNetwork/978.0.7 Darwin/18.6.0" "-"`;

const fakeEntries : Array<LogEntry> = [
  {
    address: "92.128.96.211",
    user: "-",
    time: new Date("02/Aug/2019:12:52:39 +0000"),
    method: "GET",
    path: "/users/me",
    protocol: "HTTP/1.1",
    status: "200",
    bytes: "352"
  },
  {
    address: "77.154.225.254",
    user: "-",
    time: new Date("02/Aug/2019:12:52:40 +0000"),
    method: "PUT",
    path: "/users/me",
    protocol: "HTTP/1.1",
    status: "500",
    bytes: "373"
  },
  {
    address: "164.177.10.181",
    user: "-",
    time: new Date("02/Aug/2019:12:52:40 +0000"),
    method: "GET",
    path: "/shops/13005/firstTime",
    protocol: "HTTP/1.1",
    status: "200",
    bytes: "61"
  },
  {
    address: "164.177.10.181",
    user: "-",
    time: new Date("02/Aug/2019:12:52:41 +0000"),
    method: "GET",
    path: "/users/bills/uploadLink/?idShop=13005",
    protocol: "HTTP/1.1",
    status: "200",
    bytes: "1497"
  },
    {
    address: "88.189.229.231",
    user: "-",
    time: new Date("02/Aug/2019:12:52:44 +0000"),
    method: "GET",
    path: "/users/me",
    protocol: "HTTP/1.1",
    status: "200",
    bytes: "349"
  }

]

export {
  fakeLogs,
  fakeEntries
}