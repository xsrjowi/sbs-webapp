export interface User {
    id: number;
    name: string;
    lastname: string;
    username: string;
    birthdate: Date;
    email?: string;
    password: string;
    twitteruuid?: string;
    instagramuuid?: string;
    tiktokuuid?: string;
    twitchuuid?: string;
}