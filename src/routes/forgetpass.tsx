
import React, { useState } from 'react';

const Forgetpassword: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement forget password logic here
        console.log('Email:', email);
    };

    return (
        <div>
            <h1>Forget Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forgetpassword;