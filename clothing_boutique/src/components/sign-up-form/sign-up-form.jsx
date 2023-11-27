import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { AuthForm } from "./sign-up.styles";

const SignUpForm = () => {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async(e) => {
            e.preventDefault();
            if(password !== confirmPassword){
               alert('Passwords do not match');
               return;
            } 
            try{
               const {user} = await createAuthUserWithEmailAndPassword(email, password);
               
                await createUserDocumentFromAuth(user, {displayName});
                setFormFields(defaultFormFields);

            } catch(err){
                if(err.code === 'auth/email-already-in-use'){
                    alert('Email is already in use')
                }
                alert('Submit was not successful', err)
            }
    }

    return (
        <AuthForm>
            <h2>Don't have an account? </h2>
            <hr />
           <form onSubmit={handleSubmit}>
            <FormInput label=""
             type="text" name="displayName" value={displayName} onChange={handleChange} placeholder="Username" required/>
             <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
             <FormInput label=""
             type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
              <FormInput label=""
             type="password" name="confirmPassword" value={confirmPassword}  placeholder="Confirm Password" onChange={handleChange} required/>
            <button type="submit">Sign Up</button>
        </form>
        </AuthForm>
      );
}
 
export default SignUpForm;