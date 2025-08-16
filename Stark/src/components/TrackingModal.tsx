import React, { useState } from 'react';
import { X, Search, Package, MapPin, Clock, CheckCircle, Truck } from 'lucide-react';
import { delhiveryService, type TrackingInfo } from '../services/delhivery';

interface TrackingModalProps {
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ onClose }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo[]>([]);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsTracking(true);
    setError('');

    try {
      const info = await delhiveryService.trackShipment(trackingNumber);
      setTrackingInfo(info);
      
      if (info.length === 0) {
        setError('No tracking information found for this number');
      }
    } catch (err) {
      setError('Failed to fetch tracking information. Please try again.');
    } finally {
      setIsTracking(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'in transit':
        return 'text-blue-600 bg-blue-100';
      case 'out for delivery':
        return 'text-orange-600 bg-orange-100';
      case 'picked up':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Package className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Track Your Order</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tracking Input */}
        <div className="mb-6">
          <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Tracking Number
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="trackingNumber"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g., DHL123456789"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleTrack}
              disabled={isTracking}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isTracking ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span>Track</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Tracking Results */}
        {trackingInfo.length > 0 && (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Shipment Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700">AWB Number</p>
                  <p className="font-mono font-semibold">{trackingInfo[0].awb}</p>
                </div>
                <div>
                  <p className="text-blue-700">Current Status</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(trackingInfo[0].status)}`}>
                    {trackingInfo[0].status}
                  </span>
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-5 w-5 text-green-600 mr-2" />
                Tracking Timeline
              </h4>
              <div className="space-y-4">
                {trackingInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                      {index < trackingInfo.length - 1 && (
                        <div className="w-0.5 h-8 bg-gray-200 ml-1 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-gray-900">{info.status}</p>
                        <span className="text-sm text-gray-500">
                          {new Date(info.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{info.location}</span>
                      </div>
                      {info.estimatedDelivery && (
                        <div className="flex items-center space-x-2 text-sm text-green-600 mt-1">
                          <Clock className="h-3 w-3" />
                          <span>Estimated delivery in {info.estimatedDelivery}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Instructions */}
            <div className="bg-green-50 rounded-2xl p-4">
              <h5 className="font-semibold text-green-900 mb-2">Delivery Information</h5>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Ensure someone is available to receive the package</li>
                <li>• Keep your phone accessible for delivery updates</li>
                <li>• Valid ID may be required for delivery</li>
                <li>• Contact our support if you need to reschedule</li>
              </ul>
            </div>
          </div>
        )}

        {/* Sample Tracking for Demo */}
        {trackingInfo.length === 0 && !error && (
          <div className="text-center py-8">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">Enter your tracking number to see shipment details</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Demo Tracking Number:</strong> DHL123456789
              </p>
              <button
                onClick={() => {
                  setTrackingNumber('DHL123456789');
                  handleTrack();
                }}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Try Demo Tracking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingModal;