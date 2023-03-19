let { doTask1, doTask2, doTask3 } = require('./L37-auxTasks');

function runCode() {
  const strings = [];
  return new Promise((resolve) => {
        doTask1().then(response => {
                    strings.push(response);
                    return doTask2();
                 })
                 .then(response => {
                    strings.push(response);
                    return doTask3();
                 })
                 .then(response => {
                    strings.push(response)
                 })
                 .then(()=>{return resolve(strings)})        
    })
}

runCode().then(response => console.log(response))


// original
function runCodeOriginal() {
    const strings = [];
    return new Promise((resolve) => {
      doTask1((rta1) => {
        strings.push(rta1);
        doTask2((rta2) => {
          strings.push(rta2);
          doTask3((rta3) => {
            strings.push(rta3);
            resolve(strings);
          })
        })
      })
    })
  }