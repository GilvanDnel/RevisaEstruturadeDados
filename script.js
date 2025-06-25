document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections except the introduction on page load
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'introduction') {
            section.classList.add('hidden');
        }
    });

    loadQuestion(currentQuestionIndex);
});

// Function to show a specific section and hide others
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    window.scrollTo(0, 0); // Scroll to top when changing section
}

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
        question: "Com base em dois trechos de código sobre filas (um estático e outro dinâmico), analise:<br><br>I. O Código 1 usa aritmética modular para percorrer vetor circular.<br>II. O Código 2 acessa os elementos via ponteiros.<br>III. O Código 1 pode imprimir lixo se o campo 'fim' não for atualizado corretamente.<br>IV. O Código 2 tem maior risco de vazamento de memória na exibição.<br><br>Assinale a alternativa correta:",
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
        question: "Em filas dinâmicas, a reinicialização deve desalocar todos os nós corretamente. Analise um código responsável por isso e marque a opção correta:<br><br>a) Só reinicializa se a fila estiver vazia.<br>b) O while percorre a fila liberando memória de cada elemento.<br>c) A reinicialização está incompleta porque o ponteiro 'fim' não é atualizado.<br>d) O código é exclusivo para filas estáticas, pois usa free.<br>e) O código libera memória do fim para o início.",
        options: [
            "a) Só reinicializa se a fila estiver vazia.",
            "b) O while percorre a fila liberando memória de cada elemento.",
            "c) A reinicialização está incompleta porque o ponteiro 'fim' não é atualizado.<br>d) O código é exclusivo para filas estáticas, pois usa free.<br>e) O código libera memória do fim para o início."
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
        codeSolution: `
// Parte A: Comparação (Resumo)
// Flexibilidade de tamanho: Estática (fixo) vs. Dinâmica (flexível).
// Uso de memória: Estática (potencial desperdício/falta) vs. Dinâmica (eficiente).
// Complexidade de inserção/remoção: Estática (simples com aritmética modular) vs. Dinâmica (gerenciamento de ponteiros).

// Parte B: Implementação da função excluirElementoFila
// Assumindo a seguinte estrutura para FILA e REGISTRO (simplificado):
/*
typedef struct registro {
    int chave;
    // outros campos se houver
} REGISTRO;

typedef struct no {
    REGISTRO reg;
    struct no* prox;
} NO;

typedef struct fila {
    NO* inicio;
    NO* fim;
} FILA;
*/

bool excluirElementoFila(FILA* f, REGISTRO* reg) {
    // 1. Verifica se a fila está vazia
    if (f->inicio == NULL) {
        return false; // Fila vazia, nada a excluir
    }

    // 2. Armazena o nó a ser removido (o primeiro)
    NO* noAExcluir = f->inicio;

    // 3. Copia os dados do registro do nó a ser excluído
    // para a variável 'reg' passada por parâmetro
    *reg = noAExcluir->reg; // Copia a estrutura REGISTRO

    // 4. Atualiza o ponteiro 'inicio' para o próximo nó
    f->inicio = noAExcluir->prox;

    // 5. Se a fila ficou vazia após a remoção, atualiza 'fim' para NULL também
    if (f->inicio == NULL) {
        f->fim = NULL;
    }

    // 6. Libera a memória do nó excluído
    free(noAExcluir);

    // 7. Retorna true indicando sucesso na exclusão
    return true;
}
        `
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
        question: "Com base em dois códigos de inserção em filas:<br><br>a) Código 1 limita o crescimento pela contagem de elementos.<br>b) Código 2 usa vetor fixo e aritmética modular.<br>c) Ambos têm limite de crescimento fixo.<br>d) Código 1 faz alocação dinâmica e não precisa de controle de posições.<br>e) Código 2 não atualiza o ponteiro 'fim', o que causa falhas.",
        options: [
            "a) Código 1 limita o crescimento pela contagem de elementos.",
            "b) Código 2 usa vetor fixo e aritmética modular.",
            "c) Ambos têm limite de crescimento fixo.",
            "d) Código 1 faz alocação dinâmica e não precisa de controle de posições.",
            "e) Código 2 não atualiza o ponteiro 'fim', o que causa falhas."
        ],
        correctAnswer: "b", // Mantido como 'b' para a demonstração, mas a resposta ideal dependeria dos códigos reais
        explanation: "Para responder a esta questão, seria necessário analisar os 'Código 1' e 'Código 2' mencionados. Assumindo um cenário típico onde um código representa uma fila estática e o outro uma fila dinâmica, a opção 'b' é a mais provável de ser correta, descrevendo uma característica de uma implementação de fila estática. Sem os códigos, a análise é baseada em generalizações. No entanto, em um contexto de questão de múltipla escolha, 'b' aponta para uma característica bem específica de filas estáticas circulares."
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
        codeSolution: `
// Parte A: Comparação (Resumo)
// Flexibilidade de tamanho: Estática (fixo) vs. Dinâmica (flexível).
// Uso de memória: Estática (potencial desperdício/falta) vs. Dinâmica (eficiente).
// Complexidade de inserção/remoção: Estática (simples com aritmética modular) vs. Dinâmica (gerenciamento de ponteiros).

// Parte B: Implementação da função exibirFila
// Assumindo a seguinte estrutura para FILA e REGISTRO (simplificado):
/*
typedef struct registro {
    int chave;
    // outros campos se houver
} REGISTRO;

typedef struct no {
    REGISTRO reg;
    struct no* prox;
} NO;

typedef struct fila {
    NO* inicio;
    NO* fim;
} FILA;
*/

void exibirFila(FILA* f) {
    // 1. Verifica se a fila está vazia
    if (f->inicio == NULL) {
        printf("Fila vazia.\\n");
        return;
    }

    // 2. Cria um ponteiro auxiliar para percorrer a fila
    NO* atual = f->inicio;

    printf("Elementos da fila: ");
    // 3. Percorre a fila até o final (ponteiro atual ser NULL)
    while (atual != NULL) {
        printf("%d ", atual->reg.chave); // Imprime a chave do registro atual
        atual = atual->prox;           // Avança para o próximo nó
    }
    printf("\\n"); // Pula uma linha no final
}
        `
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz-container');
const quizFeedback = document.getElementById('quiz-feedback');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');

function loadQuestion(index) {
    if (index < 0 || index >= questions.length) {
        return; // Avoid out of bounds
    }

    const q = questions[index];
    let optionsHtml = '';
    if (q.options.length === 1 && q.options[0].includes("questão aberta")) {
        // Special handling for open-ended questions
        optionsHtml = `
            <label>
                <input type="radio" name="question${q.id}" value="a" onchange="checkAnswer(${index}, this.value)" style="display:none;">
                <span>${q.options[0]}</span>
            </label>
            <button class="code-solution-toggle" onclick="toggleCodeSolution(${q.id})">Ver Solução</button>
            <pre class="code-solution" id="code-solution-${q.id}"><code>${q.codeSolution ? escapeHtml(q.codeSolution) : 'Solução de código não disponível.'}</code></pre>
        `;
    } else {
        // Normal multiple-choice questions
        optionsHtml = q.options.map((option, i) => `
            <label>
                <input type="radio" name="question${q.id}" value="${String.fromCharCode(97 + i)}" onchange="checkAnswer(${index}, this.value)">
                <span>${option}</span>
            </label>
        `).join('');
    }

    quizContainer.innerHTML = `
        <div class="question-card">
            <h3>Questão ${q.id}</h3>
            <p>${q.question}</p>
            <div class="options">
                ${optionsHtml}
            </div>
            <div id="feedback-${q.id}" class="feedback"></div>
        </div>
    `;

    // Clear previous feedback
    quizFeedback.style.display = 'none';
    quizFeedback.textContent = '';
    document.getElementById(`feedback-${q.id}`).style.display = 'none';


    // Update navigation button states
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

function checkAnswer(questionIndex, selectedOptionValue) {
    const q = questions[questionIndex];
    const feedbackDiv = document.getElementById(`feedback-${q.id}`);
    const selectedOptionLetter = selectedOptionValue; // 'a', 'b', 'c', etc.

    // Remove previous feedback classes
    feedbackDiv.classList.remove('correct', 'incorrect');

    if (selectedOptionLetter === q.correctAnswer) {
        feedbackDiv.classList.add('correct');
        feedbackDiv.textContent = 'Parabéns! Resposta correta.';
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.innerHTML = `Resposta incorreta. A resposta correta é: <strong>${q.correctAnswer.toUpperCase()}</strong>. <br><br><strong>Explicação:</strong> ${q.explanation}`;
    }
    feedbackDiv.style.display = 'block';

    // Disable all radio buttons for the current question after selection
    document.querySelectorAll(`input[name="question${q.id}"]`).forEach(radio => {
        radio.disabled = true;
    });
}

function toggleCodeSolution(questionId) {
    const solutionDiv = document.getElementById(`code-solution-${questionId}`);
    solutionDiv.style.display = solutionDiv.style.display === 'block' ? 'none' : 'block';
}

// Helper function to escape HTML for pre tags
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}