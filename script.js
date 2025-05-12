document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const questions = document.querySelectorAll('form > div');
    let correctAnswers = 0;
    let totalQuestions = questions.length;
    let wrongQuestions = [];
  
    questions.forEach((question, index) => {
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
  
      if (selectedAnswer) {
        if (selectedAnswer.value === 'certo') {
          correctAnswers++;
        } else {
          wrongQuestions.push(`Pergunta ${index + 1}`);
        }
      }
    });
  
    const percentage = (correctAnswers / totalQuestions) * 100;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Você acertou ${correctAnswers} de ${totalQuestions} perguntas.</h2>`;
    resultado.innerHTML += `<p>Porcentagem de acertos: ${percentage.toFixed(2)}%</p>`;
  
    const animacao = document.getElementById('animacao');
  
    if (percentage >= 80) {
      resultado.innerHTML += `<p><strong>Parabéns! Você ganhou o prêmio 🍣🐼</strong></p>`;
      animacao.style.display = 'block';
    } else {
      resultado.innerHTML += `<p><strong>Ops! Você precisa acertar pelo menos 80%. Tente novamente!</strong></p>`;
      animacao.style.display = 'none';
    }
  
    if (wrongQuestions.length > 0) {
      resultado.innerHTML += `<h3>Você errou as seguintes perguntas:</h3><ul>`;
      wrongQuestions.forEach(question => {
        resultado.innerHTML += `<li>${question}</li>`;
      });
      resultado.innerHTML += `</ul>`;
    }
  });
  