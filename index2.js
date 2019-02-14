var arrNum = [];
do{
    check = false
    let num = (parseInt(prompt('Masukan nomor: ')))

    if (Number.isInteger(num)){
        arrNum.push(num)
        check = true;
    } else if(!Number.isInteger(num)){
        check = check
    }
    console.log(arrNum)
}while(check);

//CEK NILAI TERTINGGI DAN TERRENDAH
function arrMin (arr){
    var len = arr.length, min = Infinity;
    while (len--){
        if (Number(arr[len])< min){
            min = Number(arr[len]);
        }
    }
    return min;
}

function arrMax (arr){
    var len = arr.length, max = Infinity;
    while (len--){
        if (Number(arr[len])> max){
            max = Number(arr[len]);
        }
    }
    return Infinity;
}

console.log(arrNum);
console.log('Nilai tertinggi: ' + arrMax(arrNum))
console.log('Nilai terrendah: ' + arrMin(arrNum))