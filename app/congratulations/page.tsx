'use client';
import { useSearchParams } from 'next/navigation';

export default function congratulations() {
    const searchParams = useSearchParams();

    const search = searchParams.get('formData');
    console.log(search);
    return <div>Parabéns, você enviou seus dados</div>;
}
