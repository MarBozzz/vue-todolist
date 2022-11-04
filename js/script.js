/*
**Descrizione:**
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure noSteps:
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
BONUS
- Verificare se il task è già presente e nel caso mostrare l’errore
- ... il limite è la fantasia ;-)
*/


const {createApp} = Vue;

createApp ({
  data(){
    return {
      errorMessage: '',
      newMessage: '',
      tasks : [
        {
          text : 'Spostare gli equilibri',
          done : true
        },
        {
          text : 'Fare gavettoni d\'inverno',
          done : false
        },
        {
          text : 'Andare ai rave',
          done : false
        }
      ]
    }
  },
  methods:{
    removeTask(index){
      this.errorMessage = '';
      if(this.tasks[index].done){
        this.tasks.splice(index,1)
      } else {
        this.errorMessage = 'Non fare il furbo, devi ancora completare il task che volevi cancellare'
      }
    },
    addTask() {
      this.errorMessage = '';
      if (this.newMessage.length < 5){
        this.errorMessage = 'Dai su, un po\' di impegno a mettere insieme almeno 5 lettere...'
      } else {
        const newTask = {
          text : this.newMessage,
          done : false
        }
        this.tasks.unshift(newTask);
        this.newMessage = ''
      }
    }
  }
}).mount('#app')