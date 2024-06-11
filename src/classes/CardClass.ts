import { Card, createEmptyCard, fsrs, FSRS, FSRSParameters, generatorParameters } from "ts-fsrs";

class Data {
	question: string;
	answer: string;

	constructor(props: Data) {
		this.question = props.question;
		this.answer = props.answer;
	}
}

class ProjectCard extends Data {
	id: string;
	fsData: Card;
	constructor(data: Data, id: string) {
		super(data);
		this.id = id;
		const now = new Date();// new Date();
		const card: Card = createEmptyCard(now);
		const params: FSRSParameters = generatorParameters({ enable_fuzz: true, maximum_interval: 10000 });

		const f: FSRS = new FSRS(params);
		this.fsData = card;
	}
}

export default ProjectCard;
