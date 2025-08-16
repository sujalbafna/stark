import React, { useState } from 'react';
import { X, ShoppingBag, MapPin, Phone, User, CreditCard, CheckCircle, Loader, Shield, Truck } from 'lucide-react';
import ShippingCalculator from './ShippingCalculator';

interface BuyNowFormProps {
  productName: string;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  address: string;
  city: string;
  pincode: string;
  phoneNumber: string;
  email: string;
  quantity: number;
}

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  extraCharge: number;
  icon: React.ReactNode;
  color: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BuyNowForm: React.FC<BuyNowFormProps> = ({ productName, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    city: '',
    pincode: '',
    phoneNumber: '',
    email: '',
    quantity: 1
  });
  
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const PRICE_PER_UNIT = 299;
  const productTotal = formData.quantity * PRICE_PER_UNIT;
  const paymentCharges = selectedPayment?.extraCharge || 0;
  const totalAmount = productTotal + paymentCharges;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({
      ...formData,
      quantity: newQuantity
    });
  };

  const handlePaymentSelect = (option: PaymentOption) => {
    setSelectedPayment(option);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPayment) {
      alert('Please select a payment option');
      return;
    }

    if (!window.Razorpay) {
      alert('Payment gateway is not loaded. Please refresh the page and try again.');
      return;
    }

    setIsProcessing(true);

    const options = {
      key: 'rzp_test_R5H8Qj2m82zqi8', // Replace with your Razorpay Key ID
      amount: totalAmount * 100, // Amount in paise
      currency: 'INR',
      name: 'Stark',
      description: `${productName} Powdered Soap - ${formData.quantity} bottle(s)`,
      image: '/Stark Logo company.png',
      order_id: '', // Generate from backend
      handler: async function (response: any) {
        try {
          // Process order
          const orderData = {
            customerName: formData.fullName,
            address: formData.address,
            city: formData.city,
            pincode: formData.pincode,
            phone: formData.phoneNumber,
            email: formData.email,
            productName,
            quantity: formData.quantity,
            paymentMethod: selectedPayment.id,
            paymentCharges: selectedPayment.extraCharge
          };

          // Generate mock AWB for demo
          const mockAwb = `STK${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
          
          setOrderDetails({
            paymentId: response.razorpay_payment_id,
            awb: mockAwb,
            paymentMethod: selectedPayment.name,
            estimatedDelivery: '3-5 business days'
          });

          setIsProcessing(false);
          setIsOrderComplete(true);
          
          // Send order confirmation email (implement backend endpoint)
          console.log('Order completed:', {
            payment: response,
            orderData: orderData
          });
          
        } catch (error) {
          console.error('Error processing order:', error);
          setIsProcessing(false);
          alert('Order processing failed. Please contact support.');
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phoneNumber
      },
      notes: {
        address: `${formData.address}, ${formData.city}, ${formData.pincode}`,
        product: productName,
        quantity: formData.quantity.toString(),
        payment_method: selectedPayment.id,
        payment_charges: selectedPayment.extraCharge.toString()
      },
      theme: {
        color: '#16a34a'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', function (response: any) {
      setIsProcessing(false);
      alert('Payment failed: ' + response.error.description);
    });

    rzp.open();
  };

  if (isOrderComplete && orderDetails) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h3>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-mono text-gray-900">{orderDetails.paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking Number:</span>
                <span className="font-mono text-gray-900">{orderDetails.awb}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="text-gray-900">{orderDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="text-gray-900">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            Your order has been confirmed and will be processed for shipping. 
            You'll receive updates on your email and phone.
          </p>
          
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-6 w-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Complete Your Order</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Product Info */}
            <div className="bg-green-50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{productName} Powdered Soap</h4>
                  <p className="text-sm text-gray-600">100g Bottle</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">₹{PRICE_PER_UNIT} each</p>
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={formData.quantity <= 1}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold text-gray-900 bg-white">
                      {formData.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right flex-1">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-xl font-bold text-gray-900">₹{productTotal}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-2" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                  Shipping Address
                </h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="House/Flat No., Street, Landmark"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        required
                        pattern="[0-9]{6}"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isProcessing || !selectedPayment}
                  className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5" />
                      <span>Pay ₹{totalAmount} Securely</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Shipping & Summary */}
          <div className="space-y-6">
            {/* Payment Options */}
            <ShippingCalculator
              onPaymentSelect={handlePaymentSelect}
            />

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingBag className="h-5 w-5 text-green-600 mr-2" />
                Order Summary
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product ({formData.quantity}x)</span>
                  <span className="font-semibold">₹{productTotal}</span>
                </div>
                
                {selectedPayment && selectedPayment.extraCharge > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{selectedPayment.name} Charges</span>
                    <span className="font-semibold">₹{paymentCharges}</span>
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-green-600">₹{totalAmount}</span>
                  </div>
                </div>
              </div>

              {selectedPayment && (
                <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold">Selected: {selectedPayment.name}</p>
                    <p>Estimated delivery: 3-5 business days</p>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Secure payment via Razorpay</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Fast and reliable delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Real-time order tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-blue-800">
              <strong>Secure & Fast:</strong> Payment via Razorpay, delivery via Delhivery. 
              Your payment is secure and delivery is handled by trusted partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowForm;