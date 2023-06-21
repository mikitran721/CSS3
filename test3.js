/* 
bind duoc dung de xac dinh tham so this cho func
bind con bind dc cac tham so truyen cho func -> dung de viet partial func
*/
function log(level, time, message) {
  console.log(level + " – " + time + ": " + message);
}

// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday = log.bind(null, "Error", "Today");

// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die.");
// Error – Today: Server die.

/* ap dung call, array */
Math.max(4, 3, 2, 10);
// su dung call, set this=null
Math.max.call(null, 4, 3, 2, 10);
// sd apply de truyen mot array chua t.so
Math.max.apply(null, [4, 3, 2, 10]);

// call va apply thuong sd de muon ham - borrow function
function test(firstParam, secondParam, thirdParam) {
  let args = Array.apply(null, arguments);
  //   arguments ko phai la array, nen can chuyen no sang lam array de phuc vu xu ly
  console.log(args);
}
test(1, 3, 6);

//tao spy, monkey-patching;
let computer = {
  accessWeb: function (site) {
    console.log("Go to: ", site);
  },
};

const oldFunction = computer.accessWeb;
//tao function = ham moi
computer.accessWeb = function () {
  console.log("con ga bat dau action");
  oldFunction.apply(this, arguments);
  console.log("Con ga da vao web");
};
computer.accessWeb("codekhocotoi.io.vn");
