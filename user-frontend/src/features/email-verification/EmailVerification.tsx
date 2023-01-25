import { Link } from 'react-router-dom';

/**
 * Creates a component for verifying an email address of a user.
 * @returns {JSX.Element} A react component.
 */
export function EmailVerification() {
  return (
    <>
      <h1>Email Verification</h1>
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