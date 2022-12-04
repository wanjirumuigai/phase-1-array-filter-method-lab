const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    
    for (const i in array) {
        
        if (array[i].toLowerCase() == string.toLowerCase() ) {
            return string;

        }
      
    }
    
}
//console.log(findMatching(drivers,'sally'));
console.log(drivers.filter(findMatching))
