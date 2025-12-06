const fs=require("fs").promises
const func=async()=>{
    let snames=""
    let sgrades=""
    let data=await
    fs.readFile("./names.txt","utf8")
    snames=data
    data=await
    fs.readFile("./grades.txt","utf8")
    sgrades=data
    const arrnames=snames.split("\n")
    const arrgrades=sgrades.split("\n")
    const length=Math.min(arrgrades.length,arrnames.length)
    for(let i=0;i<length;i++){
        fs.appendFile("./new",arrnames[i]+"Well done, your score is"+" : "+arrgrades[i])
    }
    // fluo
//be not konflict git
    //fkuo 2
    // a good konflict
//be not konflict vsk
    //fkuo 2 &4

}
func()
