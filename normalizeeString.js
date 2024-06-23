// Função para remover acentos e transformar em minúsculas no NodeJS
function normalizeString(texto) {
    return texto.toLowerCase() // Transforma em minúsculas
                .normalize('NFD') // Remove acentos
                .replace(/[\u0300-\u036f]/g, ''); // Remove acentos especiais
 } 

 