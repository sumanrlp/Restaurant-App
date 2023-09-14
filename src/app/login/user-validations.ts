import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidations{

    static checkingUniqueness(control: AbstractControl) {

        if(control.value=='rishi@gmail.com'){
            return {notuniqueemail: true}
        }
        return null
    }
    static matchPassword(control: AbstractControl) {

        let password = control.get('pass')
        let confirmPassword = control.get('confirmPassword')

        if(password && confirmPassword && password.value!==confirmPassword.value) {
            return {passNotMatch: true}
        }
        return null;
    }
}