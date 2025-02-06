const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`
 progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
 progressLabel.innerText = allQuotes[completedGoalsCount]