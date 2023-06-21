var person = {
  firstName: "Hoang",
  lastName: "Pham",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

//Ở đây this sẽ là object person, chạy đúng
person.showName(); //Hoang Pham.

// var showNameFunc = person.showName; //Gán function vào biến showNameFunc
let showNameFunc = person.showName.bind(person);
showNameFunc();
