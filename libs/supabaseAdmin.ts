import { Product } from '@/types';
import { Database } from '@/types_db';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const upsertProductRecord = async (product: Stripe.Product) => {
  const productData: Product = {
    id: product.id,
    name: product.name,
    description: product.description ?? undefined,
    image: product.images?.[0] ?? null,
    active: product.active,
    metadata: product.metadata,
  };
};
