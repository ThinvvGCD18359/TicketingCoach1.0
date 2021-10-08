import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import CheckoutForm from "../components/checkoutForm"

const PUBLIC_KEY = "pk_test_51JWzugGl1Bia7FXVfckGXYksTZIGscSfgXipWKiAS3iVfuArHsW4GJDESxBSoSSHoBGBFI66A2q12rUQYsQLh1p000dusjUqZN"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<CheckoutForm />
		</Elements>
	)
}