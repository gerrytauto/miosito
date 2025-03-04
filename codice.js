// vettore principale dei personaggi
let personaggi_originale = [
    { nome: "Albert Einstein", campo: "Fisica", sesso:"M", nazionalità:"Tedesco", vivo:false, soprannome:""},
    { nome: "Marie Curie", campo: "Chimica", sesso:"F", nazionalità:"Francese", vivo:false, soprannome:""},
    { nome: "Leonardo da Vinci", campo: "Arte, Scienza, Tecnologia", sesso:"M", nazionalità:"Italiano", vivo:false, soprannome:""},
    { nome: "Alan Turing", campo: "Matematica, Informatica", sesso:"M", nazionalità:"Inglese", vivo:false, soprannome:""},
    { nome: "Stephen Hawking", campo: "Fisica", sesso:"M", nazionalità:"Inglese", vivo:false, soprannome:""},
    { nome: "Rita Levi Montalcini", campo: "Medicina", sesso:"F", nazionalità:"Italiana", vivo:false, soprannome:""},
    { nome: "Leonardo di Caprio", campo: "Cinema", sesso:"M", nazionalità:"Statunitense", vivo:true, soprannome:""},
    { nome: "Scarlett Johansson", campo: "Cinema", sesso:"F", nazionalità:"Statunitense", vivo:true, soprannome:""},
    { nome: "Giacomo Leopardi", campo: "Letteratura", sesso:"M", nazionalità:"Italiano", vivo:false, soprannome:""},
    { nome: "Beyonce", campo: "Musica", sesso:"F", nazionalità:"Statunitense", vivo:true, soprannome:""},
    { nome: "LeBron James", campo: "Sport", sesso:"M", nazionalità:"Statunitense", vivo:true, soprannome:"The king"},
    { nome: "Diego Armando Maradona", campo: "Sport", sesso:"M", nazionalità:"Argentino", vivo:false, soprannome:"El Pibe de Oro"},
    { nome: "Micheal Jordan", campo: "Sport", sesso:"M", nazionalità:"Statunitense", vivo:true, soprannome:"Black Jesus"},
    { nome: "Pelè", campo: "Sport", sesso:"M", nazionalità:"Statunitense", vivo:false, soprannome:""},
    { nome: "Enrico Fermi", campo: "Fisica", sesso:"M", nazionalità:"Italiano", vivo:false, soprannome:""},
    { nome: "Guglielmo Marconi", campo: "Elettronica", sesso:"M", nazionalità:"Italiano", vivo:false, soprannome:""},
    { nome: "Nicolo Copernico", campo: "Astrologia", sesso:"M", nazionalità:"Italiano", vivo:false, soprannome:""},
    { nome: "Margherita Hack", campo: "Astrologia", sesso:"F", nazionalità:"Italiana", vivo:false, soprannome:""},
    { nome: "Lionel Messi", campo: "Sport", sesso:"M", nazionalità:"Argentino", vivo:true, soprannome:""},
    { nome: "Bred Pitt", campo: "Cinema", sesso:"M", nazionalità:"Statunitense", vivo:true, soprannome:""},
  ];
  
  
  
  
  
  
  
  
  let conteggio, risposta, num_domanda, trovato;
  let personaggio_mancante={nome:"", campo:"", sesso:"", nazionalità:"", vivo:true, soprannome:""};
  
  
  
  
  
  
  
  
  //definisco un vettore di appoggio per filtrare quello principale
  let personaggi, filtrato, già_chiesti=[];
  let domande=[Domanda_sesso, Domanda_vita, Domanda_campo, Domanda_nazionalità, Domanda_soprannome, Domanda_soprannomi];
  let elabora=[elabora_sesso, elabora_vita, elabora_campo, elabora_nazionalità, elabora_soprannome, elabora_soprannomi];
  
  
  
  
  
  
  function indovinaPersonaggio() {
    conteggio=0;
    num_domanda=0;
    già_chiesti=[];
    personaggio_mancante={nome:"", campo:"", sesso:"", nazionalità:"", vivo:true, soprannome:""};
    trovato=true;
  
  
  
  
  //faccio sparire il pulsante "Sfidami"
  document.getElementById("rigioca").hidden=true;
  
  
  //definisco un vettore di appoggio per filtrare quello principale
  personaggi=personaggi_originale;
  filtrato=[];
  
  
  
  
  
  
  
  
  //pulisco il campo personaggio
  document.getElementById("rigioca").innerHTML="Rigioca";
  document.getElementById("domanda").innerHTML="";
  
  
  //rendo visibili i pulsanti SI e NO
  document.getElementById("si").hidden=false;
  document.getElementById("no").hidden=false;
  
  
  
  
  
  
  //chiedo il sesso del personaggio da indovinare
  domande[num_domanda]();
  }
  
  
  
  
  
  
  //chiedo il se il personaggio è maschio
  function Domanda_sesso(){
  document.getElementById("domanda").innerHTML="Il tuo personaggio è maschio?";
  }
  
  
  
  
  
  
  //chiedo se il personaggio è morto
  function Domanda_vita(){
    document.getElementById("domanda").innerHTML="Il tuo personaggio è morto?";
  }
  
  
  
  
  //chiedo il campo del personaggio
  function Domanda_campo() {
  let campo=personaggi[conteggio].campo;
  
  
  document.getElementById("domanda").innerHTML="Il tuo personaggio opera nel campo del "+campo+"?";
  già_chiesti.push(campo);
  }
  
  
  
  
  //chiedo la nazionalità del personaggio
  function Domanda_nazionalità() {
  let nazionalità=personaggi[conteggio].nazionalità;
  
  
  document.getElementById("domanda").innerHTML="Il tuo personaggio è "+nazionalità+"?";
  già_chiesti.push(nazionalità);
  }
  
  
  
  
  //chiedo se il personaggio ha un soprannome
  function Domanda_soprannome(){
  document.getElementById("domanda").innerHTML="Ha un soprannome?";
  }
  
  
  //chiedo il soprannome del personaggio
  function Domanda_soprannomi(){
   soprannome=personaggi[conteggio].soprannome;
   document.getElementById("domanda").innerHTML="Il tuo personaggio è soprannominato " + soprannome + "?";
  }
  
  
  
  
  //in base alla domanda che è stata fatta chiama delle funzioni
  function si(){
    risposta="si";
    if(num_domanda==6){
      //se si risponde di sì all'ultima domanda abbiamo indovinato il personaggio
      document.getElementById("domanda").innerHTML="Perfetto!";
      
        
    
  //faccio riapparire il pulsante "Rigioca"
  document.getElementById("rigioca").hidden=false;
  
      //rendo invisibili i pulsanti SI e NO
      document.getElementById("si").hidden=true;
      document.getElementById("no").hidden=true;
    }
    else{
      elabora[num_domanda]();
    }
  
  
  
  
  }
  
  
  
  
  
  
  //in base alla domanda che è stata fatta chiama delle funzioni
  function no(){
    risposta="no";
    if(num_domanda==0 || num_domanda==1 || num_domanda==4){
        elabora[num_domanda]();
    }
    else if(num_domanda==2 || num_domanda==3 || num_domanda==5){
      if(conteggio==personaggi.length){
         Aggiungi();
      }
      conteggio++;
      Prossima_domanda();
    }
    else{
      if(personaggio_mancante.soprannome!=""){
        document.getElementById("domanda").innerHTML="Personaggio non trovato";

        //rendo invisibili i pulsanti SI e NO
        document.getElementById("si").hidden=true;
        document.getElementById("no").hidden=true;
        //faccio riapparire il pulsante "Rigioca"
        document.getElementById("rigioca").hidden=false;
      }
      else{
      //se ha risposto di no all'ultima domanda non abbiamo indovinato il personaggio
      trovato=false;
      Stampa_personaggio();
      }
    }
  }
  
  
  
  
  function elabora_sesso(){
  //se ha risposto si il vettore viene filtrato togliendo le donne
  if(risposta=="si"){
      personaggio_mancante.sesso="M";
      filtrato=personaggi.filter(function(e, indice, arr){return e.sesso=="M";});
    }
  
  
  //se ha risposto no il vettore viene filtrato togliendo gli uomini
  else{
      personaggio_mancante.sesso="F";
      filtrato=personaggi.filter(function(e, indice, arr){return e.sesso=="F";});
  }
  personaggi=filtrato;
  num_domanda++;
  domande[num_domanda]();
  }
  
  
  function elabora_vita(){
  //se ha risposto si il vettore viene filtrato togliendo i personaggi ancora vivi
  if(risposta=="si"){
      personaggio_mancante.vivo=false;
      filtrato=personaggi.filter(function(e, indice, arr){return e.vivo==false;});
    }
  
  
  //se ha risposto no il vettore viene filtrato togliendo i personaggi morti
  else{
      personaggio_mancante.vivo=true;
      filtrato=personaggi.filter(function(e, indice, arr){return e.vivo==true;});
  }
  personaggi=filtrato;
  num_domanda++;
  Prossima_domanda();
  }
  
  
  
  
  function elabora_campo(){
  //questa funzione viene chiamata se l'utente afferma che il campo è quello che abbiamo appena chiesto
  //perciò il vettore viene filtrato togliendo i personaggi che non operano in quel campo
  personaggio_mancante.campo=personaggi[conteggio].campo;
  filtrato=personaggi.filter(function(e, indice, arr){return e.campo==personaggi[conteggio].campo;});
  personaggi=filtrato;
  num_domanda++;
  conteggio=0;
  Prossima_domanda();
  }
  
  
  
  
  function elabora_nazionalità(){
  //questa funzione viene chiamata se l'utente afferma che la nazionalità è quella che abbiamo appena chiesto
  //perciò il vettore viene filtrato togliendo i personaggi che non sono di quella nazionalità
  personaggio_mancante.nazionalità=personaggi[conteggio].nazionalità;
  filtrato=personaggi.filter(function(e, indice, arr){return e.nazionalità==personaggi[conteggio].nazionalità;});
  personaggi=filtrato;
  num_domanda++;
  conteggio=0;
  domande[num_domanda]();
  }
  
  
  
  
  function elabora_soprannome(){
  //se ha risposto si il vettore viene filtrato togliendo quelli senza soprannome
  if(risposta=="si"){
    filtrato=personaggi.filter(function(e, indice, arr){return e.soprannome!=""});
    personaggi=filtrato;
    num_domanda++;
    Prossima_domanda();
  }
  
  
  //se ha risposto no il vettore viene filtrato togliendo quelli con un soprannome
  else{
    filtrato=personaggi.filter(function(e, indice, arr){return e.soprannome==""});
    personaggi=filtrato;
    Stampa_personaggio();
  }
  }
  
  
  
  
  function elabora_soprannomi(){
  //questa funzione viene chiamata se l'utente afferma che il soprannome è quello che abbiamo appena chiesto
  //perciò il vettore viene filtrato togliendo i personaggi che non hanno quel soprannome
    personaggio_mancante.soprannome=personaggi[conteggio].soprannome;
    filtrato=personaggi.filter(function(e, indice, arr){return e.soprannome==personaggi[conteggio].soprannome;});
    personaggi=filtrato;
    conteggio=0;
    Stampa_personaggio();
  }
  
  
  
  
  //si occupa di fare le domande del campo, nazionalità e soprannome all'utente
  //fino a quando non indoviniamo. Se non indoviniamo chiamiamo la funzione Aggiungi()
  function Prossima_domanda(){
    if(num_domanda==2){
      //con questo ciclo faccio in modo di non richiedere le stesse domande
        while(già_chiesti.includes(personaggi[conteggio].campo)){
            conteggio++;
            if(conteggio==personaggi.length) break;
        }
    }
    else if(num_domanda==3){
      //con questo ciclo faccio in modo di non richiedere le stesse domande
        while(già_chiesti.includes(personaggi[conteggio].nazionalità) && conteggio<personaggi.length){
            conteggio++;
            if(conteggio==personaggi.length) break;
        }
    }
      if(conteggio==personaggi.length){
        Aggiungi();
      }
      else{
        //chiamo la funzione per chiedere all'utente se il soprannome è quello corrente
        domande[num_domanda]();
      }
    }
  
  
  
  
  
  
  //chiedo le proprietà mancanti
  function Aggiungi(){
  //trovato=false perché se stiamo chiamando questa funzione non abbiamo indovinato il personaggio
  trovato=false;
    if(num_domanda==2){
      //chiedo il campo del personaggio
      personaggio_mancante.campo=prompt("Campo non trovato, in che campo opera il tuo personaggio?");
      num_domanda++;
      conteggio=0;
      Prossima_domanda();
    }
    else if(num_domanda==3){
      //chiedo la nazionalità del personaggio
      personaggio_mancante.nazionalità=prompt("Nazionalità non trovata, di che nazionalità è il tuo personaggio?");
      num_domanda++;
      conteggio=0;
      Prossima_domanda();
    }
    else{
      //chiedo il soprannome del personaggio
      personaggio_mancante.soprannome=prompt("Soprannome non trovato, com'è soprannominato?");
      Stampa_personaggio();
    }
  }
  
  
  
  
  function Stampa_personaggio(){
  //se trovato==false non abbiamo indovinato il personaggio
  //perciò lo chiediamo e lo aggiungiamo al vettore originale
  if(trovato==false){
    personaggio_mancante.nome=prompt("Mi hai battuto, a chi stavi pensando?");
    personaggi_originale.push(personaggio_mancante);
    document.getElementById("domanda").innerHTML="";

    //rendo invisibili i pulsanti SI e NO
    document.getElementById("si").hidden=true;
    document.getElementById("no").hidden=true;

    
  //faccio riapparire il pulsante "Rigioca"
  document.getElementById("rigioca").hidden=false;
  }
  
  
  else if(num_domanda==4){
    //se non è stato trovato nessun personaggio senza soprannome trovato=false e richiamo questa funzione
    if(personaggi.length==0){
      trovato=false;
      Stampa_personaggio();
    }
    else if(personaggi.length>1){
      //creo la lista di personaggi che non hanno un soprannome
      let str="Stavi pensando a uno di loro?<br>"
      for(let i=0; i<personaggi.length; i++){
        str+=personaggi[i].nome + "<br>";
      }
      document.getElementById("domanda").innerHTML=str;
    }
    else{
      document.getElementById("domanda").innerHTML="Stavi pensando a " + personaggi[0].nome + "?";
    }
    num_domanda=6;
  }
  
  
  //stampiamo il personaggio che abbiamo trovato
  else{
    document.getElementById("domanda").innerHTML="Stavi pensando a " + personaggi[0].nome + "?";
    num_domanda++;
  }
  }
  
