const perguntas = [
 
    {
      pergunta: "Quem é tradicionalmente considerado o autor do livro de Gênesis?",
      respostas:[
        "Moisés",
        "Davi",
        "Josué",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o primeiro versículo da Bíblia?",
      respostas:[
        "Gênesis 1:1",
        "Êxodo 20:1",
        "Levítico 1:1",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do irmão de Moisés, que se tornou o porta-voz dele perante o faraó?",
      respostas:[
        "Aarão",
        "Josué",
        "Miriam",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos capítulos tem o livro de Deuteronômio?",
      respostas:[
        "24",
        "34",
        "44",
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o pai de Jacó, que também é conhecido como Israel?",
      respostas:[
        "Isaque",
        "Abraão",
        "José",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tema principal do livro de Êxodo?",
      respostas:[
        "A peregrinação de Israel no deserto",
        "A criação do mundo",
        "As guerras de Israel contra seus inimigos",
      ],
      correta: 0
    },
    {
      pergunta: "Onde Moisés recebeu os Dez Mandamentos?",
      respostas:[
        "Monte Sinai",
        "Monte Carmelo",
        "Monte das Oliveiras",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o último livro do Pentateuco?",
      respostas:[
        "Deuteronômio",
        "Levítico",
        "Números",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o pai de Abraão?",
      respostas:[
        "Tera",
        "Nahor",
        "Harã",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o significado do nome 'Levítico'?",
      respostas:[
        "Relacionado a Leví, uma das tribos de Israel",
        "Levita",
        "Lei de Deus",
      ],
      correta: 0
    },
  
  
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template') 
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de'+ totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let respostas of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf (respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }  
    
    
     quizItem.querySelector('dl').appendChild(dt)
   }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild (quizItem)
  
  }