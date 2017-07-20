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

const allstudent=[];//allstudent:[{姓名, 学号, 民族, 班级,90,80,80...},{}....]
function addStudentAchivement() {
    let addstudentArr=readline.question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    addstudentArr=addstudentArr.split(',');

    let addstudentObj={name:'',id:'',nation:'',class:'',mat:0,chi:0,eng:0,pro:0,total:0,avg:0};
    addstudentObj.name=addstudentArr[0];
    addstudentObj.id=addstudentArr[1];
    addstudentObj.nation=addstudentArr[2];
    addstudentObj.class=addstudentArr[3];
    addstudentObj.mat=parseFloat(addstudentArr[4].slice(3));
    addstudentObj.chi=parseFloat(addstudentArr[5].slice(3));
    addstudentObj.eng=parseFloat(addstudentArr[6].slice(3));
    addstudentObj.pro=parseFloat(addstudentArr[7].slice(3));
    addstudentObj.total=addstudentObj.mat+addstudentObj.chi+addstudentObj.eng+addstudentObj.pro;
    addstudentObj.avg=parseFloat(addstudentObj.total/4).toFixed(2);
    allstudent.push(addstudentObj);
    if (addstudentArr.length===8 ){//如果输入格式正确就会返回
        let str = `学生${addstudentArr[0]}的成绩被添加
        `;
        return str;
    }else {//如果输入格式不正确
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）')
        addStudentAchivement();
    }
}
// console.log(addStudentAchivement());

function medianOfTotalOfClass(arr) {//totalarr:[num]
    arr=arr.sort(function (compare1,compare2) {
        return compare1 - compare2
    });
    var midIndex=parseInt(arr.length/2);
    var median=0;
    if (arr.length%2===0){
        median=(arr[midIndex-1]+arr[midIndex])/2;
    }else {
        median=arr[midIndex];
    }
    return median;
}
function avgOfTotalOfClass(arr){//arr=totalarr:[num]
    var totaloftotal=0;
    for (let i=0;i<arr.length;i++){
        totaloftotal+=arr[i];
    }
    var l=0;l=arr.length;
    var avgoftotal=0;
    avgoftotal=(totaloftotal/l).toFixed(2);
    return avgoftotal;
}

function buildReport(arr) {//get IDs=[id1,id2,id3...] arr = allstudent:[{姓名, 学号, 民族, 班级,90,80,80...},{}....]
    let reportID=readline.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
    let reportIDarr=reportID.split(',');
    let totalArr=[],totalavgArr=[];

    let str='成绩单\n姓名|数学|语文|英语|编程|平均分|总分 \n========================\n';
    for (let j=0;j<reportIDarr.length;j++){ //for reportID
        for (let i=0;i<arr.length;i++){//for allstudent
            if (reportIDarr[j]===arr[i].id){
                str+=`${arr[i].name}|${arr[i].mat}|${arr[i].chi}|${arr[i].eng}|${arr[i].pro}|${arr[i].avg}|${arr[i].total}
`;
                totalavgArr.push(arr[i].avg);
                totalArr.push(arr[i].total);
            }else if (reportIDarr[j]!==arr[i].id && reportIDarr[j].length===arr[i].id.length ) {
                continue
            }else {
                return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：'}
        }
    }
    //str+=张三|75|95|80|80|82.5|330/n李四|85|80|70|90|81.25|325

    str+=`========================
全班总分平均数：${avgOfTotalOfClass(totalArr)}
全班总分中位数：${medianOfTotalOfClass(totalArr)}`;
    return str;
}

function main() {
    let userChoise=buildMainMenuString();
    if (userChoise==='1'){
        let str=addStudentAchivement();
        console.log(str) ;
        main();
    }else if (userChoise==='2'){
        let str=buildReport(allstudent);
        console.log(str)
        main();
    }else if (userChoise==='3'){
        console.log('exit')
    }else{
        console.log('请按正确的格式输入');
        main();
    }
}
main();

// const obj={method:buildReport()};
// module.exports obj = obj;

