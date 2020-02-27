let array = [[1,2,6,8],[3,5,8,5],[5,6,7,9]];

for (let i in array){
    console.log('row '+i);
    for (let j in array[i]){
        console.log(' '+array[i][j]);
    }
}