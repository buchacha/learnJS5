let arr = [1,2,3,4,5];

let handler = 5;

let n = 4;
alert(arr.splice(n--,1));

alert(n);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === handler) {
        arr.splice(i--, 1);
    }
}

alert(arr);