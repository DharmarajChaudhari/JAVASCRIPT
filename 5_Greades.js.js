let score = prompt("Enter your score");
score = Number.parseInt(score);

if (score<25)

{
    console.log("F");
}

else if(score>=25<45)

{
   console.log("E");
}

else if(score>=45<50)

{
  console.log("D"); 
}

else if(score>50<60)
{
  console.log("C");
}

else if(score>=60<80)

{
  console.log("B")
}

else

{
 console.log("A");
}