'use client'
import LoginForm from '../../Components/Login/LoginForm';


export default function Home() {

   
    return (
        <div className="container">
            <LoginForm />
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background: linear-gradient(120deg, #2980b9, #6dd5fa, #ffffff);
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Poppins', sans-serif;
                }
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
