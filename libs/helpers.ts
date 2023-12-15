import { Price } from "@/types";

export const getUrls = () => {
    let url =
        process.env.NEXT_PUBLIC_SITE_URL ??
        process.env.NEXT_PUBLIC_VERCEL_URL ??
        'http://localhost:3000';

    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

    return url;
};

export const postData = async ({ url, data }: { url: string, data?: { price: Price } }) => {
    console.log('POST REQUEST => ', url, data);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'same-origin'
    });

    if (!response.ok) {
        console.error('POST REQUEST ERROR => ', { url, data, response });
        throw new Error(response.statusText);
    }
    return response.json();
}

export const toDateTime = (sec: number) => {
    var t = new Date('1970-01-01T00:30:00Z');
    t.setSeconds(sec);
    return t;
}