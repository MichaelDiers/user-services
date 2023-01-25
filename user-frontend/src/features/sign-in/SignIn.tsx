import { Link } from 'react-router-dom';

/**
 * Creates a component for signing in a user.
 * @returns {JSX.Element} A react component.
 */
export function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <ul>
        <li>
          <Link to='/sign-in'>Sign In</Link>
        </li>
        <li>
          <Link to='/sign-up'>Sign Up</Link>
        </li>
        <li>
          <Link to='/email-verification'>Email Verification</Link>
        </li>
      </ul>
    </>
  );
}