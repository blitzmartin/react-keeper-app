export default function Login(props) {
    return (
        <div className='container'>
            <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
        </div>

    )
}