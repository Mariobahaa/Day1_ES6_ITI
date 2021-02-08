function minmax(...a){
    return [Math.min(...a), Math.max(...a)]
}

var [mn,mx] = minmax(1,2,3,4,5);
console.log(mn);
console.log(mx);
