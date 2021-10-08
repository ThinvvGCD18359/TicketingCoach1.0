const prisma = require('../prisma/prisma');

class CoachController {
    getCoaches = async (req, res, next) => {
        try {
           const getCoaches = await prisma.coach.findMany();
  
           res.status(200).json(getCoaches);
        } catch (error) {
           return next(error);
        }
    };

    createNewCoach = async (req, res, next) => {
        try {
           const createCoach = await prisma.coach.create({
              data: {
                 name: req.body.name,
                 plates: req.body.plates,
                 phonenumber: req.body.phonenumber,
              },
           });
           res.status(200).json(createCoach);
        } catch (error) {
         console.log(error);
           return next(error);
        }
     };

     createNewRoute = async (req, res, next) => {
        try {
           const createRoute = await prisma.route.create({
              data: {
                 starting: req.body.starting,
                 destination: req.body.destination,
                 departure: new Date(req.body.departure),
                 price: parseInt(req.body.price)
              },
           });
           res.status(200).json(createRoute);
        } catch (error) {
           console.log(error);
           return next(error);
        }
     };

     addNewSeat = async (req, res, next) => {
        try {
           const addSeat = await prisma.seat.create({
              data: {
                 number: req.body.number,

              },
           });
           res.status(200).json(addSeat); 
        } catch (error) {
           console.log(error);
           return next(error);
        }
     }

     getPopular = async (req, res, next) => {
      try {
         const response = await prisma.coach.findMany({
            take: 3,
            orderBy: {
               name: 'asc',
            },
         });

         return res.status(200).json(response);
      } catch (error) {
         return next(error);
      }
   };
}

module.exports = new CoachController();