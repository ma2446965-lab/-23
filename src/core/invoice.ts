import { round2 } from '../lib/format';

export interface InvoiceItem {
  description: string;
  qty: number;
  price: number;
}

export interface InvoiceTotals {
  subtotal: number;
  tax: number;
  total: number;
}

export function calcInvoice(items: InvoiceItem[], taxRatePct: number): InvoiceTotals {
  const subtotal = items.reduce((sum, it) => sum + (it.qty || 0) * (it.price || 0), 0);
  const tax = subtotal * (taxRatePct / 100);
  return {
    subtotal: round2(subtotal),
    tax: round2(tax),
    total: round2(subtotal + tax),
  };
}
