export function getStudentAverage(students) {
    /* objeto de acumulación*/
    let ans = { classAverage: 0, students: [] }
    /* recorrido sobre arreglo*/
    students.forEach(s => {
      /* obtención de nombre */
      let name = s.name
      /* obtención de avr haciendo suma con reduce y dividiento entre el total de valores en el arreglo */
      let avr = s.grades.reduce((a, b) => a + b) / s.grades.length
      /* acumulación de avr con un promedio fraccionado */
      ans.classAverage += avr / students.length
      /* adición de data al array2 con truncamiento de decimales */
      ans.students.push({ name:name, average: parseFloat(avr.toFixed(2)) })
    })
    /* truncamiento de decimales al atributo cA */
    ans.classAverage = parseFloat(ans.classAverage.toFixed(2))
    /* return */
    return ans
  }