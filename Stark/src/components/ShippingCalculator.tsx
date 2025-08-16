import React, { useState } from 'react';
import { CreditCard, Banknote } from 'lucide-react';

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  extraCharge: number;
  icon: React.ReactNode;
  color: string;
}

interface ShippingCalculatorProps {
  onPaymentSelect?: (option: PaymentOption) => void;
}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({ 
  onPaymentSelect 
}) => {
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);

  const paymentOptions: PaymentOption[] = [
    {
      id: 'online',
      name: 'Online Payment',
      description: 'Pay securely with Cards, UPI, Net Banking, Wallets',
      extraCharge: 0,
      icon: <CreditCard className="h-5 w-5 text-green-600" />,
      color: 'border-green-200 hover:border-green-300'
    }
  ];

  // Auto-select the only payment option
  React.useEffect(() => {
    if (paymentOptions.length === 1 && !selectedPayment) {
      handlePaymentSelect(paymentOptions[0]);
    }
  }, []);

  const handlePaymentSelect = (option: PaymentOption) => {
    setSelectedPayment(option);
    onPaymentSelect?.(option);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <CreditCard className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Payment Options</h3>
      </div>

      <div className="space-y-3">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handlePaymentSelect(option)}
            className={`border-2 rounded-xl p-5 cursor-pointer transition-all hover:shadow-md ${
              selectedPayment?.id === option.id
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : `border-gray-200 ${option.color}`
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-green-100">
                  {option.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{option.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
              </div>
              <div className="text-right">
                {option.extraCharge > 0 ? (
                  <div>
                    <p className="font-bold text-gray-900 text-xl">+₹{option.extraCharge}</p>
                    <p className="text-xs text-gray-500">Extra charges</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-bold text-green-600 text-xl">Free</p>
                    <p className="text-xs text-gray-500">No extra charges</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Selected Option Summary */}
      {selectedPayment && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-blue-900">Selected: {selectedPayment.name}</p>
              <p className="text-sm text-blue-700">{selectedPayment.description}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-blue-900">
                {selectedPayment.extraCharge > 0 ? `+₹${selectedPayment.extraCharge}` : 'Free'}
              </p>
              <p className="text-xs text-blue-600">Payment charges</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;