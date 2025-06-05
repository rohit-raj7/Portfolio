 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { assets } from './assets/assets.js';
import clientId from './GoogleOAuthProvider.js';
import Loading from './Loading.jsx';
import { VITE_API_URL } from './assets/assets.js';

function Signup() {
  const [step, setStep] = useState('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*\d).{6,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setIsLoading(true);

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters with a digit');
      setIsLoading(false);
      return;
    }

    try {
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,{
        // const result = await axios.post(`${VITE_API_URL}/auth/signup`, {
        name,
        email,
        password,
      });

      if (result.data.success) {
        setStep('otp');
        alert('OTP sent to your email!');
      }
    } catch (err) {
      if (err.response?.data?.message?.includes('already exists')) {
        alert('Email already exists. Redirecting to login.');
        navigate('/login');
      } else {
        alert('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setIsVerifyingOtp(true);

    try {
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/auth/verifyEmail`, { 
        code: otp,
      });

      const { success, message } = result.data;

      if (success) {
        alert('Account verified successfully!');
        navigate('/'); 
      } else {
        alert(message || 'OTP verification failed. Please try again.');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/verify-reset-otp`, { email });
       
    
      if (res.data.success) {
        setStep('otp');
        alert(res.data.message || 'OTP sent to your email.');
      } else {
        alert(res.data.message || 'Failed to send OTP. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send OTP. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Sign In Success', credentialResponse);
    navigate('/'); // Navigate to home on Google login success
  };

  const handleGoogleError = () => {
    console.log('Google Sign In Error');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
        style={{ backgroundImage: `url(${assets.bg_img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse z-0"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse z-0"></div>

        <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-cyan-300 text-center tracking-wide">
            {step === 'register' ? 'Sign Up' : 'Verify OTP'}
          </h2>

          {step === 'register' ? (
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="w-full mb-4 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={name}
                required
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                className="w-full mb-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={email}
                required
              />
              {emailError && <p className="text-red-400 text-sm mb-2">{emailError}</p>}

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                className="w-full mb-4 mt-3 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={password}
                required
              />
              {passwordError && <p className="text-red-400 text-sm mb-4">{passwordError}</p>}

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition duration-300 flex justify-center items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : 'Signup'}
              </button>

              <p className="text-md text-center text-gray-200 mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-cyan-300 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          ) : (
            <form onSubmit={handleOtpVerification}>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                placeholder="Enter OTP"
                className="w-full mb-4 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={otp}
                required
              />
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition duration-300 flex justify-center items-center gap-2"
                disabled={isVerifyingOtp}
              >
                {isVerifyingOtp ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
              <p className="text-md text-center text-gray-200 mt-4">
                Didn't receive code?{' '}
                <button
                  type="button"
                  onClick={sendOtp}
                  className="text-cyan-300 hover:underline"
                >
                  Resend
                </button>
              </p>
            </form>
          )}

          {step === 'register' && (
            <div className="mt-6">
              <p className="text-center text-gray-100 mb-4">Or sign up with</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
              </div>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Signup;
