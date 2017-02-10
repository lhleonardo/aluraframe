// stores  => tabelas que existirão no navegador da minha aplicação
// dbname  => nome do banco de dados que deverá ser criado 
// version => versão do meu BD. PS: deverá ser incrementada caso necessite de atualização de stores
const stores = ['negociacoes'], 
      dbName = 'aluraframe', 
      version = 4;



/**
 * Classe responsável por prover conexões com o IndexedDB
 */
class ConnectionFactory {
    constructor() {
        throw new Error('Não é possível instanciar ConnectionFactory');
    }

    /**
     * Método que retorna uma Promise de uma conexão válida com o IndexedDB
     * 
     * Lembrando que as conexões são as mesmas, ou seja, uma conexão pra toda a aplicação
     */
    static getConnection() {
        return new Promise((resolve, reject) => {
            // realiza requisição de abertura da conexão
            let openRequest = window.indexedDB.open(dbname, version);

            // necessita de atualização do banco (a partir da versão informada)
            // caso queira modificar, apenas incrementar a versão na 'constante' version
            openRequest.onupgradeneeded = e => {
                // re-cria todas as stores já existentes, apagando-as.
                stores.forEach(store => {
                    if (e.target.result.objectStoreNames.contains(store)) {
                        e.target.result.deleteObjectStore(store);
                    }
                    e.target.result.createObjectStore(store, {autoIncrement: true});
                });
            };

            // dentro deste bloco é fornecida uma conexão com o banco IndexedDB
            // bem sucedida, sem nenhuma falha
            openRequest.onsuccess = e => {

            };

            // erro ao obter a conexão com o IndexedDB
            openRequest.onerror = e => {

            };
            
        });
    }
}