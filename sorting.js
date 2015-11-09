/***************************************/
/* quickSort     										   */
/***************************************/
function swap(arr, idx1, idx2) {
	if(idx1 === idx2) return; 
	var temp = arr[idx1]; 
	arr[idx1] = arr[idx2]; 
	arr[idx2]  = temp; 
	// return arr; 
}

var quickSort = function(array) {
	console.log('qs called with ', array); 
	if(array.length < 2) return array; 

	var pivotIndex = -1;
			ltArr = [],
			gtArr = [],
			swapped = false;  


	while(!swapped) {
		pivotIndex++; 
		if(pivotIndex === array.length-1) {
			console.log('returned sorted array'); 
			// debugger; 
			return array;  
		}
		var headIndex = pivotIndex + 1; 
		console.log('qs called: ', array, 'hidx: ' + headIndex, 'pidx: ' + pivotIndex); 
		for(var i = headIndex; i < array.length; i++) {
			if(array[i] < array[pivotIndex]) {
				swap(array, i, headIndex); 
				headIndex++; 
				swapped = true; 
			}
		}
	} 
	swap(array, pivotIndex, headIndex - 1); 
	var ltArr = array.slice(0, headIndex-1); 
	var gtArr = array.slice(headIndex-1); 
	console.log("Just finished swap, about to call: ", ltArr, gtArr); 
	// debugger; 
	return quickSort(ltArr).concat(quickSort(gtArr)); 
}

/***************************************/
/* bubblerSort  										   */
/***************************************/

var bubbleSort = function(arr,output) {
	if(arr.length < 2) return arr;
	var temp; 
	var counter = 0; 
	var status = false; 

	//REFACTOR: outer loop to iterate down
	// ... and add escape condition to the
	// ... for loop condition directly. Then 
	// ... you only have a single return. 
	// Can use a function call instead. 				
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			counter++; 
			if(arr[j] > arr[j+1]) {
				status = true; 
				temp = arr[j]; 
				arr[j] = arr[j+1]; 
				arr[j+1] = temp; 
			}
		}
		if(!status) return output ? counter : arr; 
	}

	return output? counter : arr; 
}

/***************************************/
/* mergeSort + 2 helpers: merge, split */
/***************************************/

this.counter = 0;
var merge = function(arr1,arr2){
	//Don't use shift here - kills O(n) and becomes O(n^2)
	 var result = [];
	 var leftIdx = 0; 
	 var rightIdx = 0; 

	 // while(arr1.length > 0 && arr2.length >0){
	 // 		if(arr1[0] > arr2[0]) result.push(arr2.shift());
	 // 		else result.push(arr1.shift());
	 // }

	 while(leftIdx < arr1.length || rightIdx < arr2.length) {
	 	if(arr1[leftIdx] < arr2[rightIdx] || arr2[rightIdx] === undefined) {
	 		result.push(arr1[leftIdx]); 
	 		leftIdx++; 	
	 	} else {
	 		result.push(arr2[rightIdx]); 
	 		rightIdx++; 
	 	}
	 }
	 return result;
}

//expects arrays of length 2+
var split = function(array){
	if(array.length < 2) return [array];
	var length = Math.ceil(array.length/2);
	var arr1 = array.slice(0,length);
	var arr2 = array.slice(length);

	return [arr1,arr2];
}

function mergeSort(array) {
	// console.log(array);
	if(array.length < 2) return array;
	var splitArray = split(array)
	return	merge(mergeSort(splitArray[0]),mergeSort(splitArray[1]));
}


//**********************************
// Run the following code by calling file in node. 
// Be sure to invoke run(); 
function run() {	
	for(var i=12; i <= 17; i++) {
	    var num_items = Math.pow(2,i);
	    var native_test_array = [];
	    var b_test_array = [];
	    var m_test_array = []
	    for(var j=0; j < num_items; j++) {
	        var rand = Math.floor(Math.random() * num_items);
	        native_test_array.push(rand);
	        b_test_array.push(rand);
	        m_test_array.push(rand);
    }

    console.time(num_items + " native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + " native");

    console.time(num_items + " bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + " merge");  
  }
}

//run()

 

