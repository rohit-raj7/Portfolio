 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { assets } from './assets/assets';
import clientId from './GoogleOAuthProvider';
import Loading from './Loading';
import { VITE_API_URL } from './assets/assets.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password
      });

      console.log('Login successful:', response.data);
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Sign In Success', credentialResponse);
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-cyan-300 text-center tracking-wide">Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={email}
              required
              disabled={loading}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              required
              disabled={loading}
            />

            {/* Forgot Password Link */}
            <p className="text-sm text-cyan-100 mb-4 text-right">
              <Link to="/forgot-password" className="hover:underline text-cyan-300">
                Forgot Password?
              </Link>
            </p>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition duration-300
                ${loading ? 'cursor-not-allowed opacity-70' : ''}
              `}
            >
              {loading ? (
                <>
                  <Loading />
                 
                </>
              ) : (
                'Login'
              )}
            </button>

            <p className="text-sm text-center text-cyan-200 mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-300 hover:underline">Sign Up</Link>
            </p>
          </form>

          <div className="mt-6">
            <p className="text-center text-gray-100 mb-4">Or login with</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
