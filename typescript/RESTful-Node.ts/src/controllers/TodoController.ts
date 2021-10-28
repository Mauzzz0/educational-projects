import BaseController from "../core/BaseController"
import { Request, Response, NextFunction } from 'express'
import { TodoService } from "../services/TodoService";


export class TodoController extends BaseController {
    getPath(): string {
        return '/todo';
    }

    initRoutes(): void {
        this.getAsync('/get', this.getTodo);
        this.postAsync('/create', this.createTodo);
        this.deleteAsync('/delete', this.deleteTodo);
        this.patchAsync('/patch', this.updateTodo);
    }

    async getTodo(req: Request, res: Response, next: NextFunction) {
        const id = req.query.id as string;

        const result = await TodoService.getByIdOrAll(id);

        res.status(200).json(result);
    }

    async createTodo(req: Request, res: Response, next: NextFunction) {
        const title = req.body.title as string;
        const description = req.body.description as string;
        const isComplete = req.body.isComplete as boolean;
        const userId = req.get('userId') as string;

        const result = await TodoService.create(title, description, isComplete, userId);

        res.status(200).json(result);
    }

    async deleteTodo(req: Request, res: Response, next: NextFunction) {
        const id = req.query.id as string;

        const result = await TodoService.delete(id);

        res.status(200).json(result);
    }

    async updateTodo(req: Request, res: Response, next: NextFunction) {
        const id = req.body.id as string;
        const title = req.body.title as string;
        const description = req.body.description as string;
        const isComplete = req.body.isComplete as boolean;

        const result = await TodoService.update(id, title, description, isComplete);

        res.status(200).json(result);
    }
}

export default new TodoController();