const coachRouter = require('./coach');
const checkoutRouter = require('./checkout');

function route(app) {
   
   app.use('/coach', coachRouter);
   app.use('/checkout', checkoutRouter);
   
}

module.exports = route;