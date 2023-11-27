import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.jsx";
import { AuthComponent } from "./auth.styles.jsx";
const SignIn = () => {
    return ( 
        <AuthComponent>
            <SignUpForm />
            <SignInForm />
        </AuthComponent>
     );
}
 
export default SignIn;