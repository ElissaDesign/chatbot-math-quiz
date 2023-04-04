import express from 'express';
import { userProvidesDifficultyLevel, userProvidesAnswer} from '../controllers/export.controller.js'
import formatDialogflowResponse from '../utils/formatResponse.js'


const router = express.Router();

router.post('/dialogflow', (req, res) => {

    let action = req.body.queryResult.action;

    console.log('Webhook called.');
    console.log(`Action name --> ${action}`);

    let responseData = {};

    if (action === 'userProvidesDifficultyLevel') {
        responseData = userProvidesDifficultyLevel(req);
    } else if (action === 'userProvidesAnswer') {
        responseData = userProvidesAnswer(req);
    }
    else {
        responseData = formatDialogflowResponse(
            `Unknown action ${action}. No handler for this action on the webhook.`,
            []
        );
    }

    res.send(responseData);
});

export default router;