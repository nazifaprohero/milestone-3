//problem:1(feetToMile)

function feetToMile(feet){
var mile= feet/5280;
return mile;
}

var mile1=feetToMile(5000);
console.log(mile1);

var mile2=feetToMile(50000);
console.log(mile2);

var mile3=feetToMile(-500000);
var absoluteNumber=Math.abs(mile3);
console.log(absoluteNumber);

//problem:2(woodCalculator)

function woodCalculator(chair, table, bed){
var totalChair= chair*1;
var totalTable=table*3;
var totalBed=bed*5;
var totalWoodCount=totalChair+totalTable+totalBed;
return totalWoodCount;
}
var woodCount=woodCalculator(14,5,12);
console.log(woodCount);

// problem:3(brickCalculator)

function brickCalculator(n){
var sum1=0;
var sum2=0;
var sum3=0;
for(i=1; i<=n; i++){
    if(i<=10){
        var result1=15*1000;
        sum1=sum1+result1;
    }
    else if( i>10 && i<=20){
        result2=12*1000;
        sum2=sum2+result2;
    }
    else{
        result3=10*1000;
        sum3=sum3+result3;
    } 
}
var total=sum1+sum2+sum3;
return total;
}
var brickcount=brickCalculator(25);
console.log(brickcount);

// problem4: (tinyFriend)

function tinyFriend(name){
var  buddyNames= name[0];
var str = buddyNames.length ;
for(i = 1; i < name.length; i++){
    var smallName = name[i] ;

    var smallWord = smallName.length ;
    if(smallWord < str && name[i]!=" "){
        buddyNames= smallName ;
    }
}
return buddyNames;
}     
var Names=["Nazifa","Tahseen","Pial","Sejuty","Nishat"," "];
var result=tinyFriend(Names);
console.log(result);

