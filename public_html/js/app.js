var a = {};
a.pfolder = 'pgs/';
a.id = 0;
a.msg = function(m){
    alert(m);
};
a.load = function(p){
    a.pg = p;
    try{
        $('.dyn').load(a.pfolder+p+'.html');
    }catch(e){
        console.log('Error:',e);
        a.notFound();
        return false;
    }
};
a.notFound = function(){
    $('.dyn').load(a.pfolder+'notfound.html');
};

a.startApp = function () {
	//inibisco la cache sui dati che carico da remoto
	$.ajaxSetup({cache:false})
	
	//rotte 
	Path.map("#/home").to(function () {
		a.load('home');
	}) ;
	Path.map("#/:pag(/:id)").to(function () {
		//se nell'URL è stato specificato un id, lo memorizzo in una variabile figlia di a.p, che ha il nome della pagina corrente ed il suffisso _id (es: post_id)
		a.id = this.params.id;
		//permette alle pagine di caricare dati
		a.notLoad=false;
		//carico la pagina specificata nel parametro "pag"
		a.load(this.params.pag);
	});	
	Path.root("#/home"); // rotta di default: se non viene specificata alcuna route nell'url carica la home
	Path.rescue(a.notFound); // se la rotta specificata non è valida esegue la funzione a.notFound
	Path.listen(); //ENTRA IN AZIONE!
	$('#int1').load('pgs/int1.html');
	$('#sec2').load('pgs/sec2.html');
	$('#sec3').load('pgs/sec3.html');
	$('#sec4').load('pgs/sec4.html');
	$('#sec5').load('pgs/sec5.html');
	};

$(a.startApp);

