import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Root route - keep at top
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

// Specific routes BEFORE parameterized routes
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

// POST route for creating subscription
subscriptionRouter.post('/', authorize, createSubscription);

// Parameterized routes at the end
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscriptions details' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscriptions' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

export default subscriptionRouter;