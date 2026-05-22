const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //*? 7. Una matriz es una matriz de matrices, que representa una cuadrícula con filas y columnas.

  arr[0].push(10);
  arr[1].push(20);
  arr[2].push(30);
  console.log(arr);

  arr.push([30,31,32,33,34,35,36,37,38,39]);
  console.log(arr);

  arr[1].splice(9,1);
  arr[0].splice(0,1);
  console.log(arr);

  arr[3].reverse();
  console.log(arr);

  
  // Type your code above this line!