const correctAnswers = ["B", "B", "B", "B"]
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
//const resultSpan = document.querySelector("span.text-primary")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let answers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value]

  //calculate score
  let score = 0
  let scorePercent
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1
    }
  })
  scorePercent = (score / 4) * 100

  //show score
  result.querySelector("span").textContent = `${scorePercent}%`
  result.classList.remove("d-none")
  result.classList.add("d-block")
})
