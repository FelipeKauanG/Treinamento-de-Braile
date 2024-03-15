var palavra = document.getElementById("palavra")

var texto = document.getElementById("texto")
var submit = document.getElementById("submit")
var header = document.getElementById("header")

var palavrassemacento = ['empatia', 'aurelio', 'conjuge', 'embuste', 'excecao', 'carater', 'efemero', 'prolixo', 'verbete', 'idilico', 'analogo', 'genuino', 'estoria', 'sublime', 'familia', 'pesames', 'inferir', 'apatico', 'sucinto', 'acepcao', 'redimir', 'astucia', 'prodigo', 'cultura', 'audacia', 'recesso', 'estigma', 'virtude', 'iconico', 'refutar', 'soberba', 'exortar', 'cinismo', 'estavel', 'morbido', 'mitigar', 'trivial', 'aspecto', 'sintese', 'luxuria', 'sucesso', 'cordial', 'alegria', 'imputar', 'anatema', 'escoria', 'emergir', 'ademais', 'orgulho', 'candura', 'deboche', 'excerto', 'litigio', 'atraves', 'almejar', 'contudo', 'frivolo', 'saudade', 'coragem', 'oriundo', 'escrita', 'ambiguo', 'alcunha', 'salutar', 'amizade', 'austero', 'racismo', 'quimera', 'ambicao', 'sensato', 'excesso', 'relacao', 'imersao', 'erudito', 'fomento', 'modesto', 'demanda', 'parcial', 'ciencia', 'colosso', 'exotico', 'conciso', 'piedade', 'volatil', 'notorio', 'bizarro', 'vigente', 'isencao', 'padecer', 'hibrido', 'auferir', 'intenso', 'emotivo', 'ansioso', 'inercia', 'sentido', 'despota', 'profano', 'limpido', 'hesitar', 'difusao', 'sordido', 'colapso', 'canalha', 'leviano', 'altivez', 'ousadia', 'exilado', 'ignobil', 'estirpe', 'assento', 'justica', 'mancebo', 'intuito', 'indagar', 'preciso', 'integro', 'atipico', 'incauto', 'moleque', 'obliquo', 'desafio', 'atenuar', 'olvidar', 'pedante', 'empafia', 'lascivo', 'cuidado', 'impacto', 'volupia', 'palavra', 'devasso', 'deleite', 'definir', 'deveras', 'dificil', 'opiniao', 'afeicao', 'atitude', 'todavia', 'varonil', 'ensejar', 'escasso', 'acefalo', 'revogar', 'singelo', 'catarse', 'abrange', 'dirimir', 'confiar', 'retidao', 'aptidao', 'voluvel', 'deferir', 'afeccao', 'ermitao', 'conduta', 'cativar', 'espurio', 'latente', 'cogitar', 'decisao', 'correto', 'quesito', 'soberbo', 'trafego', 'absorto', 'arcaico', 'neofito', 'desidia', 'planeta', 'flamula', 'intriga', 'abrupto', 'simbolo', 'lugubre', 'regular', 'debalde', 'esperto', 'formoso', 'advento', 'onirico', 'atencao', 'certeza', 'objecao', 'chacota', 'diferir', 'verdade', 'vaidade', 'imbuido', 'antemao', 'devocao', 'incitar', 'garrida', 'caramba', 'aparato', 'avareza', 'aflicao', 'acender', 'periodo', 'obsceno', 'enfoque', 'analoga', 'exemplo', 'pandego', 'conexao', 'impasse', 'sofisma', 'ciclico', 'mudanca']

var palavrascomacento = ['empatia', 'aurélio', 'cônjuge', 'embuste', 'exceção', 'caráter', 'efêmero', 'prolixo', 'verbete', 'idílico', 'análogo', 'genuíno', 'estória', 'sublime', 'família', 'pêsames', 'inferir', 'apático', 'sucinto', 'acepção', 'redimir', 'astúcia', 'pródigo', 'cultura', 'audácia', 'recesso', 'estigma', 'virtude', 'icônico', 'refutar', 'soberba', 'exortar', 'cinismo', 'estável', 'mórbido', 'mitigar', 'trivial', 'aspecto', 'síntese', 'luxúria', 'sucesso', 'cordial', 'alegria', 'imputar', 'anátema', 'escória', 'emergir', 'ademais', 'orgulho', 'candura', 'deboche', 'excerto', 'litígio', 'através', 'almejar', 'contudo', 'frívolo', 'saudade', 'coragem', 'oriundo', 'escroto', 'ambíguo', 'alcunha', 'salutar', 'amizade', 'austero', 'racismo', 'quimera', 'ambição', 'sensato', 'excesso', 'relação', 'imersão', 'erudito', 'fomento', 'modesto', 'demanda', 'parcial', 'ciência', 'colosso', 'exótico', 'conciso', 'piedade', 'volátil', 'notório', 'bizarro', 'vigente', 'isenção', 'padecer', 'híbrido', 'auferir', 'intenso', 'emotivo', 'ansioso', 'inércia', 'sentido', 'déspota', 'profano', 'límpido', 'hesitar', 'difusão', 'sórdido', 'colapso', 'canalha', 'leviano', 'altivez', 'ousadia', 'exilado', 'ignóbil', 'estirpe', 'assento', 'justiça', 'mancebo', 'intuito', 'indagar', 'preciso', 'íntegro', 'atípico', 'incauto', 'moleque', 'oblíquo', 'desafio', 'atenuar', 'olvidar', 'pedante', 'empáfia', 'lascivo', 'cuidado', 'impacto', 'volúpia', 'palavra', 'devasso', 'deleite', 'definir', 'deveras', 'difícil', 'opinião', 'afeição', 'atitude', 'todavia', 'varonil', 'ensejar', 'escasso', 'acéfalo', 'revogar', 'singelo', 'catarse', 'abrange', 'dirimir', 'confiar', 'retidão', 'aptidão', 'volúvel', 'deferir', 'afecção', 'ermitão', 'conduta', 'cativar', 'espúrio', 'latente', 'cogitar', 'decisão', 'correto', 'quesito', 'soberbo', 'tráfego', 'absorto', 'arcaico', 'neófito', 'desídia', 'planeta', 'flâmula', 'intriga', 'abrupto', 'símbolo', 'lúgubre', 'regular', 'debalde', 'esperto', 'formoso', 'advento', 'onírico', 'atenção', 'certeza', 'objeção', 'chacota', 'diferir', 'verdade', 'vaidade', 'imbuído', 'antemão', 'devoção', 'incitar', 'garrida', 'caramba', 'aparato', 'avareza', 'aflição', 'acender', 'período', 'obsceno', 'enfoque', 'análoga', 'exemplo', 'pândego', 'conexão', 'impasse', 'sofisma', 'cíclico', 'mudança']


var escolhido = Math.floor(Math.random() * parseInt(palavrassemacento.length))

palavra.innerHTML = palavrassemacento[escolhido]


submit.addEventListener("click", function(){
    if (palavra.innerHTML.toLowerCase() == texto.value.toLowerCase()){
        alert(`Acertou a palavra corretamente! ${palavrascomacento[escolhido]}`)
    }else{
        alert(`Errou, a palavra era \x22${palavrascomacento[escolhido]}\x22`)
    }
    
    escolhido = Math.floor(Math.random() * parseInt(palavrassemacento.length))
    texto.value = ""
    palavra.innerHTML = palavrassemacento[escolhido]
})

