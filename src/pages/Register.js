import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';


function App() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/user')
		}
	}

	return (
        <Section>
            <div className='container'>
                <div className='box'>
                    <h1>Register</h1>
                    <form onSubmit={registerUser}>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                        />
                        <br />
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
                        <input type="submit" value="Register" />
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
        margin: 200px 550px;
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