export interface ShippingRate {
  serviceName: string;
  rate: number;
  estimatedDays: string;
  paymentMethod: 'COD' | 'Online';
  deliveryDate: string;
}

export interface TrackingInfo {
  awb: string;
  status: string;
  location: string;
  timestamp: string;
  estimatedDelivery?: string;
}

export interface PincodeServiceability {
  serviceable: boolean;
  codAvailable: boolean;
  estimatedDays: number;
  deliveryDate: string;
  city: string;
  state: string;
}

class DelhiveryService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    // In production, use environment variables
    this.apiKey = 'ccc460d30f1708d730193260edff7504d7969967'; // Replace with actual API key
    this.baseUrl = 'https://track.delhivery.com/api';
  }

  // Check if pincode is serviceable
  async checkServiceability(pincode: string): Promise<PincodeServiceability> {
    try {
      // For demo purposes, simulate API call with realistic data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Mock serviceability check based on common Indian pincodes
      const serviceablePincodes = ['110001', '400001', '560001', '700001', '600001', '500001', '411001', '380001', '302001', '226001'];
      const isServiceable = serviceablePincodes.includes(pincode) || Math.random() > 0.2; // 80% chance serviceable
      
      if (isServiceable) {
        const estimatedDays = Math.floor(Math.random() * 5) + 2; // 2-6 days
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + estimatedDays);
        
        return {
          serviceable: true,
          codAvailable: Math.random() > 0.3, // 70% chance COD available
          estimatedDays: estimatedDays,
          deliveryDate: deliveryDate.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          city: this.getCityFromPincode(pincode),
          state: this.getStateFromPincode(pincode)
        };
      }

      return {
        serviceable: false,
        codAvailable: false,
        estimatedDays: 0,
        deliveryDate: 'Not available',
        city: '',
        state: ''
      };
    } catch (error) {
      console.error('Error checking serviceability:', error);
      // Fallback response
      return {
        serviceable: false,
        codAvailable: false,
        estimatedDays: 0,
        deliveryDate: 'Error checking delivery',
        city: '',
        state: ''
      };
    }
  }

  private getCityFromPincode(pincode: string): string {
    const cityMap: { [key: string]: string } = {
      '110001': 'New Delhi',
      '400001': 'Mumbai',
      '560001': 'Bangalore',
      '700001': 'Kolkata',
      '600001': 'Chennai',
      '500001': 'Hyderabad',
      '411001': 'Pune',
      '380001': 'Ahmedabad',
      '302001': 'Jaipur',
      '226001': 'Lucknow'
    };
    return cityMap[pincode] || 'Your City';
  }

  private getStateFromPincode(pincode: string): string {
    const stateMap: { [key: string]: string } = {
      '110001': 'Delhi',
      '400001': 'Maharashtra',
      '560001': 'Karnataka',
      '700001': 'West Bengal',
      '600001': 'Tamil Nadu',
      '500001': 'Telangana',
      '411001': 'Maharashtra',
      '380001': 'Gujarat',
      '302001': 'Rajasthan',
      '226001': 'Uttar Pradesh'
    };
    return stateMap[pincode] || 'Your State';
  }

  // Get shipping rates
  async getShippingRates(
    originPincode: string,
    destinationPincode: string,
    weight: number,
    codAvailable: boolean
  ): Promise<ShippingRate[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      
      const baseRate = this.calculateShippingRate(weight);
      const estimatedDays = Math.floor(Math.random() * 3) + 3; // 3-5 days
      
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + estimatedDays);
      const formattedDate = deliveryDate.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      
      const rates: ShippingRate[] = [];
      
      // Online Payment Option
      rates.push({
        serviceName: 'Online Payment',
        rate: baseRate,
        estimatedDays: `${estimatedDays} days`,
        paymentMethod: 'Online',
        deliveryDate: formattedDate
      });
      
      // COD Option (if available)
      if (codAvailable) {
        rates.push({
          serviceName: 'Cash on Delivery (COD)',
          rate: baseRate + 25, // COD charges
          estimatedDays: `${estimatedDays + 1} days`,
          paymentMethod: 'COD',
          deliveryDate: formattedDate
        });
      }
      
      return rates;
    } catch (error) {
      console.error('Error getting shipping rates:', error);
      return [];
    }
  }

  // Calculate shipping rate based on weight and COD
  private calculateShippingRate(weight: number): number {
    let baseRate = 50; // Base rate for first 500g
    
    if (weight > 0.5) {
      const additionalWeight = Math.ceil((weight - 0.5) * 2); // Every 500g
      baseRate += additionalWeight * 20;
    }

    return Math.round(baseRate);
  }

  // Create shipment
  async createShipment(orderData: any): Promise<{ awb: string; success: boolean }> {
    try {
      // In production, implement actual Delhivery shipment creation
      const mockAwb = `DHL${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      return {
        awb: mockAwb,
        success: true
      };
    } catch (error) {
      console.error('Error creating shipment:', error);
      return {
        awb: '',
        success: false
      };
    }
  }

  // Track shipment
  async trackShipment(awb: string): Promise<TrackingInfo[]> {
    try {
      const response = await fetch(`${this.baseUrl}/v1/packages/json/?waybill=${awb}`, {
        headers: {
          'Authorization': `Token ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      // Parse tracking data and return formatted info
      return this.parseTrackingData(data);
    } catch (error) {
      console.error('Error tracking shipment:', error);
      return [];
    }
  }

  private parseTrackingData(data: any): TrackingInfo[] {
    // Mock tracking data for demo
    return [
      {
        awb: data.awb || 'DHL123456789',
        status: 'In Transit',
        location: 'Mumbai Hub',
        timestamp: new Date().toISOString(),
        estimatedDelivery: '2 days'
      }
    ];
  }
}

export const delhiveryService = new DelhiveryService();