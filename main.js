function arrayDiff(a, b) {
    for (let i = a.length; i >= 0; i--) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) a.splice(i,1);
        
      }
    }
    return a;
  }

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));

