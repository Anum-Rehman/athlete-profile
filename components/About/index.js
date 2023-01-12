import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';

const AboutSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
});


const About = ({
    handleNextClick
}) => {

    return (
        <Formik
            initialValues={{
                description: '',
                location: '',
                team: ''
            }}
            validationSchema={BasicInfoSchema}
            onSubmit={handleNextClick}
        >
            {
                ({ values, errors, touched, handleChange, setFieldValue, isValid, submitCount }) => {
                    return (
                        <Form className="profile">
                            <div className="profile__form">
                                <FormTextInput
                                    className={classNames("profile__form-input", { "field-error": errors.name && touched.name })}
                                    name="name"
                                    label="Name"
                                    type='alpha'
                                    value={values.name || ''}
                                    onChange={handleChange}
                                    touched={touched.name}
                                    inlineError={errors.name && touched.name ? errors.name
                                        : errors.message
                                            ? errors.message
                                            : ' '}
                                />
                                <FormSelectInput
                                    className={classNames("profile__form-input", { "field-error": errors.gender && touched.gender })}
                                    name="gender"
                                    label="Gender"
                                    placeholder=""
                                    value={values.gender}
                                    onChange={e => setFieldValue('gender', e)}
                                    options={genders}
                                    touched={touched.gender}
                                    error={errors.gender && touched.gender ? errors.gender : ' '}
                                />
                            </div>
                            <FormDateInput
                                className={classNames("profile__form-input", { "field-error": errors.date_of_birth && touched.date_of_birth })}
                                name="date_of_birth"
                                label="Date of Birth"
                                placeholder="mm/dd/yyyy"
                                value={values.date_of_birth}
                                onChange={e => setFieldValue('date_of_birth', e)}
                                touched={touched.date_of_birth}
                                error={errors.date_of_birth && touched.date_of_birth ? errors.date_of_birth : ' '}
                            />
                            <Button
                                className="partners__footer_submit-button"
                                filled={true}
                                size="large"
                                type="submit"
                                disabled={(submitCount > 0 && !isValid && !errors.message) || 
                                    (Object.keys(touched).length === 0 && touched.constructor === Object)}
                            >
                                Next
                            </Button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default BasicInfo;