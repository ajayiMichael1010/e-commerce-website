import {useEffect, useRef, useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/app.css';

export default function ProductUpload(productCategories) {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_name: '',
        product_description: '',
        product_image: null,
        product_quantity:'',
        cost_price: '',
        selling_price: '',
        product_category_id: '',
    });

    const [loader , setLoader] = useState(false);
    const [response ,setResponse] = useState(null);

    const [measuringUnit , setMeasuringUnit] = useState("Barrel");

    const formRef = useRef();

    const handleInputChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(name,value);
    }

    const handleSelectChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        data[name] =value;

       let  productMeasuringUnit = productCategories.productCategories.filter(proCat => proCat.id==value);
       productMeasuringUnit = productMeasuringUnit[0].measurement;
       setMeasuringUnit(productMeasuringUnit);
    }

    const handleFileChange =(e) => {
        const name = e.target.name;
        const value = e.target.files;
        data[name] = value[0];
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true);
        setResponse(false);

       post(route('product.store'),{
           onSuccess: () => {
               setResponse("ProductSeeder added")
               setLoader(false);
               formRef.current.reset();

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

            <form onSubmit={handleSubmit} ref={formRef}>
                <div>
                    <InputLabel htmlFor="name" value="Product Name" />

                    <TextInput
                        id="productName"
                        name="product_name"
                        value={data.product_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.product_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="productDescription" value="Product Description" />

                    <textarea
                        id="productDescription"
                        type="text"
                        name="product_description"
                        value={data.product_description}
                        className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm  mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleInputChange}
                        required
                    ></textarea>

                    <InputError message={errors.product_description} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="productImage" value="Product Image" />

                    <input
                        id="productImage"
                        type="file"
                        name="product_image"
                        className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleFileChange}
                        required
                    />

                    <InputError message={errors.product_image} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="productCategoyId" value="Product Category" />

                    <select
                        id="productCategoyId"
                        name="product_category_id"
                        className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Select Category</option>
                        {productCategories.productCategories.map(proCat =>(
                            <option value={proCat.id} key={proCat.id}>{proCat.name}</option>
                        ))}

                    </select>

                    <InputError message={errors.product_category_id} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value={`Product Quantity in ${measuringUnit}`} />

                    <TextInput
                        id="productQuantity"
                        name="product_quantity"
                        value={data.product_quantity}
                        className="mt-1 block w-full"
                        autoComplete="product_quantity"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.cost_price} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Cost Price (Unit)" />

                    <TextInput
                        id="costPrice"
                        name="cost_price"
                        value={data.cost_price}
                        className="mt-1 block w-full"
                        autoComplete="cost_price"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.cost_price} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Selling Price (Unit)" />

                    <TextInput
                        id="sellingPrice"
                        name="selling_price"
                        value={data.selling_price}
                        className="mt-1 block w-full"
                        autoComplete="selling_price"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />

                    <InputError message={errors.selling_price} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing} type={`submit`}>
                        Add Product
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
