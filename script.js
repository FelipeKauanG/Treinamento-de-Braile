var palavra = document.getElementById("palavra")

var texto = document.getElementById("texto")
var submit = document.getElementById("submit")
var header = document.getElementById("header")

var palavras = ['empatia', 'aurelio', 'conjuge', 'embuste', 'excecao', 'carater', 'efemero', 'prolixo', 'verbete', 'idilico', 'analogo', 'genuino', 'estoria', 'sublime', 'familia', 'pesames', 'inferir', 'apatico', 'sucinto', 'acepcao', 'redimir', 'astucia', 'prodigo', 'cultura', 'audacia', 'recesso', 'estigma', 'virtude', 'iconico', 'refutar', 'soberba', 'exortar', 'cinismo', 'estavel', 'morbido', 'mitigar', 'trivial', 'aspecto', 'sintese', 'luxuria', 'sucesso', 'cordial', 'alegria', 'imputar', 'anatema', 'escoria', 'emergir', 'ademais', 'orgulho', 'candura', 'deboche', 'excerto', 'litigio', 'atraves', 'almejar', 'contudo', 'frivolo', 'saudade', 'coragem', 'oriundo', 'escroto', 'ambiguo', 'alcunha', 'salutar', 'amizade', 'austero', 'racismo', 'quimera', 'ambicao', 'sensato', 'excesso', 'relacao', 'imersao', 'erudito', 'fomento', 'modesto', 'demanda', 'parcial', 'ciencia', 'colosso', 'exotico', 'conciso', 'piedade', 'volatil', 'notorio', 'bizarro', 'vigente', 'isencao', 'padecer', 'hibrido', 'auferir', 'intenso', 'emotivo', 'ansioso', 'inercia', 'sentido', 'despota', 'profano', 'limpido', 'hesitar', 'difusao', 'sordido', 'colapso', 'canalha', 'leviano', 'altivez', 'ousadia', 'exilado', 'ignobil', 'estirpe', 'assento', 'justica', 'mancebo', 'intuito', 'indagar', 'preciso', 'integro', 'atipico', 'incauto', 'moleque', 'obliquo', 'desafio', 'atenuar', 'olvidar', 'pedante', 'empafia', 'lascivo', 'cuidado', 'impacto', 'volupia', 'palavra', 'devasso', 'deleite', 'definir', 'deveras', 'dificil', 'opiniao', 'afeicao', 'atitude', 'todavia', 'varonil', 'ensejar', 'escasso', 'acefalo', 'revogar', 'singelo', 'catarse', 'abrange', 'dirimir', 'confiar', 'retidao', 'aptidao', 'voluvel', 'deferir', 'afeccao', 'ermitao', 'conduta', 'cativar', 'espurio', 'latente', 'cogitar', 'decisao', 'correto', 'quesito', 'soberbo', 'trafego', 'absorto', 'arcaico', 'neofito', 'desidia', 'planeta', 'flamula', 'intriga', 'abrupto', 'simbolo', 'lugubre', 'regular', 'debalde', 'esperto', 'formoso', 'advento', 'onirico', 'atencao', 'certeza', 'objecao', 'chacota', 'diferir', 'verdade', 'vaidade', 'imbuido', 'antemao', 'devocao', 'incitar', 'garrida', 'caramba', 'aparato', 'avareza', 'aflicao', 'acender', 'periodo', 'obsceno', 'enfoque', 'analoga', 'exemplo', 'pandego', 'conexao', 'impasse', 'sofisma', 'ciclico', 'mudanca']



var escolhido = Math.floor(Math.random() * parseInt(palavras.length))

palavra.innerHTML = palavras[escolhido]




submit.addEventListener("click", function(){


    if (palavra.innerHTML.toLowerCase() == texto.value.toLocaleLowerCase()){
        alert(`Acertou a palavra corretamente! ${palavra.innerHTML}`)
    }else{
        alert(`Errou, a palavra era \x22${palavra.innerHTML}\x22`)
    }
    var escolhido = Math.floor(Math.random() * parseInt(palavras.length))

    palavra.innerHTML = palavras[escolhido]
})

