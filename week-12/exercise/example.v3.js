var students = [
  {
    name: 'Sam',
    attendedToday: false
  },
  {
    name: 'Sasha',
    attendedToday: true
  },
  {
    name: 'Hyela',
    attendedToday: true
  },
  {
    name: 'Volha',
    attendedToday: true
  },
  {
    name: 'Myoung',
    attendedToday: true
  }
];

var studentStatus = ' is here today in class.';

function outputStudents(array){
  for (var i = 0; i < array.length; i++){

      if (array[i].attendedToday === true){
          console.log(array[i].name + studentStatus);
      } else {
        console.log(array[i].name + ' did not attend today.');
      }
  }
}

outputStudents(students);
