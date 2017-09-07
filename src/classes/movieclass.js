import EventEmitter from './eventemitterclass.js'

class Movie extends EventEmitter {
	constructor(name,year,duration) {
		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
	}
	play(){
		event = 'Play';
	}
	pause(){
		event = 'Pause';
	}
	resume(){
		event = 'Resume';
	}
	addCast(cast){
		let array = [];
	   if (cast.length === undefined) {
		  array.push('Actor: '+cast.name+' '+'Edad: '+cast.age);
        }else{
        	for (let i = 0; i< cast.length; i++){
        	  array.push('Actor: '+cast[i].name+' '+'Edad: '+cast[i].age);
        	}
        }
        $.each(array,function(index,contenido){
             console.log(contenido);
        });
	}
}

export default Movie;