import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id: user_idRaw } = request.params;
    const user_id = user_idRaw.toString();

    this.turnUserAdminUseCase.execute({ user_id });
    return response.status(204).send();
  }
}

export { TurnUserAdminController };
