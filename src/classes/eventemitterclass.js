class EventEmitter{
	constructor(event){
		this.event = event;
	}
	on(eventName,callback){
		if (eventName === event) {
			callback();
		}
	}
	emit(eventName){}
	off(eventName,callback){
		 if (eventName === event) {
		    callback();
		}
	}
}

export default EventEmitter;