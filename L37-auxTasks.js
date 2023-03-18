function doTask1(callback) {
    setTimeout(() => callback('Task 1'), 300);
  }
  
function doTask2(callback) {
    setTimeout(() => callback('Task 2'), 300);
  }
  
function doTask3(callback) {
    setTimeout(() => callback('Task 3'), 300);
}

module.exports.doTask1 = doTask1;
module.exports.doTask2 = doTask2;
module.exports.doTask3 = doTask3;
  