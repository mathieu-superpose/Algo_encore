// Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²)

// Sujet 2
// À partir d'une liste contenant la hauteur en étages d'immeubles 
// d'une rue, d'est en ouest, un agent immobilier voudrait que 
// tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont 
// au moins un appartement avec une vue sur le soleil couchant à l'ouest.

const selectionCount = (inputArr) => {
	let count = 0;
  let max = -1;
  let n = inputArr.length;
  for(let i = max+1; i < n; i++) {
    for(let j = i+1; j < n; j++){
      if(inputArr[j] > inputArr[i]) {
          max=j;
          i=max;
      }
    }
    count++;
  }
  return count;
}

const createArrayData = (data) => {
  return data.split(" ").map(string => parseInt(string, 10));
}

const alertIfNaN = (arrayData) => {
  if(arrayData.includes(NaN))return true;
}

const fs = require('fs');
const fileName = process.argv[2];
// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }
  const arrayData = createArrayData(data);
    if (!alertIfNaN(arrayData)) {
	    let count = selectionCount(arrayData);
	    console.log("West view buildings: " + count);
  	} else {
    	console.log('ERROR: wrong input values or empty file');
  	}
});