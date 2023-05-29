import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/app.css';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        phone_number: '',
        country: '',
        state: '',
        address: '',
        password: '',
        password_confirmation: '',
        role:'ROLE_CUSTOMER'
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <h1 className={`text-center`}>Registration Form</h1>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Full Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.full_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('full_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.full_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phoneNumber" value="Phone Number" />

                    <TextInput
                        id="phoneNumber"
                        type="text"
                        name="phone_number"
                        value={data.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('phone_number', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="country" value="Country" />

                    <TextInput
                        id="country"
                        type="text"
                        name="country"
                        value={data.country}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('country', e.target.value)}
                        required
                    />

                    <InputError message={errors.country} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="state" value="State" />

                    <TextInput
                        id="state"
                        type="text"
                        name="state"
                        value={data.state}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('state', e.target.value)}
                        required
                    />

                    <InputError message={errors.state} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="state" value="Adress" />

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('address', e.target.value)}
                        required
                    />

                    <InputError message={errors.state} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
