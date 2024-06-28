import React from 'react';
import { useForm } from 'react-hook-form';
import { loginaction } from './action/loginacton';
import { useState } from 'react';

const LoginForm = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    const [errormessege, seterrormessege] = useState(null);
    const onSubmit = async (data) => {
        const res = await loginaction(data);
        seterrormessege(res?.error);

    };

    return (

        <div className="login-box">
            <br />
            {
                errormessege && <div className='error-message'>{errormessege}</div>
            }
            <br />
            <br />

            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-box">
                    <input type="text" name="username" required {...register("username", { required: true })} />
                    <label>Username</label>
                    {
                        errors.username?.type === "required" && <p className='yellow-text'>Username required</p>
                    }



                </div>
                <div className="user-box">
                    <input type="password" name="password" required {...register("password", { required: true })} />
                    <label>Password</label>
                    {errors.password?.type == "required" && <p className='yellow-text' >password required</p>}
                </div>






                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>


            <style jsx>{`
            .yellow-text {
    color: #ffcc00; /* Yellow color */
}

            .yellow-error {
    color: #ffcc00; /* Yellow color */
    background-color: #fff8e1; /* Very light yellow background */
    padding: 8px;
    border: 1px solid #ffeb3b; /* Light yellow border */
    border-radius: 4px;
    font-family: Arial, sans-serif; /* Optional: to set a clean font */
    font-size: 14px; /* Optional: to set a readable font size */
}


            @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.light-animated-error {
    color: #ff6666; /* Light red */
    background-color: #ffe6e6; /* Very light red background */
    padding: 8px;
    animation: fadeIn 1.5s ease-in-out;
    border: 1px solid #ffcccc; /* Light red border */
    border-radius: 4px;
    font-family: Arial, sans-serif; /* Optional: to set a clean font */
    font-size: 14px; /* Optional: to set a readable font size */
}

                @keyframes fadeInOut {
                0%, 100% {
                opacity: 0;
                }
                50% {
                opacity: 1;
                }
                }

                .animated-error {
                color: yellow;
                padding: 2px;
                animation: fadeInOut 3s infinite;
                background-color: rgba(150, 0, 0, 0.1); /* Optional: light red background */
                border: 1px solid red; /* Optional: red border */
                border-radius: 4px; /* Optional: rounded corners */
                }

                @keyframes fadeInOut {
                0%, 100% {
                opacity: 0;
                }
                50% {
                opacity: 1;
                }
                }

                .error-message {
                color: red;
                padding: 2px;
                animation: fadeInOut 3s infinite;
                background-color: rgba(255, 0, 0, 0.1); /* Optional: light red background */
                border: 1px solid red; /* Optional: red border */
                border-radius: 4px; /* Optional: rounded corners */
                }

                .g-white-600 {
                color: white;
                background-color: rgba(255, 255, 255, 0.1); /* Optional: if you want a semi-transparent background */
                padding: 2px; /* Optional: to ensure the padding is consistent */
                }
                .login-box {
                    position: relative;
                    max-width: 400px;
                    width: 100%;
                    padding: 40px;
                    background: rgba(0, 0, 0, 0.8);
                    border-radius: 10px;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
                    text-align: center;
                }
                .login-box h2 {
                    margin: 0 0 30px;
                    padding: 0;
                    color: #fff;
                    text-transform: uppercase;
                }
                .login-box .user-box {
                    position: relative;
                    margin-bottom: 30px;
                }
                .login-box .user-box input {
                    width: 100%;
                    padding: 10px 0;
                    font-size: 16px;
                    color: #fff;
                    margin-bottom: 10px;
                    border: none;
                    border-bottom: 1px solid #fff;
                    outline: none;
                    background: transparent;
                }
                .login-box .user-box label {
                    position: absolute;
                    top: 10px;
                    left: 0;
                    padding: 10px 0;
                    pointer-events: none;
                    font-size: 16px;
                    color: #fff;
                    transition: 0.5s;
                }
                .login-box .user-box input:focus ~ label,
                .login-box .user-box input:valid ~ label {
                    top: -20px;
                    left: 0;
                    color: #03a9f4;
                    font-size: 12px;
                }
                .login-box button {
                    position: relative;
                    display: inline-block;
                    padding: 10px 20px;
                    color: #03a9f4;
                    font-size: 16px;
                    text-transform: uppercase;
                    text-decoration: none;
                    overflow: hidden;
                    margin-top: 40px;
                    letter-spacing: 4px;
                    transition: 0.2s;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .login-box button:hover {
                    background: #03a9f4;
                    color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 5px #03a9f4, 0 0 25px #03a9f4, 0 0 50px #03a9f4, 0 0 100px #03a9f4;
                }
                .login-box button span {
                    position: absolute;
                    display: block;
                }
                .login-box button span:nth-child(1) {
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #03a9f4);
                    animation: btn-anim1 1s linear infinite;
                }
                @keyframes btn-anim1 {
                    0% {
                        left: -100%;
                    }
                    50%, 100% {
                        left: 100%;
                    }
                }
                .login-box button span:nth-child(2) {
                    top: -100%;
                    right: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(180deg, transparent, #03a9f4);
                    animation: btn-anim2 1s linear infinite;
                    animation-delay: 0.25s;
                }
                @keyframes btn-anim2 {
                    0% {
                        top: -100%;
                    }
                    50%, 100% {
                        top: 100%;
                    }
                }
                .login-box button span:nth-child(3) {
                    bottom: 0;
                    right: -100%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(270deg, transparent, #03a9f4);
                    animation: btn-anim3 1s linear infinite;
                    animation-delay: 0.5s;
                }
                @keyframes btn-anim3 {
                    0% {
                        right: -100%;
                    }
                    50%, 100% {
                        right: 100%;
                    }
                }
                .login-box button span:nth-child(4) {
                    bottom: -100%;
                    left: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(360deg, transparent, #03a9f4);
                    animation: btn-anim4 1s linear infinite;
                    animation-delay: 0.75s;
                }
                @keyframes btn-anim4 {
                    0% {
                        bottom: -100%;
                    }
                    50%, 100% {
                        bottom: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginForm;
