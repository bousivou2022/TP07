class khmerDate {
    private date = new Date();
    constructor(dateAndtime: string) {
       this.date = new Date(dateAndtime);
       var data_seconds: number = this.date.getTime() / 1000;
       this.currentTimeStamp(data_seconds);
    }
    private current = new Date();
    res: string;
    currentTimeStamp(data_seconds: number) {
       var cur_seconds: number = (this.current.getTime() / 1000) + 7 * 60 * 60;
       let time: number = cur_seconds - data_seconds;
       if (time >= 2592000) {
          this.res = (Math.floor(time / 2592000)).toString()+" ខែមុន";
       } else if (time >= 604800) {
          this.res = (Math.floor(time / 604800)).toString()+" សប្តាហ៍មុន";
       } else if (time >= 86400) {
          this.res = (Math.floor(time / 86400)).toString()+" ថ្ងៃមុន";
       } else if (time >= 3600) {
          this.res = (Math.floor(time / 3600)).toString()+" ម៉ោងមុន";
       } else if (time >= 60) {
          this.res = (Math.floor(time / 60)).toString()+" នាទីមុន";
       } else if (time >= 0) {
          this.res = "មុននេះបន្តិច";
       }
       this.toKhNum();
    }
    toKhNum() {
       this.res = this.res.replace('1', '១');
       this.res = this.res.replace('2', '២');
       this.res = this.res.replace('3', '៣');
       this.res = this.res.replace('4', '៤');
       this.res = this.res.replace('5', '៥');
       this.res = this.res.replace('6', '៦');
       this.res = this.res.replace('7', '៧');
       this.res = this.res.replace('8', '៨');
       this.res = this.res.replace('9', '៩');
       this.res = this.res.replace('0','០');
    }
 
    getDate(): string{
        return this.res;
    }
}
export {
    khmerDate
}