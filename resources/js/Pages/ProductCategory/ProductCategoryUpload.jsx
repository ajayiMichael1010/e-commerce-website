import {useEffect, useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/app.css';

export default function ProductCategoryUpload() {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_category_name: '',
        product_category_measuring_unit: '',
    });

    const [loader , setLoader] = useState(false);
    const [response ,setResponse] = useState(null);

    const handleInputChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(name,value);
    }

    const handleSelectChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        data[name] =value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        setResponse(false);
        post(route('product-category.store'),{
            onSuccess: () => {
                setResponse("ProductSeeder Category added")
                setLoader(false);

                setTimeout( () => setResponse(false), 3000)

            },
            onError: () => {
                setLoader(false)
                setResponse("An error has occurred")
            }
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <h1 className={`text-center`}>New Product</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel htmlFor="name" value="Product Category Name" />

                    <TextInput
                        id="productCategoryName"
                        name="product_category_name"
                        value={data.product_category_name}
                        className="mt-1 block w-full"
                        autoComplete="product_category_name"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.product_category_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="productImage" value="Product Measuring Unit" />

                    <select
                        id="productMeasuringUnit"
                        name="product_measuring_unit"
                        className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Select A Unit</option>
                        <option value={`Barrel`}>Barrel</option>
                        <option value={`Container`}>Container</option>
                    </select>

                    <InputError message={errors.product_measuring_unit} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing} type={`submit`}>
                        Add Product Category
                    </PrimaryButton>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {loader && <span style={{color:"red"}}>In progress ...</span>}
                    {response && <span style={{color:"#4BB543"}}>{response}</span>}
                </div>

            </form>
        </GuestLayout>
    );
}
