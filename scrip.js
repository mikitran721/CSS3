// prototype ~ pattern
//hay sd construction pattern hon
function Person1() {}

Person1.prototype.firstName = "Miki";
Person1.prototype.lastName = "Tran";
Person1.prototype.showName = function () {
  console.log(this.firstName + this.lastName);
};

const psn1 = new Person1();
console.log(psn1.firstName + " " + psn1.lastName);
psn1.showName();

/* su dung . va [..] de truy cap du lieu + func
sd [] linh hoat hon
*/
var Person2 = {
  firstName: "Miki",
  lastName: "Tran",
  50: "Hi",
  showName: function () {
    console.log(this.firstName + this.lastName);
  },
};

// console.log(Person2.50); //error
console.log(Person2[50]); //ok
console.log(Person2["showName"]()); //ok

// duyet qua fields cua object
for (let prop in Person2) {
  console.log(prop);
}

// js la dynamic typing -> co the xoa funct + fields cua no
delete Person2.lastName; //xoa
Person2.lName = "Just adding";

// dung anonymous func
$("button").click(function () {
  person.showname();
});

// dung bind
$("button").click(person.showName.bind(person));

// anonymous function
var person = {
  firstName: "Miki",
  lastName: "Tran",
  friends: ["Mai", "Poo", "Phoong", "Ngaoo"],
  showName: function () {
    console.log(this.firstName + this.lastName);
  },
  showFriend: function () {
    for (let i = 0; i < this.friends.length; i++) {
      console.log(this.firstName + "have a friend name " + this.friends[i]);
    }
  },
  showFriendThis: function () {
    let this_ = this;
    this.friends.forEach(function (fr) {
      console.log(this_.firstName + "have a friend name " + fr);
    });
  },
};

// ham khi gan vao mot bien
let showNameFunc = person.showName;
