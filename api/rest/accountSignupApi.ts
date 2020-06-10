import * as express from "express";
import { signupUser } from "../services/accountSignupService";
const router = express.Router();

router.post("/user/signup", async (req, res) => {
    let user =  new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.passwordHash = hashText(req.body.password);

    try {
        user = await signupUser(user);
        if (user) {
            res.json(user);
        }
    } catch (e) {
        res.json({}).status(500).send(e.message);
    }
});

// Todo: call Hashing API
function hashText(text: string) {
    return text;
}

export default router;