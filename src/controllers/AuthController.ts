import BaseController from "../core/BaseController"
import { Request, Response, NextFunction } from 'express'
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";


export class AuthController extends BaseController {
    getPath(): string {
        return '/auth';
    }

    initRoutes(): void {
        this.postAsync('/login', this.login);
        // TODO: Это пост, верно?
        this.postAsync('/registration', this.register);
    }

    async login(req: Request, res: Response, next: NextFunction){
        const email = req.body.email as string;
        const password = req.body.password as string;

        const result = await AuthService.login(email, password);

        res.status(200).json(result);
    }

    async register(req: Request, res: Response, next: NextFunction){
        const email = req.body.email as string;
        const password = req.body.password as string;
        const phone = req.body.phone as string;

        const result = await UserService.create(email, password, phone);

        res.status(200).json(result);
    }
    
}

export default new AuthController();