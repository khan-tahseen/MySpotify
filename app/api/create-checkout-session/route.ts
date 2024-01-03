import { stripe } from '@/libs/stripe';
import { createOrRetrieveCustomer } from '@/libs/supabaseAdmin';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { getURL } from 'next/dist/shared/lib/utils';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const {
    price,
    quantity = 1,
    metadata: {},
  } = await request.json();

  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const customer = await createOrRetrieveCustomer({
      uuid: user?.id || '',
      email: user?.email || '',
    });

    const session = await stripe.checkout.sessions.create({
      customer: user?.email,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price: price as string,
          quantity: quantity,
        },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      subscription_data: {
        metadata: {},
        trial_period_days: 0,
      },
      success_url: `${getURL()}/account`,
      cancel_url: `${getURL()}`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.log(error);
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}