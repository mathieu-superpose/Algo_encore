# Algo_encore
<p align="center">
  <img alt="Algo_encore_logo" src="https://github.com/mathieu-superpose/Algo_encore/blob/master/assets/images/algo_logo.png" height="200"/>
</p>

## Sorting Algorithms

`Sorts a list of integers and counts the number of iterations needed. Fusion, Bubble and Selection sorting methods have been used`

Example:

$ cat list.txt
48 -2 6 12 0 -4

$ node monProgramme.js list.txt


Tri fusion: 16 comparaisons - [-4, -2, 0, 6, 12, 48]

Tri bubble: 15 comparaisons - [-4, -2, 0, 6, 12, 48]

Tri selection: 15 comparaisons - [-4, -2, 0, 6, 12, 48]


### Problem 1:

`Test if a list contains two elements which sum is equal to a specific value.`

Example:
the list [10, 15, 3, 7] and a key of 17 should output true
while [1, 8, 10, 21] and k = 19 should output false

nb: the input text file is a list of number where the firt is the key

|Exercise|algorithmic complexity                                                   
|-|-|
|`1` complete| O(n²)            
|`3` tbc |O(n)
|`5` tbc |only one iteration

### Problem 2:

`Out of a list which symbolizes buildings aligned from east to west, and where value is the building heigth, guess how many building have appartments that are not completely obstructed and allow a view of the west.`

Example:
the list [3, 7, 8, 3, 6, 1] should output 3
and [1, 4, 5, 8] should output 1

|Exercise|algorithmic complexity                                                   
|-|-|
|`2` complete| O(n²)            
|`4` tbc |O(n)
|`6` tbc |only one iteration

## How to test

Access to the appropriate folder from the terminal and follow this path:

` $ node program.js input_data.txt `
 
## Contributors

- [:palm_tree: Benjamin Serval](https://github.com/BenjaminServal)
- [:evergreen_tree: Clémentine Fouqué](https://github.com/Clem-svg)
- [:deciduous_tree: Marie Dechaux](https://github.com/mariedx)
- [:seedling: Mathieu Joly](https://github.com/mathieu-superpose)