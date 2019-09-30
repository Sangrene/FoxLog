import fs from "fs";
import nexline from "nexline";

// Used nexline to stream file in reverse because an access log should be historically sorted
// Seems like it is not sorted (strange)
// TODO: Refactor read in generator func
const read = async(logFile: string, lineCb: (line: string) => void) => {
  try{
    const fd = fs.openSync(logFile, 'r');
    const nl = nexline({
      input: fd, 
      reverse: true,
    });
    while(true){
      const line = await nl.next();
      if(line === null) break;
      lineCb(line);
    }
    fs.closeSync(fd);
  }catch(e){
    throw e;
  }

}


export default {
  read
}