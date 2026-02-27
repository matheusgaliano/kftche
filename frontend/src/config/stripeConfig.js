import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_live_51T5Dxd4AqsQgY6eniCHt9LS8H2lCr199Wudy738p3XrTLyXMFRXMAdL2LyCklpZnx92QoiQ5lbLCnJa6QxNimvm600xq5utvhh'
);

export default stripePromise;