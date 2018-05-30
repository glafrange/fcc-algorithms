var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
    this.setFirstName = function(first) {
      firstAndLast = first + " " + firstAndLast.split(" ")[1];
    };
  
    this.setLastName = function(last) {
      firstAndLast = firstAndLast.split(" ")[0] + " " + last;
    };
  
    this.setFullName = function(fullName) {
      firstAndLast = fullName;
    };
    
    this.getFullName = function() {
      return firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[1];
    };
    
    this.getFirstName = function() {
      return firstAndLast.split(" ")[0];
    };
    
    this.getLastName = function() {
      return firstAndLast.split(" ")[1];
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
