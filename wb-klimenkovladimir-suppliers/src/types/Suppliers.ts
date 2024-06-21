export default interface Supplier {
  heading: string;
  id: string;
  number: number | null;
  date: string | number | null;
  city: string | null;
  quantity: number | string | null;
  typeSuppliers: string | null;
  warehouse: string | null;
  address: string | null;
  status: string | null;
}
