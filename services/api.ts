import { Product } from '../types/Product';

const API_URL = process.env.API_URL || 'https://api.example.com';

export const productService = {
  async getProducts(searchQuery: string = ''): Promise<Product[]> {
    try {
      const response = await fetch(`${API_URL}/products?q=${searchQuery}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await response.json();
  },

  async updateProduct(product: Product): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await response.json();
  },

  async deleteProduct(id: string): Promise<void> {
    await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
  },
};