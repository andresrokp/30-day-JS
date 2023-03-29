
async function runCode() {
  const strings = [];
  strings.push( await doTask1() )
  strings.push( await doTask2() )
  strings.push( await doTask3() )
  return strings
}

function doTask1() {
    return new Promise(resolve=>setTimeout(() => resolve('Task 1'), 300));
}
  
function doTask2() {
    return new Promise(resolve=>setTimeout(() => resolve('Task 2'), 300));
}
  
function doTask3() {
    return new Promise(resolve=>setTimeout(() => resolve('Task 3'), 300));
}

console.log(runCode())