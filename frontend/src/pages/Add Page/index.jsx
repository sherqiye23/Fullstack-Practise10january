import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'react-bootstrap/esm/Container';
import { useGetImmigrationQuery, usePostImmigrationMutation } from '../../redux/slices/ImmigrationSlice';
import { useNavigate } from "react-router";
import { Helmet } from 'react-helmet';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),

    country: Yup.string().required('Required'),

    description: Yup.string().required('Required'),

    image: Yup.string().required('Required').url()
});

export default function AddPage() {
    let { refetch } = useGetImmigrationQuery()
    const navigate = useNavigate();
    let [postImmigration] = usePostImmigrationMutation()


    return(
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
             <Container className='h-[60vh] my-5'>
                <h1 className='text-center my-3 '>Add Form</h1>
                <Formik
                    initialValues={{
                        image: '',
                        description: "",
                        country: "",
                        title: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        async function post() {
                            await postImmigration(values)
                            refetch()
                            navigate("/")
                        }
                        post()
                        // axios.post("", values).then(() => {
                        //     // burda sehifeye qayidandan sonra elave edilen mehsul ekranda gorunmurdu, window location ile yazdim ki sehifeye refresh atsin ele olanda gorunur
                        //     // swal(`${values.name} əlavə olundu!`, "", "success")
                        //     // navigate("/admin/products")
                        //     window.location = "/admin/products"
                        // })                        
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="my-form flex flex-col max-w-screen-lg mx-auto mb-20 ">
                            <div className="input-group">
                                <Field
                                    placeholder='...add title'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="title"
                                    name="title"
                                    type="text" />
                                <ErrorMessage name="title" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add description'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="description"
                                    name="description"
                                    type="text" />
                                <ErrorMessage name="description" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add country'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="country"
                                    name="country"
                                    type="text" />
                                <ErrorMessage name="country" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add image'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="image"
                                    name="image"
                                    type="text" />
                                <ErrorMessage name="image" component="div" />
                            </div>
                            <button type="submit" className="my-1 max-w-[250px] py-2 px-5 border-2 border-lime-500 text-lime-500 text-lg rounded-5 font-bold ease-in duration-200 transition-all hover:bg-lime-500 hover:text-white" disabled={isSubmitting}>Add Product</button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    )
}