// function medianOfTotalOfClass(arr) {//totalarr:[num]
//     arr=arr.sort(function (compare1,compare2) {
//         return compare1 - compare2
//     });
//     var midIndex=parseInt(arr.length/2);
//     var median=0;
//     if (arr.length%2===0){
//         median=(arr[midIndex-1]+arr[midIndex])/2;
//     }else {
//         median=arr[midIndex];
//     }
//     return median;
// }
const arr=[3,2.5,1];
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
// // arr=arr.sort(function (compare1,compare2) {
// //     return compare1 - compare2
// // })
console.log(avgOfTotalOfClass(arr));
// i='学科:90';
// i=parseInt(i.slice(3));
// console.log(i)
//
//张三,id01,民族,2,数学:75,语文:95,英语:80,编程:80
//李四,id02,民族,2,数学:85,语文:80,英语:70,编程:90

// const allstudents=[
//     {
//         name:'张三',
//         id:'id01',
//         nation:'民族',
//         class:'2',
//         mat:'数学:75',
//         chi:'语文:95',
//         eng:'英语:80',
//         pro:'编程:80'
//     },
//     {
//         name:'李四',
//         id:'id02',
//         nation:'民族',
//         class:'2',
//         mat:'数学:85',
//         chi:'语文:80',
//         eng:'英语:70',
//         pro:'编程:90'
//     }];
// const readline=require('readline-sync');
// // let reportID=readline.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
// // reportID=reportID.split(',');
// // console.log(reportID)
// function buildReport(arr) {//get IDs=[id1,id2,id3...] arr = allstudent:[{姓名, 学号, 民族, 班级,90,80,80...},{}....]
//     let reportID=readline.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
//     reportID=reportID.split(',');
//     let avgtotal=0,totalArr=[],totalavgArr=[];
//
//     let str='成绩单\n姓名|数学|语文|英语|编程|平均分|总分 \n========================\n';
//     for (let j=0;j<reportID.length;j++){ //for reportID
//         for (let i=0;i<arr.length;i++){//for allstudent
//             if (reportID[j]===arr[i].id){
//                 str+=`${arr[i].name}|${arr[i].mat}|${arr[i].chi}|${arr[i].eng}|${arr[i].pro}|${arr[i].avg}|${arr[i].total}
// `;
//                 avgtotal+=arr[i].avg;
//                 totalavgArr.push(arr[i].avg);
//                 totalArr.push(arr[i].total);
//             }else if (reportID[j]!==arr[i].id && reportID[j].length===arr[i].id.length ) {
//                 continue
//         }else {
//                 return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：'}
//             }
//         }
//     //str+=张三|75|95|80|80|82.5|330/n李四|85|80|70|90|81.25|325
//     str+=`========================
// 全班总分平均数：${(avgtotal/totalavgArr.length).toFixed(2)}
// 全班总分中位数：${medianOfTotalOfClass(totalArr)}`;
//     return str;
// }
//  console.log(buildReport(allstudents));