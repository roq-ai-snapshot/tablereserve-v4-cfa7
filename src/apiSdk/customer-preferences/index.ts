import axios from 'axios';
import queryString from 'query-string';
import { CustomerPreferenceInterface } from 'interfaces/customer-preference';
import { GetQueryInterface } from '../../interfaces';

export const getCustomerPreferences = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-preferences${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCustomerPreference = async (customerPreference: CustomerPreferenceInterface) => {
  const response = await axios.post('/api/customer-preferences', customerPreference);
  return response.data;
};

export const updateCustomerPreferenceById = async (id: string, customerPreference: CustomerPreferenceInterface) => {
  const response = await axios.put(`/api/customer-preferences/${id}`, customerPreference);
  return response.data;
};

export const getCustomerPreferenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-preferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerPreferenceById = async (id: string) => {
  const response = await axios.delete(`/api/customer-preferences/${id}`);
  return response.data;
};
