import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1M3jVqHIQMNilloEhi6fU5Nt" }],
<<<<<<< HEAD
        phone_number_collection: {"enabled": true},
=======
        phone_number_collection: {
          enabled: true,
        },
>>>>>>> a248a394905f93d841541b9e2132bfd4424bb28b
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/y5p2xknm/production/"
            )
            .replace("-webp", ".webp")
            .replace("-jpg", ".jpg")
            .replace("-jpeg", ".jpeg")
            .replace("-png", ".png");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
