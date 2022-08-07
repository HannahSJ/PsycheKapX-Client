import { useState } from 'react'
import styled from 'styled-components';


function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/user'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<Section>
            <div className='container'>
                <div className='box'>
                    <h1>Login</h1>
                    <form onSubmit={loginUser}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                        />
                        <br />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </Section>
        
	)
}

const Section = styled.section`
.container{
    .box {
        background-color: #AFD7F6;
        flex: 2;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
        padding: 10px;
        width: 400px;
        align-content: center;
        justify-content: center;
        text-align: center;
        margin: 250px 550px;
        border-radius: 20px;
        h1{
            font-size: 60px;
        }
        input {
            font-size: 30px;
            margin-top: 20px;
            border-radius: 10px;
            border: 1px solid lightgrey;
        }
    }

}
`;
export default App