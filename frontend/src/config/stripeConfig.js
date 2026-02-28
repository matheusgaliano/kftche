import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51T5rQuBkWgIna4UA32i9ABggHFCh9szO0wP92tZQp7Zr2mHV4haCj7O3cQfBADXWpz0MydGE6k6bQA2QxblSfafy002hejDIk5'
);

export default stripePromise;