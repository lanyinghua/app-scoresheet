/**
 * Created by huadu on 7/19/17.
 name,id,nation,class,数学|语文|英语|编程
 0,   1, 2      ,3   ,4   ,5   ,6 ,7
 */
const readline=require('readline-sync');

function buildMainMenuString() {
    let userChoise=readline.question('1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：');
    return userChoise;
}
// console.log(buildMainMenuString());

var allstudent=[];
function addStudentAchivement() {
    let addstudent=readline.question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩,(数学|语文|英语|编程) ...），按回车提交：');
    addstudent=addstudent.split(',');
    allstudent.push(addstudent);
    if (addstudent.length===8 ){//如果输入格式正确就会返回
        let str = `学生${addstudent[0]}的成绩被添加`;
        return str;
    }else {//如果输入格式不正确
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）')
        addStudentAchivement();
    }
}
// console.log(addStudentAchivement());

function arraySort(arguments){
   let sortedarray = [];
    for(let i= 0;i<arguments.length;i++){
        sortedarray.push(arguments[i]);
    }
    sortedarray.sort(function(compare1,compare2){
        return compare1 - compare2
    });
    return sortedarray;
}

function medianOfTotalOfClass(totalarr) {//totalarr:[num]
    let sortedArray=arraySort(totalarr);
    let midIndex=parseInt(totalarr.length/2), median=0;
    if (totalarr.length%2===0){
        median=(totalarr[midIndex-1]+totalarr[midIndex])/2;
    }else {
        median=totalarr[midIndex];
    }
    return median;
}

function printScoreSheet(infoarr) {//infoarr:[[name,id,ntn,...],[str],...]
    let avg =[], total =[], avgOfOne=0, totalOfOne=0, totalOfClass=0;
    let str;
    str = `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================`;
   for (let i=0;i<infoarr.length;i++){
       for (let j=4;j<=7;j++){
           infoarr[i][j]=parseFloat(infoarr[i][j]).toFixed(2);
       }
       totalOfOne=infoarr[i][4]+infoarr[i][5]+infoarr[i][6]+infoarr[i][7];
       totalOfClass+=totalOfOne;
       avgOfOne=totalOfOne/4;
       total.push(totalOfOne);
       avg.push(avgOfOne);
       str+=`${infoarr[i][0]}|${infoarr[i][4]}|${infoarr[i][5]}|${infoarr[i][6]}|${infoarr[i][7]}|${total[i]}|${avg[i]}`;
   }
   let avgOfTotalOfClass=totalOfClass/4;
    str+=`========================
全班总分平均数：${avgOfTotalOfClass.toFixed(2)}
全班总分中位数：xxx`

}

function buildReport() {
    let reportID=readline.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    for (let i=0;i<allstudent.length;i++){

    }
}

// function main() {
//     let userChoise=buildMainMenuString();
//     if (userChoise==='1'){
//         var str=addStudentAchivement();
//         console.log(str) ;
//         main();
//     }
//
// }
// console.log(main());



