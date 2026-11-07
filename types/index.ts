// User and authentication types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  preferredLanguage: string;
  theme: 'light' | 'dark';
  createdAt: Date;
  updatedAt: Date;
}

// Subscription types
export type SubscriptionPlan = 'free' | 'starter' | 'pro' | 'business';

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: 'active' | 'canceled' | 'expired';
  imagesPerMonth: number;
  maxWordsPerImage: number;
  billingInterval: 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  nextBillingDate: Date;
  createdAt: Date;
}

// Conversion types
export interface TextConversion {
  id: string;
  userId: string;
  originalText: string;
  wordCount: number;
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  createdAt: Date;
}

// Payment types
export interface PaymentTransaction {
  id: string;
  userId: string;
  subscriptionId: string;
  paypalOrderId: string;
  paypalCaptureId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: Date;
}
