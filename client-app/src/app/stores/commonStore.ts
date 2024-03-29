import { makeAutoObservable, reaction } from "mobx";
import { IServerError } from "../models/serverError";

export default class CommonStore {
    error: IServerError | null = null;
    token: string | null = localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        // reaction
        reaction(
            () => this.token,
            token => {
                if(token) {
                    localStorage.setItem('jwt', token);
                } else {
                    localStorage.removeItem('jwt');
                }
            }
        )
    }

    setServerError(error: IServerError) {
        this.error = error;
    }

    setToken(token: string | null) {
        this.token = token;
    }

    setAppLoaded() {
        this.appLoaded = true;
    }
}