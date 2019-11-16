export class IUser {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public jobType: boolean,
        public gender: string,
        public codelang: string,
    ) {}
}
