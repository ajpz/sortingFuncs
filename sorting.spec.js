describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an single element array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles a worst-case, multi-element array', function(){
        expect( bubbleSort([10,9,8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    });

    it('handles a average-ish, multi-element array', function(){
        expect( bubbleSort([1,2,3,4,5,6,7,8,9,10]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    });
});

describe('Bubble Sort', function(){
    it('it knows when the array is sorted and stops sorting early', function(){
        expect( bubbleSort([1,2,3,4,5,6,7,8,9,10], true) ).toEqual( [1,2,3,4,5,6,7,8,9,10].length -1 );
    });
}); 

describe('Merge helper function', function(){
    it('is able to merge two sorted arrays', function(){   
    	expect( merge([1,3,5,7],[2,4,6,8]) ).toEqual( [1,2,3,4,5,6,7,8] );
    });
});

describe('Split Array helper function', function() {
  it('is able to split an array into two halves', function() {
   		expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3,4],[5,6,7]]) 
  });
});

describe('Merge Sort', function() {
  it('is able to sort an array', function() {
   		expect(mergeSort([7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7]) 
  });
});

describe('quickSort', function () {
    it('handles an empty array', function(){
        expect( quickSort([]) ).toEqual( [] );
    });

    it('handles an single element array', function(){
        expect( quickSort([1]) ).toEqual( [1] );
    });
  it('is able to sort an array', function() {
      expect(quickSort([7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7]) 
  });
})
