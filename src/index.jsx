import Movie from './classes/movieclass.js';
import Actor from './classes/actorclass.js';
import Logger from './classes/loggerclass.js';

let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let actors = [
                new Actor('Paul Winfield', 50),
                new Actor('Michael Biehn', 50),
                new Actor('Linda Hamilton', 50)
               ];

terminator.addCast(arnold);
terminator.addCast(actors);


let logger = new Logger();

$(function(){
     terminator.on('Play', logger.log);
	});

terminator.play();


let ironman = new Movie('Iron Man', 2009, 90);
let social = {
	           share: function(friendName){
                         console.log(friendName+' share '+ironman.name);
   
	                  },
	           like: function(friendName){
	           	        console.log(friendName+' likes '+ironman.name)

	                 }
            };

Object.assign(ironman, social);
ironman.share('Mike Blossom');





 