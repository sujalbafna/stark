# Stark - Touch-Free Herbal Soap Powder

A modern React website for Stark's revolutionary touch-free herbal soap powders with integrated Razorpay payment gateway and Delhivery shipping.

## Features

- 🌿 **100% Natural Products**: Multani Mitti, Beetroot Glow, and Coffee Scrub variants
- 💳 **Secure Payments**: Integrated Razorpay payment gateway
- 🚚 **Smart Shipping**: Delhivery integration for delivery and tracking
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🛒 **Complete E-commerce**: Product selection, shipping calculation, and order tracking

## Payment & Shipping Integration

### Razorpay Payment Gateway
- Credit/Debit Cards
- UPI Payments
- Net Banking
- Digital Wallets
- EMI Options

### Delhivery Shipping
- Real-time pincode serviceability check
- Dynamic shipping rate calculation
- Multiple delivery options (Express/Surface)
- Cash on Delivery (COD) support
- Real-time order tracking
- Automated shipment creation

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Razorpay

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your API keys from the dashboard
3. Update the Razorpay key in `src/components/BuyNowForm.tsx`:

```javascript
const options = {
  key: 'your_razorpay_key_here', // Replace with your actual key
  // ... other options
};
```

### 3. Configure Delhivery

1. Sign up at [Delhivery Partner Portal](https://www.delhivery.com/)
2. Get your API credentials
3. Update the API key in `src/services/delhivery.ts`:

```javascript
constructor() {
  this.apiKey = 'your_delhivery_api_key'; // Replace with actual API key
  this.baseUrl = 'https://track.delhivery.com/api';
}
```

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## API Configuration

### Environment Variables (Recommended)

Create a `.env` file for sensitive configuration:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_DELHIVERY_API_KEY=your_delhivery_api_key
VITE_DELHIVERY_BASE_URL=https://track.delhivery.com/api
```

## Complete Order Flow

1. **Product Selection**: Customer selects product and quantity
2. **Shipping Check**: Real-time pincode serviceability verification
3. **Rate Calculation**: Dynamic shipping cost calculation based on weight and destination
4. **Secure Payment**: Razorpay checkout with multiple payment options
5. **Shipment Creation**: Automatic shipment booking with Delhivery
6. **Order Confirmation**: Customer receives order details and tracking number
7. **Real-time Tracking**: Customers can track their orders anytime

## Delhivery Features Implemented

### Serviceability Check
- Pincode validation
- COD availability check
- Estimated delivery time
- City and state identification

### Shipping Rate Calculation
- Weight-based pricing
- Distance-based rates
- COD charges calculation
- Multiple service options

### Order Tracking
- Real-time shipment status
- Location updates
- Estimated delivery time
- Delivery timeline

## Security & Best Practices

### Payment Security
- Never expose Razorpay secret keys in frontend
- Implement server-side payment verification
- Use HTTPS in production
- Validate all payment responses

### Shipping Security
- Secure API key management
- Input validation for all shipping data
- Error handling for API failures
- Fallback options for service disruptions

## Production Deployment

### Backend Requirements
For production, implement these backend endpoints:

1. **Payment Verification**
   ```
   POST /api/verify-payment
   - Verify Razorpay payment signature
   - Store order in database
   ```

2. **Shipment Management**
   ```
   POST /api/create-shipment
   - Create Delhivery shipment
   - Generate AWB number
   - Send confirmation emails
   ```

3. **Webhook Handlers**
   ```
   POST /api/webhooks/razorpay
   POST /api/webhooks/delhivery
   - Handle payment and shipping status updates
   ```

## Testing

### Test Mode Setup
- Use Razorpay test API keys
- Use Delhivery staging environment
- Test with sample pincodes: 110001, 400001, 560001

### Test Scenarios
- Valid/invalid pincodes
- Different payment methods
- COD vs prepaid orders
- Order tracking flow

## Support & Documentation

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Delhivery API Documentation](https://www.delhivery.com/api/)
- [Integration Guides](https://razorpay.com/docs/payments/payment-gateway/web-integration/)

## License

This project is proprietary software for Stark brand.