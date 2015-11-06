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
	if(array.length < 2) return array; 

	var pivotIndex = -1;
			ltArr = [],
			gtArr = [],
			swapped = false;  


	while(!swapped) {
		pivotIndex++; 
		if(pivotIndex === array.length-1) return array;  
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
	// console.log()
	swap(array, pivotIndex, headIndex - 1); 
	ltArr = array.slice(0, headIndex-1); 
	gtArr = array.slice(headIndex-1); 
	return quickSort(ltArr).concat(quickSort(gtArr)); 
}

// 0, 1, 2, 3, 4, 5, 6, 7 






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
	 var result = [];

	 while(arr1.length > 0 && arr2.length >0){
	 		if(arr1[0] > arr2[0]) result.push(arr2.shift());
	 		else result.push(arr1.shift());
	 }
	 return result.concat(arr1).concat(arr2);
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
	var initialLength = array.length;
	var splitArray = split(array)
	return	merge(mergeSort(splitArray[0]),mergeSort(splitArray[1]));
}


//**********************************
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

 

