//Pop method for array - removing an element form the end
function popMethodArr() {
    //create our array
    let fruits = ["Apple", "Orange", "Pear"];

    alert(fruits); // display the initial arr
    alert('removing: ' + fruits.pop() ); // remove "Pear" and alert it
    alert('remain fruits: ' + fruits ); // Apple, Orange
}

//next one is push merthod - appedn element to the end
function pushMethodArr() {
    //create our array
    let fruits = ['Apple', 'Orange'];

    alert('initila array ' + fruits); //display our initial array
    fruits.push("Pear");
    alert('final array ' + fruits);
}

//the shift method - extracts the first element of the array 
function shiftMethodArr() {
    //create our array
    let fruits = ['Apple', 'Orange', 'Pear'];
    alert('initial arr: ' + fruits);//display the initial array
    alert("removing: " + fruits.shift() ); //remiving the apple 
    alert('final arr: ' + fruits) //display the final array
}

//the unshift add the element to the beginning of the array
function unshiftMethodArr() {
    //create our arr
    let fruits = ['Orange', 'Pear'];

    alert('initial arr: ' + fruits); //delete our arr
    fruits.unshift('Apple'); // add our element to the start
    alert('final arr: ' + fruits); //display our final arr
}

//methods push and unshift can add multiple elemnts at once
function pushAndShiftMethod() {
    
    let fruits = ['Apple']; //create our arr
    alert('intial arr: ' + fruits); //dsiplay our arr
    fruits.push('Orange', 'Peach');//add element to the start
    fruits.unshift('Pineapple', 'Lemon'); //add element to the end
    alert(fruits); //diplay our final array
}
//Delete method fpr arr
function deleteArrayMethod (){

    let arr = ["I", "go", "home"];
    alert("initial arr " + arr);
    delete arr[1]; // remove go
    alert("the index of the deleted element: " + arr[1]); // undefined
    alert("final arr " + arr);
    alert("The length " + arr.length ); // 3
}

//splice arr method
function splicArrayMethod (){
    let arr = ["I", "study", "JavaScript"];
    alert("initil arr " + arr );
    arr.splice(1, 1); // from index 1 remove 1 element
    alert( "removed second elem " + arr ); // ["I", "JavaScript"]

    let arra = ["I", "study", "JavaScript", "right", "now"];
    alert("intial arr: " + arra);
    // remove 3 first elements and replace them with another
    arra.splice(0, 3, "Let's", "dance");
    alert("modified an array " + arra ) // now ["Let's", "dance", "right", "now"]

}

//slice arr - create  new string with copying
function sliceArrayMethod () {
    let arr = ["t", "e", "s", "t"];
    alert("the initil arr: " + arr ); //displaythe start arraya
    alert("the middle newArr (copied): " + arr.slice(1, 3) ); //output e, s (copy from 1 to 3)
    alert("form the end to the middle newArr (copied):" + arr.slice(-2) ); // output s, t (copy from 02 till the end)

}

//conct function arr.concat
function concatArrayMethod () {
    //create our array 
    let arr = [1, 2];
    //initial arr
    alert("intial arr " + arr );

    // create an array from: arr and [3,4]
    alert("add 3&4: " + arr.concat([3, 4]) ); // 1,2,3,4

    // create an array from: arr and [3,4] and [5,6]
    alert("create an array from: arr and [3,4] and [5,6]: " + arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

    // create an array from: arr and [3,4], then add values 5 and 6
    alert("create an array from: arr and [3,4], then add values 5 and 6: " + arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
}

//forEach for arry
function forEachMethodArr () {
    //for each element call alert
    // let firstArr = ["Bilbo", "Gandalf", "Nazgul"];
    // firstArr.forEach(alert);
    // or
    let firstArr = ["Bilbo", "Gandalf", "Nazgul"];
    ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
    //And this code is more elaborate about their positions in the target array:
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
        alert(`${item} is at index ${index} in ${array}`);
      });
}

