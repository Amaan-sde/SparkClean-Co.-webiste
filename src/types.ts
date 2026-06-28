/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  basePrice: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  photoUrl: string;
}

export interface ChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  homeSize: string;
  frequency: string;
  extraFridge: boolean;
  extraOven: boolean;
  extraWindows: boolean;
  extraDeep: boolean;
  preferredDate: string;
  specialNotes?: string;
}
