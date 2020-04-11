//Assume an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array. Do this in linear time with constant memory use.

function find_missing_number(arr1, arr2){
   var sum1 = arr1.reduce((acc,b) => acc+b);
   var sum2 = arr2.reduce((acc,b) => acc+b); 
   return sum1-sum2;
}

// console.log(find_missing_number([8,3,5,1], [1,5,3]));
//Time complexity O(n)
//Declare a function that compares each element to every other 
//element of the list. Then return the element if all the other 
//elements are greater than it.

//Phase I
function my_min1(arr){

   for (let i=0; i<arr.length; i++){
      let min= true;
      for(let k=i+1; k<arr.length; k++){
         if (arr[k]<arr[i]){
            min = false;
         }

      }
      if (min){
         console.log(arr[i]);
         return arr[i];
      }
   }
}
 //Time Complexity is O(n^2) which is quadratic time and O(n^2) constant space

 //Phase II
function my_min2(arr){
   let min = arr[0];
   for (let i=1; i<arr.length; i++){
      if (arr[i]<min){
         min = arr[i];
      }
   }
   return min;
}
//Time Complexity is O(n) which is linear time and constant space

  list = [ 0, -3, -6, -4, -5, 10, 1, 90 ]
//  console.log(my_min2(list));  //# =>  -5

//Largest Contiguous Sub-sum
//We have an array of integers, and we need to find the largest
//contiguous (togetherin sequence) sub-sum. Find the 
//sums of all the contiguous sub-arrays and return the max.

//Phase 1
//Write a function that interates through the array and 
//finds all the sub-arrays using nested loops. 
//Create a new array that holds all the sub-arrays. 
//Then find the sums of each sub-array and return the max.


function largest_contiguous_subsum1(arr){
   let arrays = [];
   for (let i=0; i<arr.length; i++){
      for (let k=i; k<arr.length; k++){
         let array = [];
         for (let j=i; j<=k; j++){
            array.push(arr[j]);
         }
         let sum = array.reduce((a,b) => a+b);
         arrays.push(sum);
      }
   }
   return Math.max(...arrays);
 }

// Time complexity is 0(n**3) which is cubic time and cubic space.

//Phase II 
// Write a new function using O(n) time and O(1) memory.
//Keep a running tally of the largest sum.

function largest_contiguous_subsum2(arr){

   let max_so_far = arr[0];
   let curr_max = arr[0];

   for (i=1; i<arr.length; i++){
      curr_max = Math.max(arr[i], curr_max+arr[i]);
      max_so_far = Math.max(max_so_far, curr_max);
   }
   return max_so_far;
}

list = [5, 3, -7];
console.log(largest_contiguous_subsum2(list));

 list = [-5, -1, -3]
 console.log(largest_contiguous_subsum2(list)); // # => 8 (from [7, -6, 7])

 //Time complexity is O(n) time which is linear time and O(1) memory which is constant.

 