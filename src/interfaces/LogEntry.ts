export default interface LogEntry{
  address: string;
  user: string;
  time: Date;
  method: string;
  path: string;
  protocol: string;
  status: string;
  bytes: string;
}