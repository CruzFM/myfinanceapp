import "./form.style.css";
import { Formik, Form, Field, FormikProps, ErrorMessage  } from "formik";
import * as Yup from 'yup';

export const FormAdd = (props)=> {

    const addSchema = Yup.object().shape({
        amount: Yup.number()
            .required('*Amount required'),
        category: Yup.string()
            .required('*Category required'),
        detail: Yup.string()
            .required('*Detail required'),
        date: Yup.date()
            .required('*Date required'),
    })

    return(
        <div>
            <Formik
            validationSchema={addSchema}
            initialValues={{
                amount:'',
                category:'',
                detail:'',
                date: '',
            }}
            onSubmit={(values) => {
                // console.log(values)
                props.addNew(values)
            }}
            >
                { 
                ( {touched, errors} ) =>
                (<Form className="form">
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <Field name='amount' type='number' placeholder='Example: 777' />
                        {errors.amount && touched.amount && <div>{errors.amount}</div>}
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <Field name='category' as='select'>
                            <option value=''>Categories</option>
                            {props.category.map(category => <option value={category} key={category}>{category}</option>)}
                        </Field>
                        {errors.category && touched.category && <div>{errors.category}</div>}
                    </div>
                    <div>
                        <label htmlFor="detail">Detail</label>
                        <Field name='detail' type='input' placeholder='Your details here' />
                        {errors.detail && touched.detail && <div>{errors.detail}</div>}
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <Field name='date' type='date'  />
                        {errors.date && touched.date && <div>{errors.date}</div>}
                    </div>
                    <button type="submit">Add {props.nameAdd}</button>

                </Form>)
                }
            </Formik>

        </div>
    )
}