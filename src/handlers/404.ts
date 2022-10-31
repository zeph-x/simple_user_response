import { Request, Response } from 'express'
import { BaseHandler } from '../interfaces'


class BadRoute extends BaseHandler {

    /* Handle Bad route */
    static handleBadRoute(req: Request, res: Response) {

        res.status(404).send(
            {
                success: false,
                message: 'Invalid Route. Please confirm your endpoint.'
            })

    }

}



export default BadRoute