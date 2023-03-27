## Para evitar NaN:
- Não utilizar valores númericos em formato de __STRING__;
- Não realizar operações matemáticas com funções
- Não realizar operações matemáticas com objetos
- Não realizar operações matemáticas com valores falsos como __undefined__, __NaN__, __null__, __false__ e __strings vazias__.

### OBS #1: Pode-se testar se um valor não é um número com:
let teste = isNaN("cachorro")
console.log(teste);

### OBS #2: Pode-se converter um valor falso para 0 com:
const a = nanValue || 0;

