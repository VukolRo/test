var array1 = [true,  true,  true,  false,
	  true,  true,  true,  true ,
	  true,  false, true,  false,
	  true,  false, false, true ,
	  true,  true,  true,  true ,
	  false, false, true,  true ];



function countSheep(arrayOfSheep) {
	let presentSheep = arrayOfSheep.filter(item => item == true);
	return presentSheep.length;
}
	  
console.log( countSheep(array1) );