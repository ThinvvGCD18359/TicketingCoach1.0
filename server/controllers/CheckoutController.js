const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

class CheckoutController {
    checkout = async (req, res) => {
        const {amount} = req.body
        // const seatDetail = getSeatDetail();

        // const options = {
        //     ...item,
        //     amount: seatDetail.amount,
        //     currency: seatDetail.currency,
        //     description: "Ticketing Coach",
        //   };
        
        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: "usd",
                description: "Ticketing Coach",
            });
            res.status(200).json(payment);
            console.log("Payment", payment)
            res.json({
                message: "Payment successful",
                success: true
            })
        } catch (error) {
            console.log("Error", error)
            res.json({
                message: "Payment failed",
                success: false
            })
        }
        // let getSeatDetail = () => {
        //     return { currency: "VND", amount: 200000}
        // }
    }
}

module.exports = new CheckoutController();