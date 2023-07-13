// // const day = document.getElementById('day')
// const getCurrentDay = () => {
//     let weekDay = new Array(7);
//     weekDay[0] = "Sunday";
//     weekDay[1] = "Monday";
//     weekDay[2] = "Tuesday";
//     weekDay[3] = "Wednesday";
//     weekDay[4] = "Thursday";
//     weekDay[5] = "Friday";
//     weekDay[6] = "Satuarday";
//     let CurrentTime = new Date();
//     days = weekDay[CurrentTime.getDay()];
//     let day = document.getElementById('day')

//     day.innerText = days;
// }

// getCurrentDay();


const getCurrentDay = () => {
    let weekDays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    let currentDate = new Date();
    let dayElement = document.getElementById('day');
    let dateElement = document.getElementById('date');
  
    let day = weekDays[currentDate.getDay()];
    let date = currentDate.toLocaleDateString('en-US', { dateStyle: 'long' });
  
    dayElement.innerText = day;
    dateElement.innerText = date;
  };
  
  getCurrentDay();
  