class StudentCard {
	id: number;
	question: string;
	answer: string;
	type: string;
	rating: number;
	schId: number;
	meter: number;
	interval: number;
	repetitions: number;

	constructor(data: StudentCard) {
		this.id = data.id;
		this.question = data.question;
		this.answer = data.answer;
		this.type = data.type;
		this.rating = data.rating;
		this.schId = data.schId;
		this.meter = data.meter;
		this.interval = data.interval;
		this.repetitions = data.repetitions;
	}
}

export default StudentCard;
