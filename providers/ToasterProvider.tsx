'use client';
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                style: {
                    borderRadius: '10px',
                    background: '#222222',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '10px 15px',
                },
            }}
        />
    );
}

export default ToasterProvider;