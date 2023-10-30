import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Passwords does not match"),
});


export const signInSchema = Yup.object({
    email: Yup.string().email("Enter your email").required(),
    password: Yup.string().required("Password is required")
});


export const forgotPassSchema = Yup.object({
    email: Yup.string().email().required("Email is required")
});

export const changePassSchema = Yup.object({
    otp: Yup.string().required("OTP is required"),
    password: Yup.string().min(6).required("Please enter your password"),
});


export const registrationSchema = Yup.object({
    email_id: Yup.string().email("Enter a valid Email").required("Email is required")
});
