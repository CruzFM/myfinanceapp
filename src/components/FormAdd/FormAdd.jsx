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
                amount:0,
                category:'',
                detail:'',
                date: '',
            }}
            onSubmit={values => console.log(values)}
            >
                { 
                ( {touched, errors} ) =>
                (<Form>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <Field name='amount' type='number' placeholder='Example: 777' />
                        {errors.amount && touched.amount && <div>{errors.amount}</div>}
                    </div>
                </Form>)
                }
            </Formik>

        </div>
    )
}