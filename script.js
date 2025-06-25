// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Oculta todas as seções, exceto a de introdução, ao carregar a página
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'introduction') {
            section.classList.add('hidden');
        }
    });

    // Carrega a primeira questão do quiz
    loadQuestion(currentQuestionIndex);
});

// Função para exibir uma seção específica e ocultar as outras
function showSection(sectionId) {
    // Oculta todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    // Remove a classe 'hidden' da seção desejada para exibi-la
    document.getElementById(sectionId).classList.remove('hidden');
    // Rola a página para o topo ao mudar de seção
    window.scrollTo(0, 0);
}

// Função auxiliar para formatar e escapar código HTML
// Garante que caracteres como '<' e '>' sejam exibidos como texto e não como tags HTML
// Também substitui tabulações por espaços para consistência de indentação
function formatCode(text) {
    // Substitui tabulações por 4 espaços para uma indentação consistente
    text = text.replace(/\t/g, '    ');
    // Escapa caracteres HTML especiais para que o código seja exibido corretamente
    return text
        .replace(/&/g, "&amp;")  // Substitui '&' por '&amp;'
        .replace(/</g, "&lt;")   // Substitui '<' por '&lt;'
        .replace(/>/g, "&gt;")   // Substitui '>' por '&gt;'
        .replace(/"/g, "&quot;") // Substitui '"' por '&quot;'
        .replace(/'/g, "&#039;"); // Substitui ''' por '&#039;'
}

// Array de objetos, onde cada objeto representa uma questão do quiz
const questions = [
    {
        id: 1,
        question: "A manipulação eficiente da memória é essencial na implementação de filas, especialmente em ambientes com recursos limitados. Com base nisso, analise as afirmações a seguir:<br><br>I. Em filas estáticas, pode haver desperdício de memória após várias remoções de elementos, mesmo que ainda haja espaço disponível no vetor.<br>II. O uso de vetor circular em filas estáticas permite reutilizar posições liberadas no início, evitando fragmentação interna.<br><br>Com relação a essas afirmações, assinale a alternativa correta:",
        options: [
            "a) As duas são verdadeiras, e a II justifica corretamente a I.",
            "b) As duas são verdadeiras, mas a II não justifica a I.",
            "c) A I é verdadeira, e a II é falsa.",
            "d) A I é falsa, e a II é verdadeira.",
            "e) Ambas são falsas."
        ],
        correctAnswer: "b",
        explanation: "Ambas as afirmações são verdadeiras. A afirmação I descreve um problema comum em filas estáticas lineares (sem vetor circular), onde o espaço no início do vetor pode se tornar inutilizável após remoções sucessivas. A afirmação II apresenta a solução para esse problema: o uso de um vetor circular, que permite a reutilização das posições. No entanto, a afirmação II não 'justifica' a I, mas sim apresenta uma solução para a questão levantada na afirmação I. A I é um problema, e a II é uma solução para o problema, não uma justificativa do problema em si."
    },
    {
        id: 2,
        question: "Filas dinâmicas são muito usadas em sistemas com fluxo contínuo de dados, por sua flexibilidade. Considere:<br><br>I. A fila dinâmica se adapta bem a variações constantes porque pode crescer ou diminuir conforme a necessidade.<br>II. Numa fila dinâmica, cada elemento aponta para seu antecessor, facilitando a exclusão.<br><br>Sobre essas afirmações, marque a correta:",
        options: [
            "a) Ambas são verdadeiras, e a II justifica a I.",
            "b) Ambas são verdadeiras, mas a II não justifica a I.",
            "c) A I é verdadeira, e a II é falsa.",
            "d) A I é falsa, e a II é verdadeira.",
            "e) Ambas são falsas."
        ],
        correctAnswer: "c",
        explanation: "A afirmação I é verdadeira: filas dinâmicas são flexíveis e se adaptam ao tamanho da demanda. A afirmação II é falsa: em filas dinâmicas, os elementos geralmente apontam para seu *sucessor* (o próximo elemento), não para o antecessor. Isso facilita a inserção (no final) e a remoção (no início) seguindo a lógica FIFO. Apontar para o antecessor tornaria a remoção no início mais complexa ou ineficiente para a estrutura de fila."
    },
    {
        id: 3,
        question: "Pilha e fila são estruturas lineares amplamente usadas. A pilha segue LIFO (último a entrar, primeiro a sair), e a fila segue FIFO (primeiro a entrar, primeiro a sair). Analise:<br><br>I. A pilha é ideal para lidar com chamadas recursivas.<br>II. A fila é adequada para casos em que a ordem de chegada define o atendimento, como impressões.<br>III. Pilhas e filas não compartilham nenhuma característica estrutural, pois a pilha seria bidimensional.<br>IV. Ambas podem ser implementadas com memória estática ou dinâmica.<br><br>Está correto o que se afirma em:",
        options: [
            "a) I e II",
            "b) I, II e IV",
            "c) II e III",
            "d) I, III e IV",
            "e) I, II, III e IV"
        ],
        correctAnswer: "b",
        explanation: "I e II são verdadeiras, pois descrevem aplicações corretas de pilha (recursão) e fila (ordem de chegada/impressão). III é falsa, pois tanto pilhas quanto filas são estruturas lineares e compartilham características estruturais básicas, como a forma de organização sequencial dos dados; a pilha não é bidimensional. IV é verdadeira, ambas podem ser implementadas de forma estática (com vetor) ou dinâmica (com listas encadeadas)."
    },
    {
        id: 4,
        question: "Considere as características de filas estáticas e dinâmicas:<br><br>I. Filas estáticas alocam memória em tempo de compilação, o que pode causar desperdício.<br>II. Filas dinâmicas sempre são mais eficientes.<br>III. Filas estáticas são mais fáceis de implementar, pois não usam ponteiros.<br>IV. Filas dinâmicas podem variar de tamanho conforme a memória disponível.<br><br>Assinale a opção correta:",
        // Questão 4 não possui trechos de código para exibir.
        options: [
            "a) I, III e IV",
            "b) II, III e IV",
            "c) I, II e III",
            "d) I e IV",
            "e) I, II, III e IV"
        ],
        correctAnswer: "a",
        explanation: "I é verdadeira: alocam memória fixa em tempo de compilação, podendo levar a desperdício. II é falsa: 'sempre' é uma palavra forte; embora dinâmicas sejam flexíveis, podem ter overhead de alocação/desalocação. III é verdadeira: a implementação de filas estáticas com vetores é conceitualmente mais simples, não exigindo o uso explícito de ponteiros para encadeamento. IV é verdadeira: filas dinâmicas alocam memória em tempo de execução e podem crescer/diminuir conforme a necessidade e a memória disponível no sistema."
    },
    {
        id: 5,
        // Enunciado da questão 5 corrigido para ser mais claro
        question: "Com base nos dois trechos de código sobre filas (um estático e outro dinâmico) apresentados abaixo, analise as afirmações a seguir e assinale a alternativa que contém apenas as afirmações VERDADEIRAS:<br><br>I. O Código 1 usa aritmética modular para percorrer vetor circular.<br>II. O Código 2 acessa os elementos via ponteiros.<br>III. O Código 1 pode imprimir lixo se o campo 'fim' não for atualizado corretamente.<br>IV. O Código 2 tem maior risco de vazamento de memória na exibição.",
        code1: formatCode(`
// Código 1: Exemplo de Fila Estática Circular em C para Exibição
// Define a capacidade máxima da fila. Este é um limite fixo para o array subjacente.
#define MAX_SIZE 5 

// Estrutura da Fila Estática.
typedef struct {
    int elementos[MAX_SIZE]; // Array (vetor) para armazenar os elementos da fila.
    int inicio;              // Índice que aponta para o primeiro elemento válido da fila.
    int fim;                 // Índice que aponta para a próxima posição livre onde um novo elemento seria inserido.
    int count;               // Contador que guarda o número atual de elementos na fila.
} FilaEstatica;

// Função para exibir os elementos da fila estática.
void exibirFilaEstatica(FilaEstatica* f) {
    // Verifica se a fila está vazia. Se 'count' for 0, não há elementos.
    if (f->count == 0) {
        printf("Fila estatica vazia.\\n");
        return; // Sai da função.
    }
    printf("Elementos (Fila Estatica): ");
    int i = f->inicio; // Inicia um índice temporário 'i' a partir do 'inicio' da fila.
    // Loop que percorre 'count' vezes, garantindo que apenas os elementos válidos sejam exibidos.
    for (int k = 0; k < f->count; k++) { 
        printf("%d ", f->elementos[i]); // Imprime o elemento na posição atual de 'i'.
        // Atualiza 'i' para a próxima posição. A aritmética modular (%) é crucial
        // para o comportamento circular: quando 'i' atinge MAX_SIZE, ele "volta" para 0.
        i = (i + 1) % MAX_SIZE; 
    }
    printf("\\n"); // Imprime uma nova linha para formatar a saída.
}
        `),
        code2: formatCode(`
// Código 2: Exemplo de Fila Dinâmica em C para Exibição
// Estrutura para um único nó da fila.
typedef struct NoFila {
    int valor;             // Campo para armazenar o dado do elemento da fila.
    struct NoFila* proximo; // Ponteiro (referência de memória) para o próximo nó na sequência da fila.
} NoFila;

// Estrutura principal da fila dinâmica.
typedef struct {
    NoFila* inicio; // Ponteiro para o primeiro nó da fila (cabeça da lista encadeada).
    NoFila* fim;    // Ponteiro para o último nó da fila. Facilita inserções no final (FIFO).
} FilaDinamica;

// Função para exibir os elementos da fila dinâmica.
void exibirFilaDinamica(FilaDinamica* f) {
    // Verifica se a fila está vazia. Se o ponteiro 'inicio' for NULL, não há nós na fila.
    if (f->inicio == NULL) { 
        printf("Fila dinamica vazia.\\n");
        return; // Sai da função.
    }
    printf("Elementos (Fila Dinamica): ");
    // Cria um ponteiro auxiliar 'atual' e o inicializa com o 'inicio' da fila.
    // Este ponteiro será usado para percorrer a lista sem alterar a estrutura da fila.
    NoFila* atual = f->inicio; 
    // Loop que percorre a fila enquanto o ponteiro 'atual' não for NULL.
    // O último nó da fila tem seu 'proximo' apontando para NULL, marcando o fim.
    while (atual != NULL) {    
        printf("%d ", atual->valor); // Imprime o valor do dado armazenado no nó atual.
        atual = atual->proximo;      // Move o ponteiro 'atual' para o próximo nó, seguindo a sequência.
    }
    printf("\\n"); // Imprime uma nova linha para formatar a saída.
}
        `),
        options: [
            "a) I e II",
            "b) II e III",
            "c) I, II e III",
            "d) I, III e IV",
            "e) I, II, III e IV"
        ],
        correctAnswer: "c",
        explanation: "I é verdadeira: filas estáticas implementadas com vetor circular utilizam aritmética modular (o operador `%`) para gerenciar os índices de início e fim, permitindo a reutilização do espaço. II é verdadeira: filas dinâmicas são baseadas em nós encadeados, e o acesso a esses nós é feito através de ponteiros (referências ao endereço de memória do próximo nó). III é verdadeira: se o controle de 'fim' em uma fila estática não for preciso, o programa pode tentar exibir posições do vetor que não contêm dados válidos da fila, resultando em 'lixo' (valores arbitrários da memória). IV é falsa: vazamento de memória ocorre quando a memória alocada dinamicamente não é liberada após o uso. Na exibição (apenas leitura), não há risco direto de vazamento de memória; o risco seria em operações de remoção ou reinicialização se a liberação não fosse feita corretamente."
    },
    {
        id: 6,
        question: "Em filas dinâmicas, a reinicialização deve desalocar todos os nós corretamente. Analise o código responsável por isso e marque a opção correta:",
        codeSnippet: formatCode(`
// Código de Reinicialização de Fila Dinâmica
// Esta função tem como objetivo liberar toda a memória alocada dinamicamente para os nós de uma fila.
void reinicializarFilaDinamica(FilaDinamica* f) {
    NoFila* atual = f->inicio; // 'atual' começa apontando para o primeiro nó da fila.
    NoFila* proximo;           // Ponteiro temporário para armazenar o endereço do próximo nó.

    // O loop continua enquanto 'atual' não for NULL, ou seja, enquanto houver nós na fila.
    while (atual != NULL) {    
        proximo = atual->proximo; // Salva o endereço do próximo nó ANTES de liberar o nó atual.
                                  // Isso é crucial para não perder a referência para o restante da fila.
        free(atual);             // Libera a memória alocada para o nó que 'atual' está apontando.
        atual = proximo;         // 'atual' avança para o próximo nó que foi salvo.
    }
    // Após o loop, todos os nós foram liberados. A fila agora está vazia.
    // Os ponteiros 'inicio' e 'fim' da estrutura da fila principal devem ser resetados para NULL,
    // indicando que a fila está de fato vazia.
    f->inicio = NULL; 
    f->fim = NULL;    
}
        `),
        options: [
            "a) Só reinicializa se a fila estiver vazia.",
            "b) O while percorre a fila liberando memória de cada elemento.",
            "c) A reinicialização está incompleta porque o ponteiro 'fim' não é atualizado.",
            "d) O código é exclusivo para filas estáticas, pois usa free.",
            "e) O código libera memória do fim para o início."
        ],
        correctAnswer: "b",
        explanation: "Em uma função de reinicialização de fila dinâmica, é essencial percorrer todos os nós da fila e liberar a memória alocada para cada um, um por um, para evitar vazamento de memória. O laço 'while' é o mecanismo comum para fazer isso, avançando para o próximo nó após liberar o atual. A opção 'c' é um erro comum em implementações incompletas: além de liberar os nós, os ponteiros 'início' e 'fim' da fila devem ser resetados (geralmente para NULL) para indicar que a fila está agora vazia."
    },
    {
        id: 7,
        question: "Sobre inserção em fila estática com comportamento circular, assinale a correta:<br><br>a) Elementos são inseridos sempre no início do vetor.<br>b) A verificação de fila cheia ocorre só após a tentativa de inserção.<br>c) A aritmética modular permite reutilizar posições do vetor.<br>d) O vetor é preenchido linearmente, sem reaproveitamento.<br>e) O campo 'início' muda a cada inserção.",
        options: [
            "a) Elementos são inseridos sempre no início do vetor.",
            "b) A verificação de fila cheia ocorre só após a tentativa de inserção.",
            "c) A aritmética modular permite reutilizar posições do vetor.",
            "d) O vetor é preenchido linearmente, sem reaproveitamento.",
            "e) O campo 'início' muda a cada inserção."
        ],
        correctAnswer: "c",
        explanation: "Em uma fila estática com comportamento circular, a **aritmética modular** (usando o operador `%`) é fundamental. Ela permite que os índices 'início' e 'fim' 'girem' pelo vetor, de modo que as posições que foram liberadas no início (por remoção de elementos) possam ser reutilizadas para novas inserções no final. As outras opções estão incorretas: a) elementos são inseridos no fim; b) a verificação de fila cheia é feita *antes* da inserção; d) o vetor é preenchido de forma circular, com reaproveitamento; e) o campo 'início' só muda na *remoção*, não na inserção."
    },
    {
        id: 8,
        question: "Segundo texto da Trilha ENADE, a cooperação entre universidades, centros de pesquisa e empresas impulsiona a inovação e o acesso à tecnologia. Com base nisso, assinale a correta:<br><br>a) A ciência e tecnologia se desenvolvem sem precisar da colaboração entre academia e empresas.<br>b) A inovação tecnológica é resultado exclusivo da iniciativa privada.<br>c) A cooperação entre os setores promove inclusão e desenvolvimento.<br>d) A ciência moderna tem aplicação restrita a laboratórios.<br>e) A democratização mencionada diz respeito apenas a bens de consumo.",
        options: [
            "a) A ciência e tecnologia se desenvolvem sem precisar da colaboração entre academia e empresas.",
            "b) A inovação tecnológica é resultado exclusivo da iniciativa privada.",
            "c) A cooperação entre os setores promove inclusão e desenvolvimento.",
            "d) A ciência moderna tem aplicação restrição a laboratórios.",
            "e) A democratização mencionada diz respeito apenas a bens de consumo."
        ],
        correctAnswer: "c",
        explanation: "A opção 'c' está alinhada com a ideia de que a cooperação entre diferentes setores (academia, pesquisa, empresas) é benéfica. Essa colaboração não apenas impulsiona a inovação, mas também facilita a disseminação do conhecimento e da tecnologia, contribuindo para a inclusão social e o desenvolvimento econômico. As outras opções negam ou limitam essa colaboração e seus impactos."
    },
    {
        id: 9,
        question: "(A) Compare fila estática e dinâmica quanto a:<br>- Flexibilidade de tamanho<br>- Uso de memória<br>- Complexidade de inserção/remoção<br><br>(B) Implemente em C a função:<br><pre><code>bool excluirElementoFila(FILA* f, REGISTRO* reg);</code></pre><br>A função deve remover o primeiro elemento da fila, armazenar em 'reg', ajustar os campos e retornar 'false' se a fila estiver vazia, 'true' caso contrário.",
        options: [
            "a) Esta é uma questão aberta de comparação e implementação de código. Clique em 'Ver Solução' para ver uma possível resposta."
        ],
        correctAnswer: "a", // This needs to be 'a' to match the single option
        explanation: "Esta é uma questão de comparação e implementação de código, sem alternativas de múltipla escolha. A parte (A) exige uma análise comparativa das características de filas estáticas e dinâmicas. A parte (B) pede a escrita de um código em C para a função de exclusão de elemento de fila. Ambas requerem conhecimento aprofundado e capacidade de aplicação prática.",
        codeSolution: formatCode(`
// Parte A: Comparação entre Fila Estática e Fila Dinâmica (Resumo)

// Flexibilidade de Tamanho:
//   - Fila Estática: Possui tamanho fixo, definido no momento da sua criação. Não pode aumentar ou diminuir durante a execução do programa.
//   - Fila Dinâmica: Possui tamanho flexível, adaptando-se à demanda. Pode crescer ou diminuir conforme a inserção e remoção de elementos.

// Uso de Memória:
//   - Fila Estática: Pode ocorrer desperdício de memória se o tamanho máximo alocado for muito maior que a demanda real de elementos. Por outro lado, pode faltar espaço se a demanda exceder o tamanho alocado.
//   - Fila Dinâmica: Utiliza a memória de forma mais eficiente, pois aloca e desaloca espaço apenas quando necessário (para cada nó).

// Complexidade de Inserção/Remoção:
//   - Fila Estática: Geralmente mais simples de implementar. Utiliza um vetor (array) e índices para controlar as posições. Em filas circulares, envolve aritmética modular.
//   - Fila Dinâmica: Mais complexa de programar, pois envolve o gerenciamento manual de ponteiros (para conectar os nós) e operações de alocação/desalocação dinâmica de memória.

// ----------------------------------------------------------------------------------------------------

// Parte B: Implementação da função 'excluirElementoFila' em C (para Fila Dinâmica)

/*
   Assumindo as seguintes estruturas para FILA e REGISTRO (simplificado para o exemplo):

   // Incluir <stdbool.h> para usar o tipo 'bool'
   #include <stdbool.h>
   #include <stdio.h>   // Para printf (usado em depuração ou feedback)
   #include <stdlib.h>  // Para malloc e free (alocação/desalocação de memória)

   // Estrutura para o registro/dado que será armazenado em cada elemento da fila
   typedef struct registro {
       int chave; // Um campo de exemplo para o dado. Pode ter outros campos.
   } REGISTRO;

   // Estrutura para cada nó da lista encadeada que compõe a fila dinâmica
   typedef struct no {
       REGISTRO reg;      // O registro de dados que este nó contém
       struct no* prox; // Ponteiro para o próximo nó na sequência da fila
   } NO;

   // Estrutura principal da Fila Dinâmica, contendo ponteiros para o início e fim
   typedef struct fila {
       NO* inicio; // Ponteiro para o primeiro nó da fila
       NO* fim;    // Ponteiro para o último nó da fila
   } FILA;

   // Função auxiliar para inicializar uma fila vazia (ponteiros NULL)
   void inicializarFila(FILA* f) {
       f->inicio = NULL;
       f->fim = NULL;
   }
*/

// Função: excluirElementoFila
// Parâmetros:
//   - FILA* f: Ponteiro para a estrutura da fila da qual o elemento será removido.
//   - REGISTRO* reg: Ponteiro para uma estrutura REGISTRO onde o dado do elemento removido será copiado.
// Retorna:
//   - bool: true se um elemento foi removido com sucesso, false se a fila estava vazia.
bool excluirElementoFila(FILA* f, REGISTRO* reg) {
    // 1. Verifica se a fila está vazia. Se o ponteiro 'inicio' for NULL, não há elementos.
    if (f->inicio == NULL) {
        return false; // Fila vazia, impossível excluir. Retorna false.
    }

    // 2. Cria um ponteiro temporário 'noAExcluir' e faz ele apontar para o primeiro nó da fila.
    // Este é o nó que será removido e liberado da memória.
    NO* noAExcluir = f->inicio;

    // 3. Copia os dados do registro contido no nó a ser excluído para a variável 'reg'.
    // O operador '*' desreferencia 'reg' e 'noAExcluir->reg' para copiar o conteúdo da struct.
    *reg = noAExcluir->reg; 

    // 4. Atualiza o ponteiro 'inicio' da fila para apontar para o próximo nó na sequência.
    // O nó que era o segundo da fila passa a ser o novo primeiro.
    f->inicio = noAExcluir->prox;

    // 5. Verifica se, após a remoção, a fila ficou vazia.
    // Isso acontece se o nó que foi removido era o único nó na fila.
    if (f->inicio == NULL) {
        f->fim = NULL; // Se a fila ficou vazia, o ponteiro 'fim' também deve ser resetado para NULL.
    }

    // 6. Libera a memória alocada para o nó que foi excluído.
    // Isso é fundamental em C para evitar vazamento de memória (memory leak).
    free(noAExcluir);

    // 7. Retorna true para indicar que a operação de exclusão foi realizada com sucesso.
    return true;
}
        `)
    },
    {
        id: 10,
        question: "Considere:<br><br>I. Em filas dinâmicas, a inserção ocorre no início para reduzir tempo de alocação.<br>II. Nelas, os elementos são inseridos ao final, com cada um apontando para o sucessor.<br><br>Assinale:",
        options: [
            "a) Ambas são verdadeiras, e a II justifica a I.",
            "b) Ambas são verdadeiras, mas a II não justifica a I.",
            "c) I é verdadeira, e II é falsa.",
            "d) I é falsa, e II é verdadeira.",
            "e) Ambas são falsas."
        ],
        correctAnswer: "d",
        explanation: "A afirmação I é falsa: em filas dinâmicas, a inserção (enfileirar) ocorre no *final* da fila, seguindo a lógica FIFO. A remoção (desenfileirar) ocorre no início. Inserir no início de uma fila dinâmica normalmente exigiria percorrer toda a fila para atualizar o ponteiro do último elemento, o que aumentaria o tempo. A afirmação II é verdadeira: em filas dinâmicas (implementadas com listas encadeadas), os elementos são inseridos no final, e cada nó aponta para o seu sucessor para manter a ordem da fila."
    },
    {
        id: 11,
        question: "Considere:<br><br>I. Em filas estáticas, é necessário um vetor circular para reutilizar posições após remoções.<br>II. O arranjo circular permite reaproveitar o espaço liberado no início.<br><br>Assinale a correta:",
        options: [
            "a) Ambas são verdadeiras, e a II justifica a I.",
            "b) Ambas são verdadeiras, mas a II não justifica a I.",
            "c) I é verdadeira, e II é falsa.",
            "d) I é falsa, e II é verdadeira.",
            "e) Ambas são falsas."
        ],
        correctAnswer: "a",
        explanation: "Ambas as afirmações são verdadeiras e a II justifica a I. A afirmação I aponta a necessidade do vetor circular em filas estáticas para evitar o desperdício de memória e o problema da 'fila andando' (elementos se deslocando no vetor após remoções). A afirmação II explica *como* o arranjo circular resolve isso: ele permite que as posições liberadas no início sejam reutilizadas eficientemente, mantendo a fila compacta e sem a necessidade de deslocar elementos."
    },
    {
        id: 12,
        question: "Analise:<br><br>I. Filas dinâmicas não têm tamanho fixo.<br>II. Em filas estáticas, é preciso percorrer o vetor para saber o número de elementos.<br>III. Filas dinâmicas usam ponteiros para início e fim.<br>IV. Filas estáticas usam vetor fixo e índice de início.<br><br>Assinale:",
        options: [
            "a) I e III",
            "b) II e IV",
            "c) I, II e III",
            "d) I, III e IV",
            "e) Todas estão corretas"
        ],
        correctAnswer: "d",
        explanation: "I é verdadeira: a principal característica de filas dinâmicas é sua flexibilidade de tamanho. II é falsa: para saber o número de elementos em uma fila estática, geralmente se usa um contador (`qtdElementos`) ou se calcula a diferença entre os índices 'fim' e 'início' (com cuidado para o caso circular), não é preciso percorrer o vetor inteiro. III é verdadeira: filas dinâmicas são baseadas em listas encadeadas e precisam de ponteiros para o primeiro (início) e último (fim) elementos. IV é verdadeira: filas estáticas são implementadas com um vetor de tamanho fixo e utilizam índices (geralmente 'início' e 'fim') para controlar a posição dos elementos."
    },
    {
        id: 13,
        question: "Analise:<br><br>I. Pilhas usam ponteiros para início e topo.<br>II. Em filas, a inserção ocorre no início e remoção no fim.<br>III. Ambas podem ser implementadas de forma estática ou dinâmica.<br>IV. Pilhas são usadas para chamadas de função; filas, para impressão e atendimento.<br><br>Assinale:",
        options: [
            "a) I e III",
            "b) II e IV",
            "c) III e IV",
            "d) I, II e III",
            "e) Todas estão corretas"
        ],
        correctAnswer: "c",
        explanation: "I é falsa: pilhas usam um ponteiro apenas para o 'topo' (o último elemento inserido). O 'início' não é relevante para as operações LIFO. II é falsa: em filas, a inserção ocorre no *fim* e a remoção no *início* (FIFO). III é verdadeira: tanto pilhas quanto filas podem ser implementadas com arrays (estáticas) ou listas encadeadas (dinâmicas). IV é verdadeira: as aplicações citadas são exemplos clássicos do uso de pilhas (controle de chamadas de funções, recursão) e filas (gerenciamento de tarefas em ordem de chegada, como impressões)."
    },
    {
        id: 14,
        question: "Analise:<br><br>I. A fila dinâmica pode ser reinicializada excluindo todos os elementos.<br>II. Em fila estática, só se insere se houver espaço.<br>III. A exibição usa aritmética modular para circular o vetor.<br>IV. Ao excluir de fila dinâmica, o ponteiro 'fim' sempre deve apontar para NULL.<br><br>Assinale:",
        options: [
            "a) I, II e III",
            "b) II, III e IV",
            "c) I, III e IV",
            "d) I, II e IV",
            "e) Todas estão corretas"
        ],
        correctAnswer: "a",
        explanation: "I é verdadeira: para reinicializar uma fila dinâmica, é necessário percorrer e liberar a memória de todos os seus nós. II é verdadeira: em uma fila estática, antes de inserir um novo elemento, é crucial verificar se há espaço disponível (se a fila não está cheia), para evitar estouro de buffer. III é verdadeira: a exibição de elementos em uma fila estática circular, assim como a inserção e remoção, utiliza aritmética modular para 'navegar' corretamente pelo vetor e lidar com a natureza circular. IV é falsa: o ponteiro 'fim' aponta para NULL apenas se a fila ficar *vazia* após a exclusão do *último* elemento. Caso contrário, ele continua apontando para o último elemento remanescente na fila."
    },
    {
        id: 15,
        question: "Com base em dois códigos de inserção em filas:",
        code1: formatCode(`
// Código 1: Exemplo de Inserção (Enqueue) em Fila Estática Circular em C
// Função de Inserção (Enqueue) para Fila Estática
// MAX_SIZE assumido como a capacidade máxima do array.
void enqueueEstatica(FilaEstatica* f, int valor) {
    // Verifica se a fila está cheia (se o número de elementos atingiu o limite).
    // Esta é uma condição crucial para evitar 'buffer overflow'.
    if (f->count == MAX_SIZE) {
        printf("Erro: Fila estatica cheia! Impossivel inserir %d.\\n", valor);
        return; // Sai da função sem inserir
    }
    // Insere o novo valor na posição indicada pelo índice 'fim'.
    f->elementos[f->fim] = valor; 
    // Atualiza o índice 'fim' para a próxima posição livre.
    // O operador módulo (%) faz com que o índice "volte" ao início (0)
    // do array quando ele atinge ou excede MAX_SIZE, criando o comportamento circular.
    f->fim = (f->fim + 1) % MAX_SIZE;
    f->count++; // Incrementa o contador de elementos na fila.
}
        `),
        code2: formatCode(`
// Código 2: Exemplo de Inserção (Enqueue) em Fila Dinâmica em C
// Função de Inserção (Enqueue) para Fila Dinâmica
// Esta função aloca um novo nó e o adiciona ao final da fila.
void enqueueDinamica(FilaDinamica* f, int valor) {
    // Aloca dinamicamente memória para um novo nó 'NoFila'.
    // malloc retorna NULL se a alocação falhar (memória insuficiente).
    NoFila* novoNo = (NoFila*) malloc(sizeof(NoFila));
    if (novoNo == NULL) { 
        printf("Erro: Memoria insuficiente para inserir %d.\\n", valor);
        return; // Sai da função em caso de falha na alocação
    }
    novoNo->valor = valor;    // Atribui o valor de dado ao novo nó
    // O novo nó sempre será o último na fila, então seu ponteiro 'proximo' aponta para NULL.
    novoNo->proximo = NULL; 

    // Verifica se a fila estava vazia antes desta inserção.
    // Se 'f->fim' é NULL, significa que a fila não tem elementos.
    if (f->fim == NULL) { 
        f->inicio = novoNo; // O novo nó se torna tanto o início quanto o fim da fila
        f->fim = novoNo;
    } else { // Se a fila já contém elementos
        // O nó que atualmente é o 'fim' da fila aponta seu 'proximo' para o novo nó.
        f->fim->proximo = novoNo;
        // O novo nó agora se torna o novo 'fim' da fila.
        f->fim = novoNo;
    }
}
        `),
        options: [
            "a) Código 1 limita o crescimento pela contagem de elementos.",
            "b) Código 2 usa vetor fixo e aritmética modular.", // Esta opção foi ajustada para refletir a correção da correctAnswer
            "c) Ambos têm limite de crescimento fixo.",
            "d) Código 1 faz alocação dinâmica e não precisa de controle de posições.",
            "e) Código 2 não atualiza o ponteiro 'fim', o que causa falhas."
        ],
        correctAnswer: "a",
        explanation: "Para esta questão, o Código 1 (fila estática) usa um limite de tamanho fixo (`MAX_SIZE`) e um contador (`count`) para controlar seu crescimento e verificar quando está cheia. O Código 2 (fila dinâmica) aloca memória dinamicamente e não tem um limite fixo, crescendo conforme a necessidade. Portanto, a opção 'a' é a mais precisa para o Código 1. A opção 'b' descreve características de uma fila estática circular (vetor fixo e aritmética modular) e é incorreta para o Código 2, que é uma fila dinâmica."
    },
    {
        id: 16,
        question: "Com base na inserção em fila dinâmica:<br><br>a) O novo elemento é inserido no início, sempre atualizando o ponteiro 'início'.<br>b) Se o ponteiro 'início' for diferente de NULL, a fila está cheia.<br>c) O campo novo->prox recebe NULL porque o elemento será o último.<br>d) Cada elemento aponta para o anterior.<br>e) A fila é circular, controlada com aritmética modular.",
        options: [
            "a) O novo elemento é inserido no início, sempre atualizando o ponteiro 'início'.",
            "b) Se o ponteiro 'início' for diferente de NULL, a fila está cheia.",
            "c) O campo novo->prox recebe NULL porque o elemento será o último.",
            "d) Cada elemento aponta para o anterior.",
            "e) A fila é circular, controlada com aritmética modular."
        ],
        correctAnswer: "c",
        explanation: "Na inserção em fila dinâmica (enqueue), o novo elemento é adicionado ao *final* da fila. Portanto, o campo `prox` (próximo) do novo nó deve ser `NULL`, pois ele se torna o último elemento e não há nada depois dele. As outras opções estão incorretas: a) a inserção ocorre no final, não no início; b) 'início' diferente de NULL significa que a fila *não* está vazia, não que está cheia; d) em filas, elementos apontam para o *sucessor*, não para o anterior; e) aritmética modular é para filas *estáticas* circulares, não dinâmicas."
    },
    {
        id: 17,
        question: "Segundo texto da Trilha ENADE:<br><br>a) CT&I só é útil para países desenvolvidos.<br>b) Sendo bem público, CT&I deve focar só em benefícios sociais.<br>c) O investimento em CT&I é essencial para o crescimento e desenvolvimento.<br>d) A política de inovação exclui o Estado.<br>e) Investir em CT&I não influencia o crescimento econômico.",
        options: [
            "a) CT&I só é útil para países desenvolvidos.",
            "b) Sendo bem público, CT&I deve focar só em benefícios sociais.",
            "c) O investimento em CT&I é essencial para o crescimento e desenvolvimento.",
            "d) A política de inovação exclui o Estado.",
            "e) Investir em CT&I não influencia o crescimento econômico."
        ],
        correctAnswer: "c",
        explanation: "A opção 'c' é a mais alinhada com a importância da Ciência, Tecnologia e Inovação (CT&I) para qualquer nação. O investimento contínuo e estratégico em CT&I é amplamente reconhecido como um motor fundamental para o crescimento econômico, a competitividade e o desenvolvimento social de um país. As outras opções apresentam visões restritivas ou incorretas sobre o papel e o impacto da CT&I."
    },
    {
        id: 18,
        question: "(A) Compare fila estática e dinâmica quanto a:<br>- Flexibilidade de tamanho<br>- Uso de memória<br>- Complexidade de inserção/remoção<br><br>(B) Implemente a função em C:<br><pre><code>void exibirFila(FILA* f);</code></pre><br>A função deve percorrer uma fila dinâmica e imprimir, em uma linha, os valores das chaves dos elementos.",
        options: [
            "a) Esta é uma questão aberta de comparação e implementação de código. Clique em 'Ver Solução' para ver uma possível resposta."
        ],
        correctAnswer: "a", // This needs to be 'a' to match the single option
        explanation: "Esta é uma questão de comparação e implementação de código, sem alternativas de múltipla escolha. A parte (A) exige uma análise comparativa das características de filas estáticas e dinâmicas. A parte (B) pede a escrita de um código em C para a função de exibição de elementos de uma fila dinâmica. Ambas requerem conhecimento aprofundado e capacidade de aplicação prática.",
        codeSolution: formatCode(`
// Parte A: Comparação entre Fila Estática e Fila Dinâmica (Resumo)

// Flexibilidade de Tamanho:
//   - Fila Estática: Possui tamanho fixo, definido no momento da sua criação. Não pode aumentar ou diminuir durante a execução do programa.
//   - Fila Dinâmica: Possui tamanho flexível, adaptando-se à demanda. Pode crescer ou diminuir conforme a inserção e remoção de elementos.

// Uso de Memória:
//   - Fila Estática: Pode ocorrer desperdício de memória se o tamanho máximo alocado for muito maior que a demanda real de elementos. Por outro lado, pode faltar espaço se a demanda exceder o tamanho alocado.
//   - Fila Dinâmica: Utiliza a memória de forma mais eficiente, pois aloca e desaloca espaço apenas quando necessário (para cada nó).

// Complexidade de Inserção/Remoção:
//   - Fila Estática: Geralmente mais simples de implementar. Utiliza um vetor (array) e índices para controlar as posições. Em filas circulares, envolve aritmética modular.
//   - Fila Dinâmica: Mais complexa de programar, pois envolve o gerenciamento manual de ponteiros (para conectar os nós) e operações de alocação/desalocação dinâmica de memória.

// ----------------------------------------------------------------------------------------------------

// Parte B: Implementação da função 'exibirFila' em C (para Fila Dinâmica)

/*
   Assumindo as seguintes estruturas para FILA e REGISTRO (simplificado para o exemplo):

   // Incluir <stdio.h> para usar printf
   #include <stdio.h>
   // Não é necessário <stdlib.h> apenas para exibir, mas seria para inserção/remoção

   // Estrutura para o registro/dado que será armazenado em cada elemento da fila
   typedef struct registro {
       int chave; // Um campo de exemplo para o dado. Pode ter outros campos.
   } REGISTRO;

   // Estrutura para cada nó da lista encadeada que compõe a fila dinâmica
   typedef struct no {
       REGISTRO reg;      // O registro de dados que este nó contém
       struct no* prox; // Ponteiro para o próximo nó na sequência da fila
   } NO;

   // Estrutura principal da Fila Dinâmica, contendo ponteiros para o início e fim
   typedef struct fila {
       NO* inicio; // Ponteiro para o primeiro nó da fila
       NO* fim;    // Ponteiro para o último nó da fila
   } FILA;

   // Função auxiliar para inicializar uma fila vazia (ponteiros NULL)
   void inicializarFila(FILA* f) {
       f->inicio = NULL;
       f->fim = NULL;
   }
*/

// Função: exibirFila
// Parâmetros:
//   - FILA* f: Ponteiro para a estrutura da fila que será exibida.
// Retorna:
//   - void: Não retorna nenhum valor, apenas imprime os elementos na console.
void exibirFila(FILA* f) {
    // 1. Verifica se a fila está vazia. Se o ponteiro 'inicio' for NULL, significa que a fila não contém elementos.
    if (f->inicio == NULL) {
        printf("Fila vazia.\\n"); // Informa que a fila está vazia.
        return; // Encerra a execução da função.
    }

    // 2. Cria um ponteiro auxiliar 'atual' e o inicializa com o endereço do primeiro nó da fila ('f->inicio').
    // Este ponteiro será usado para percorrer a lista nó por nó sem alterar a estrutura original da fila.
    NO* atual = f->inicio;

    printf("Elementos da fila: ");
    // 3. Loop para percorrer a fila: continua executando enquanto 'atual' não for NULL.
    // O ponteiro 'prox' do último nó da fila é NULL, indicando o fim da lista.
    while (atual != NULL) { 
        printf("%d ", atual->reg.chave); // Imprime o valor da 'chave' do registro contido no nó atual.
        atual = atual->prox;             // Avança o ponteiro 'atual' para o próximo nó na sequência da fila.
    }
    printf("\\n"); // Imprime uma nova linha no final para melhor formatação da saída.
}
        `)
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz-container');
const quizFeedback = document.getElementById('quiz-feedback');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');

// Função principal para carregar e exibir uma questão
function loadQuestion(index) {
    // Verifica se o índice da questão está dentro dos limites do array
    if (index < 0 || index >= questions.length) {
        return; // Sai da função se o índice for inválido
    }

    const q = questions[index]; // Obtém o objeto da questão atual
    let optionsHtml = '';      // Variável para armazenar o HTML das opções de resposta
    let codeSectionHtml = '';  // Variável para armazenar o HTML dos blocos de código

    // ** Lógica para construir e injetar os códigos, SOMENTE SE EXISTIREM **
    // Verifica se a questão possui 'code1' (geralmente para fila estática)
    if (q.code1) {
        codeSectionHtml += `
            <h4>Código 1: Fila Estática</h4>
            <pre class="code-display"><code>${q.code1}</code></pre>
        `;
    }
    // Verifica se a questão possui 'code2' (geralmente para fila dinâmica)
    if (q.code2) {
        codeSectionHtml += `
            <h4>Código 2: Fila Dinâmica</h4>
            <pre class="code-display"><code>${q.code2}</code></pre>
        `;
    }
    // Verifica se a questão possui 'codeSnippet' (para um único trecho de código, como em Questão 6)
    if (q.codeSnippet) {
        codeSectionHtml += `
            <h4>Código para Análise</h4>
            <pre class="code-display"><code>${q.codeSnippet}</code></pre>
        `;
    }

    // Lógica para renderizar as opções de resposta
    // Verifica se é uma questão aberta (com apenas uma opção que instrui a ver a solução)
    if (q.options.length === 1 && q.options[0].includes("questão aberta")) {
        optionsHtml = `
            <label>
                <input type="radio" name="question${q.id}" value="a" onchange="checkAnswer(${index}, this.value)" style="display:none;">
                <span>${q.options[0]}</span>
            </label>
            <button class="code-solution-toggle" onclick="toggleCodeSolution(${q.id})">Ver Solução</button>
            <pre class="code-solution" id="code-solution-${q.id}"><code>${q.codeSolution ? q.codeSolution : 'Solução de código não disponível.'}</code></pre>
        `;
    } else {
        // Para questões de múltipla escolha normais, mapeia as opções para labels com radio buttons
        optionsHtml = q.options.map((option, i) => `
            <label>
                <input type="radio" name="question${q.id}" value="${String.fromCharCode(97 + i)}" onchange="checkAnswer(${index}, this.value)">
                <span>${option}</span>
            </label>
        `).join(''); // Junta todas as strings de HTML das opções
    }

    // Atualiza o conteúdo HTML do container do quiz com a nova questão
    quizContainer.innerHTML = `
        <div class="question-card">
            <h3>Questão ${q.id}</h3>
            <p>${q.question}</p>
            ${codeSectionHtml} <div class="options">
                ${optionsHtml}
            </div>
            <div id="feedback-${q.id}" class="feedback"></div>
        </div>
    `;

    // Limpa o feedback anterior (se houver) e o oculta
    quizFeedback.style.display = 'none';
    quizFeedback.textContent = '';
    document.getElementById(`feedback-${q.id}`).style.display = 'none';

    // Atualiza o estado dos botões de navegação (Anterior/Próxima)
    prevButton.disabled = currentQuestionIndex === 0; // Desabilita 'Anterior' na primeira questão
    nextButton.disabled = currentQuestionIndex === questions.length - 1; // Desabilita 'Próxima' na última questão
}

// Função para verificar a resposta selecionada pelo usuário
function checkAnswer(questionIndex, selectedOptionValue) {
    const q = questions[questionIndex]; // Obtém o objeto da questão
    const feedbackDiv = document.getElementById(`feedback-${q.id}`); // Obtém a div de feedback específica da questão
    const selectedOptionLetter = selectedOptionValue; // Valor da opção selecionada ('a', 'b', etc.)

    // Remove classes de feedback anteriores para resetar o estilo
    feedbackDiv.classList.remove('correct', 'incorrect');

    // Compara a opção selecionada com a resposta correta
    if (selectedOptionLetter === q.correctAnswer) {
        feedbackDiv.classList.add('correct'); // Adiciona classe para estilo de resposta correta
        feedbackDiv.textContent = 'Parabéns! Resposta correta.'; // Mensagem de sucesso
    } else {
        feedbackDiv.classList.add('incorrect'); // Adiciona classe para estilo de resposta incorreta
        // Mensagem de erro com a resposta correta e a explicação
        feedbackDiv.innerHTML = `Resposta incorreta. A resposta correta é: <strong>${q.correctAnswer.toUpperCase()}</strong>. <br><br><strong>Explicação:</strong> ${q.explanation}`;
    }
    feedbackDiv.style.display = 'block'; // Exibe a div de feedback

    // Desabilita todos os radio buttons da questão atual para impedir novas seleções
    document.querySelectorAll(`input[name="question${q.id}"]`).forEach(radio => {
        radio.disabled = true;
    });
}

// Função para alternar a visibilidade da solução de código em questões abertas
function toggleCodeSolution(questionId) {
    const solutionDiv = document.getElementById(`code-solution-${questionId}`);
    // Alterna o estilo 'display' entre 'block' (visível) e 'none' (oculto)
    solutionDiv.style.display = solutionDiv.style.display === 'block' ? 'none' : 'block';
}

// Função para navegar para a próxima questão
function nextQuestion() {
    // Verifica se não estamos na última questão
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Incrementa o índice da questão
        loadQuestion(currentQuestionIndex); // Carrega a próxima questão
    }
}

// Função para navegar para a questão anterior
function prevQuestion() {
    // Verifica se não estamos na primeira questão
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Decrementa o índice da questão
        loadQuestion(currentQuestionIndex); // Carrega a questão anterior
    }
}