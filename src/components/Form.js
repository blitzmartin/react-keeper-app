export default function Form(props) {
    return (
        <div className='container'>
            <form>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                {props.isRegistered
                ? null
                : <input type='password' placeholder='Confirm password' />
                }
                <button type='submit'>
                    {props.isRegistered
                    ? 'Login'
                    : 'Register'
                    }
                </button>
            </form>
        </div>

    )
}