// Data can be handled in restricted way by encapsulation through setting setters and getters

type Settings = {
	theme: {
		mode: 'dark' | 'light';
		version: 'classic' | 'mordern';
	};
	otp: boolean;
};

class UserModel {
	constructor(public name: string, public lastname: string, public settings: Settings, public user: string) {
		this.name = name;
		this.lastname = lastname;
		this.settings = settings;
	}

	get fullname() {
		return `${this.name} ${this.lastname}`;
	}

	get mode() {
		return this.settings.theme.mode;
	}
}

export default function Encapsulation({ user }: { user: UserModel }) {
	const name = user.name;
	const lastname = user.lastname;
	const mode = user.settings.theme.mode;

	return <form>{`my name is ${lastname} ${name} and this pages is rendered in ${mode} mode`}</form>;
}
