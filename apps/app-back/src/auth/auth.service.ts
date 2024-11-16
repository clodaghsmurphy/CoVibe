import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    createUser() {
        return { data: { message: "Hello World!" } };
    }
}