import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessagerController";
import { GetLastMessagesControl } from "./controllers/GetLastMessagesControl";
import { ProfileUserControl } from "./controllers/ProfileUserControl";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last", new GetLastMessagesControl().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserControl().handle)

export{router}