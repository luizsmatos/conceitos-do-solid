import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id: user_idRaw } = request.params;
    const user_id = user_idRaw.toString();

    this.showUserProfileUseCase.execute({ user_id });

    return response.send();
  }
}

export { ShowUserProfileController };
