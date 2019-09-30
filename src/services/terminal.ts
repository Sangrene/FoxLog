import blessed from "blessed";
import moment from "moment";

export default class Terminal {
  screen: blessed.Widgets.Screen;

  body: blessed.Widgets.BoxElement;
  statusBar: blessed.Widgets.BoxElement;
  

  constructor(props?: any){
    this.init();
  }

  init = () => {
    this.screen = blessed.screen({
      smartCSR: true
    });
    this.screen.title = "FoxLog";
    this.body = blessed.box({
      top: 1,
      left: 0,
      width: '100%',
      height: '99%'
    });
    this.statusBar = blessed.box({
      top: 0,
      left: 0,
      width: '100%',
      height: 1,
      style: {
        fg: 'white',
        bg: 'blue'
      }
    });
    this.screen.append(this.statusBar);
    this.screen.append(this.body);
  }

  log = (text: string) => {
    this.body.insertLine(0, `[${moment().format()}] ${text}`); 
    this.screen.render();
  }

  updateStatus = (text: string, isAlert: boolean) => {
    this.statusBar.style.bg = isAlert ? "red" : "blue";
    this.statusBar.setContent(`[${moment().format()}] ${text}`);
    this.screen.render();
  }
}