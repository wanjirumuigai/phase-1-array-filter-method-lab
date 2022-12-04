// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Sammy', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    let listDrivers = []
    
        
        array.filter(function (item) {
            if (item.toLowerCase() == string.toLowerCase() ) {
            listDrivers.push(item);

        }
        })
        return listDrivers;
        
    }
    
    
function fuzzyMatch(array, string) {
    let firstCharMatch = []  
        
    array.filter(function (item) {

        if (string.charAt(0).toLowerCase() == item.charAt(0).toLowerCase() ) {
            firstCharMatch.push(item);
    }
    })
    return firstCharMatch;
}



function matchName(array,string) {
    let driverObjects = []
    array.filter(function (item) {
        if (item.name == string){
          driverObjects.push(item)
        }
    })
    return driverObjects;
  }


// function matchName(arr, name){
//     const namedDrivers = []
//     arr.filter(function(item){
//       return (item.name == name) ? namedDrivers.push(item) : "None"
//     })
//     return namedDrivers
//   }