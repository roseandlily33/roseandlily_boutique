import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { AuthForm, ButtonContiner } from "./sign-in.styles";

const SignInForm = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async(e) => {
            e.preventDefault();
            try{
                const {user} = await signInAuthUserWithEmailAndPassword(email, password);
  
                setFormFields(defaultFormFields);
            } catch(err){
                switch(err.code){
                    case 'auth/wrong-password': alert('Incorrect Password'); break;
                    case 'auth/user-not-found': alert('No user was found'); break;
                    default: console.log(err); break;
                }
            }
    }

    const logGoogleUser = async() => {
        await signInWithGooglePopup();
    }

    return (
        <AuthForm>
           <h2>Have an account?</h2>
           <hr />
           <form onSubmit={handleSubmit}>
             <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
             <FormInput label=""
             type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
            <ButtonContiner>
            <button type="submit">Sign In</button>
            <button type="button" buttontype='google' onClick={logGoogleUser}>Sign In With Google</button>
            </ButtonContiner>
        </form>
        </AuthForm>
      );
}
 
export default SignInForm;