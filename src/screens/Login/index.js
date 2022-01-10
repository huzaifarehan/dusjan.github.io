import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../../components/ButtonComponent'
import InputFeild from '../../components/InputFeild'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../../components/ErrorMessage'
export default function Login() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")

    })
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={({ email, password }) => console.log(email, password)}>
                {({ handleChange, handleSubmit,handleBlur,setFieldTouched, touched, errors }) => (
                    <View style={styles.loginContainer} >
                        <InputFeild
                            autoCapitalize='none'
                            autoCorrect={false}
                            onBlur={()=>setFieldTouched('email')}
                            name='email'
                            id='1'
                            onChangeText={handleChange("email")}
                            placeholder="Enter the Email"
                            />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <InputFeild
                            name='key'
                            onBlur={()=>setFieldTouched('password')}
                            placeholder="Enter the Password"
                            onChangeText={handleChange("password")}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        <ButtonComponent
                            onpress={handleSubmit}
                        >Login</ButtonComponent>
                    </View>
                )}
            </Formik>
        </>
    )
}
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"#000"
    }
})