//find the indexOf and the lastIndexOf - ideea de afisa indexul pentru ultmul element specificat care este intrun arr
function indexOfAndlastIndexOf (){
    let arr = ['Apple', 'Orange', 'Apple']; //create arr

    alert('indexOf first find elem: ' + arr.indexOf('Apple') ); // 0 (first Apple)
    alert('lasIndexOf find the index of the last same element: ' + arr.lastIndexOf('Apple') ); // 2 (last Apple)
}

//the find method for arr
function findMethodArr () {
    let users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pete'},
        {id: 3, name: 'Mary'}
    ];
    let user = users.find(item => item.id == 2);

    alert("the finded item: " + user.name) //output should be Pete - 2
}

//findIndex and findLastIndex Method arr 
function findIndexAndLastMethodArr () {
    let users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pete'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'John'}
    ];
    //find the index of the first John
    alert("first John: " + users.findIndex(user => user.name == "John")); //output: 0
    //find the inde of the last John
    alert("index of the last element with the specification name: " + users.findLastIndex(user => user.name == 'John')); // output: 3
}
// the filter method for arr
function filterArrMethod () {
    let users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pete'},
        {id: 3, name: 'Mary'}
    ];
    //returns arry of the first two users
    let someUsers = users.filter(item => item.id < 3);
    //disply the output
    alert('displaying the last item that are satisfaing the condition: ' + someUsers.length); //output 2
}
//the map method for arr
function mapArrMethod () {
    let lengths = ['Biblo', 'Gandalf', 'Nazgul'].map(item => item.length);
    alert(lengths); //output 5, 7, 6
}
//the sort(fn) of the arr
function sortArrMethod (){
    let arr = [1, 15, 3, 2];//crete our arr
    // the method reorders the content of arr
    arr.sort();
    alert("string sortong" + arr ); //output 1, 15, 2 - this is incorect. why? because the sort method sort by default as string value 
    //the numember sort using the sort() method
    function compareNumeric(a, b){
        if(a > b){
            return 1;
        } 
        if(a == b){
            return 0;
        }
        if(a < b){
            return -1;
        }     
    }
    let arrTwo = [1, 2, 15, 3]; //create another arr
    arrTwo.sort(compareNumeric); //provide the rules for the sorting arr - number rule
    alert("the numeric sort of the arr" + arrTwo); 
} 
//the reverse of the arr
function reverserArrMethod (){
    let arr = [1, 2, 3, 4, 5]; //create the arr
    alert("initail arr: " + arr);
    arr.reverse(); //reverse it
    alert("reversed arr: " + arr ); // display arr
}
//split after a specific element
function splitArrMethod (){
    let names = 'Bilbo, Gandalf, Nazgul'; //create arr
    let arr = names.split(', '); //split the arr after a specific element
    for (let name of arr) {
    alert( `A message to ${name}.` ); // A message to Bilbo  (and other names) display
    }
    //the numeric ignor of the split method
    let str = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
    alert(str); // display the firts two elements
}
//join function for the arr - the reverse of the split
function joinArrMethod () {
    let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
    alert('initila arr ' + arr);
    let str = arr.join(';'); // glue the array into a string using ;
    alert("after join arr" + str ); // Bilbo;Gandalf;Nazgul
}
//reduce arr function
function reduceArrMethod (){
    let arr = [1, 2, 3, 4, 5];
    let result = arr.reduce((sum, current) => sum + current, 0);
    alert(result); // 15
}
//the  thisArgument for the arr
function thisArgMethod (){
    let army = {
        minAge: 18,
        maxAge: 27,
        canJoin(user) {
          return user.age >= this.minAge && user.age < this.maxAge;
        }
      };
      
      let users = [
        {age: 16},
        {age: 20},
        {age: 23},
        {age: 30}
      ];
      
      // find users, for who army.canJoin returns true
      let soldiers = users.filter(army.canJoin, army);
      
      alert(soldiers.length); // 2
      alert(soldiers[0].age); // 20
      alert(soldiers[1].age); // 23
}