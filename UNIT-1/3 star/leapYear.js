var year = 1900;
if (year % 100 == 0) {
  if (year % 400 == 0) console.log("Leap Year");
  else console.log("Not a Leap year");
} else {
  if (year % 4 == 0) console.log("Leap Year");
  else console.log("Not a Leap year");
}

//or
if (year % 100 == 0 && year % 400 == 0)
    console.log("Leap year");
else {
    if (year % 100 != 0 && year % 4 == 0)
    console.log("leap Year");
else
    console.log("Not a Leap yea");
}

// or
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log("Leap year");
else
    console.log("Not a leap year");
