$(document).ready(function(){
	if(window.location.pathname=="/"){
		if(window.innerWidth < 750){
			$( ".accueil" ).css( "background", "#63a599" );
		}else{
			$( ".accueil" ).css( "background", "#465057" );
			$( ".accueil" ).css( "color", "white" );
		}
	}else if(window.location.pathname=="/poster"){
		if(window.innerWidth < 750){
			$( ".poster" ).css( "background", "#63a599" );
		}else{
			$( ".poster" ).css( "background", "#465057" );
			$( ".poster" ).css( "color", "white" );
		}
	}else if(window.location.pathname=="/annoncespassagers"){
		if(window.innerWidth < 750){
			$( ".demandes" ).css( "background", "#63a599" );
		}else{
			$( ".demandes" ).css( "background", "#465057" );
			$( ".demandes" ).css( "color", "white" );
		}
	}else if(window.location.pathname=="/commentaires"){
		if(window.innerWidth < 750){
			$( ".contact" ).css( "background", "#63a599" );
		}else{
			$( ".contact" ).css( "background", "#465057" );
			$( ".contact" ).css( "color", "white" );
		}			
	}
});
//#465057