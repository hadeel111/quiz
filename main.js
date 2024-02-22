const correctAnswers = ["1997", "Microsoft"];
        let currentQuestionIndex = 0;

        function checkAnswer(btn) {
            const selectedAnswer = btn.innerText;
            if (selectedAnswer === correctAnswers[currentQuestionIndex]) {
                btn.classList.add('correct');
                document.getElementById('next-btn').style.display = 'block';
            } else {
                btn.classList.add('incorrect');
                if (currentQuestionIndex === 1) {
                    alert('Wrong answer!');
                }
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < 2) {
                const questions = ["What language is Visual Studio primarily used for?", "Which company owns Visual Studio?" ];
                const choices = ["Microsoft", "Google", "Apple", "Edge"];
                
            
                document.getElementById('question').innerText = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}`;
                const answerButtons = document.querySelectorAll('.btn');
                answerButtons.forEach((btn, index) => {
                    btn.innerText = choices[index];
                    btn.classList.remove('correct', 'incorrect');
                });
                
                document.getElementById('next-btn').style.display = 'block';
            } else {
                alert('Quiz completed!');
            }
        }