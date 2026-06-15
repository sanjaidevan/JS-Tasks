// Sort an array of numbers without using any built-in sorting methods.
try {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    const sortArray = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
            console.log("Outer Loop Started");
            console.log("Outer Loop Value: ", array[i]);
            for (let j = i + 1; j <= array.length - 1; j++) {
                console.log("Inner Loop Started");
                console.log("Inner Loop Value: ", array[j]);
                if (array[i] > array[j]) {
                    let swap = array[i];
                    console.log("Assigned to Swap variable", swap);
                    array[i] = array[j];
                    console.log("Assigned to value to the ", array[i]);
                    array[j] = swap;
                    console.log("value of array", array[j])
                }
            }
        }
    }

    sortArray(array);
    console.log("After Sorted Values");
    array.forEach((elements) => console.log(elements));
}
catch (error) {
    console.log("Error Message", error);
}

// Create two different arrays containing the same set of values and implement logic to prove that both arrays are equal.
try {
    const array_1 = [1, 2.1, 'a', "string", null, "", undefined, 0];
    const array_2 = [1, 2.1, 'a', "string", null, "", undefined, 0];

    const isSameArray = (array_1,array_2) =>
    {
      if(array_1.length === array_2.length)
        {
          for(let i=0 ; i<array_1.length; i++)
            {
              if(array_1[i] !== array_2[i])
                {
                  return false
                }
            }
        }
      return true;
    }
    console.log(isSameArray(array_1,array_2));
} catch (error) {
    console.log("Error Message", error);
}

try {
    let students = {
  name:"Saravanan",
  mark:80,
}

students.status = students.mark> 40 ? "Pass" :"Fail"
console.log(students);
} catch (error) {
    console.log("Error Message", error)
}