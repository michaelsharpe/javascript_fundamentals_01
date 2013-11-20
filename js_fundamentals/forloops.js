// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (i = 0; i <= 20; i++) {
  if (i == 0 ) {
    console.log(i + " is nil.");
  } else if ((i % 2) == 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}

0 is nil.
1 is odd.
2 is even.
3 is odd.
4 is even.
5 is odd.
6 is even.
7 is odd.
8 is even.
9 is odd.
10 is even.
11 is odd.
12 is even.
13 is odd.
14 is even.
15 is odd.
16 is even.
17 is odd.
18 is even.
19 is odd.
20 is even.

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (i = 0; i <= 10; i++) {
  result = i * 9;
  console.log(i.toString() + "*" + 9 + " = " + result.toString());
}

0*9 = 0
1*9 = 9
2*9 = 18
3*9 = 27
4*9 = 36
5*9 = 45
6*9 = 54
7*9 = 63
8*9 = 72
9*9 = 81
10*9 = 90 

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    result = i * j;
    console.log(i.toString() + "*" + j.toString() + " = " + result.toString());
  }
}

1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
1*5 = 5
1*6 = 6
1*7 = 7
1*8 = 8
1*9 = 9
1*10 = 10
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20
3*1 = 3
3*2 = 6
3*3 = 9
3*4 = 12
3*5 = 15
3*6 = 18
3*7 = 21
3*8 = 24
3*9 = 27
3*10 = 30
4*1 = 4
4*2 = 8
4*3 = 12
4*4 = 16
4*5 = 20
4*6 = 24
4*7 = 28
4*8 = 32
4*9 = 36
4*10 = 40
5*1 = 5
5*2 = 10
5*3 = 15
5*4 = 20
5*5 = 25
5*6 = 30
5*7 = 35
5*8 = 40
5*9 = 45
5*10 = 50
6*1 = 6
6*2 = 12
6*3 = 18
6*4 = 24
6*5 = 30
6*6 = 36
6*7 = 42
6*8 = 48
6*9 = 54
6*10 = 60
7*1 = 7
7*2 = 14
7*3 = 21
7*4 = 28
7*5 = 35
7*6 = 42
7*7 = 49
7*8 = 56
7*9 = 63
7*10 = 70
8*1 = 8
8*2 = 16
8*3 = 24
8*4 = 32
8*5 = 40
8*6 = 48
8*7 = 56
8*8 = 64
8*9 = 72
8*10 = 80
9*1 = 9
9*2 = 18
9*3 = 27
9*4 = 36
9*5 = 45
9*6 = 54
9*7 = 63
9*8 = 72
9*9 = 81
9*10 = 90
10*1 = 10
10*2 = 20
10*3 = 30
10*4 = 40
10*5 = 50
10*6 = 60
10*7 = 70
10*8 = 80
10*9 = 90
10*10 = 100 

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var assignGrade = function(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
};

for (i = 60; i <= 100; i++){
  grade = assignGrade(i);
  if (grade == "A") {
    console.log("For " + i + ",you got an " + grade);
  } else {
    console.log("For " + i + ",you got a " + grade);
  };
};

For 60,you got a D 
For 61,you got a D 
For 62,you got a D 
For 63,you got a D 
For 64,you got a D 
For 65,you got a D 
For 66,you got a D 
For 67,you got a D 
For 68,you got a D 
For 69,you got a D 
For 70,you got a C 
For 71,you got a C 
For 72,you got a C 
For 73,you got a C 
For 74,you got a C 
For 75,you got a C 
For 76,you got a C 
For 77,you got a C 
For 78,you got a C 
For 79,you got a C 
For 80,you got a B 
For 81,you got a B 
For 82,you got a B 
For 83,you got a B 
For 84,you got a B 
For 85,you got a B 
For 86,you got a B 
For 87,you got a B 
For 88,you got a B 
For 89,you got a B 
For 90,you got an A
For 91,you got an A
For 92,you got an A
For 93,you got an A
For 94,you got an A
For 95,you got an A
For 96,you got an A
For 97,you got an A
For 98,you got an A
For 99,you got an A
For 100,you got an A 

