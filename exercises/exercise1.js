//Exercice 1
//Résous le sujet 1 avec une complexité algorithmique de O(n²), 

//Sujet 1
//Avec une liste de nombres entiers relatifs et un nombre k, 
//crée une méthode retournant un booléen qui affiche si deux nombres 
//de cette liste ont k comme résultat de leur somme.

// -> choix du tri à bulle:

let bubbleAdd = (inputArr, k) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (inputArr[j] + inputArr[i] == k) return true;
    }
  }
  return false;
};

const createArrayData = (data) => {
  const initArray = data.split(" ").map(string => parseInt(string, 10));
  const finalArray = [initArray.shift(), initArray];
  return finalArray;
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
  const inputData = createArrayData(data);
  const k = inputData[0];
  const arrayData = inputData[1];
    if (!alertIfNaN(arrayData)) {
	    let result = bubbleAdd(arrayData, k);
	    if (result == true){
	    	console.log('At least two numbers from the list have a sum of ' + k);
	    	return;
	    }else{
	    	console.log("There isn't two numbers from the list that have a sum of " + k);
	    	return;
	    }
  	} else {
    	console.log('ERROR: wrong input values or empty file');
  	}
});