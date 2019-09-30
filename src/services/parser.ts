import { Parser } from "@robojones/nginx-log-parser";
import LogEntry from "../interfaces/LogEntry";
import moment from "moment";



export const getRequestInfos = (request: string) => {
  const requestSplit = request.split(" ");
  return {
    method: requestSplit[0],
    path: requestSplit[1],
    protocol: requestSplit[2],
  }
}

export const formatDateTime = (time: string) => {
  return moment(time, "DD/MMM/YYYY:HH:mm:ss ZZ").toDate()
}

const parse = (line: string) : LogEntry => {
  const schema = '$address - $user [$time] "$request" $status $bytes'
  const parser = new Parser(schema);
  try{
    const {address, user, time, request, status, bytes } = parser.parseLine(line);
    return {...{
      address: address,
      user: user,
      time: formatDateTime(time),
      status: status,
      bytes: bytes
    }, ...getRequestInfos(request)};
  }catch(e){
    return null;
  }
}

export default {
  parse
};