const correctAnswer = ["C", "D", "C", "C", "B"];
//To capture the form with a class called "quiz-form"
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");

form.addEventListener("submit", event =>{
  event.preventDefault();
  //console.log("---")

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
  console.log(userAnswers);

  userAnswers.forEach((answer, index)=>{
    if(answer===correctAnswer[index]){
      //console.log("Correct Answer", index);
      score += 1;
      question[index].classList.add("correct");
    }else{
      question[index].classList.add("wrong");
    }
  });
  console.log(score);


  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `You scored ${score}/5!`;
});