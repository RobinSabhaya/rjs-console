export class Log{
    static success(message:string){
        console.log(`%c ${message}`, "color : green");
    }
    static danger(message:string){
        console.log(`%c ${message}`, "color : red");
    }
    static info(message:string){
        console.log(`%c ${message}`, "color : blue");
    }
    static bgblue(message:string){
        console.log(`%c ${message}`, "background : blue");
    }

}