import BaseController from "../core/BaseController"
import { Request, Response, NextFunction } from 'express'
import { UserService } from "../services/UserService";


export class UserController extends BaseController {
    getPath(): string {
        return '/user';
    }

    initRoutes(): void {
        this.getAsync('/get', this.getUser);
        this.postAsync('/create', this.createUser);
        this.deleteAsync('/delete', this.deleteUser);
        this.patchAsync('/patch', this.updateUser);
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        const id = req.query.id as string;

        const result = await UserService.getByIdOrAll(id);

        res.status(200).json(result);
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        const email = req.body.email as string;
        const password = req.body.password as string;
        const phone = req.body.phone as string;

        const result = await UserService.create(email, password, phone);

        res.status(200).json(result);
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        const id = req.query.id as string;

        const result = await UserService.delete(id);

        res.status(200).json(result);
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        const id = req.body.id as string;
        const email = req.body.email as string;
        const password = req.body.password as string;
        const phone = req.body.phone as string;

        const result = await UserService.update(id, email, password, phone);

        res.status(200).json(result);
    }
}

export default new UserController();