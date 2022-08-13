import React, { useEffect, useState } from 'react';
import LayoutAuthentication from '../layout/layoutAuthentication';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../components/common/FormGroup';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import IconEyeToggle from '../components/icons/IconEyeToggle';
import Checkbox from '../components/checkbox/Checkbox';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useToggleValue from '../hooks/useToggleValue';
import Button from '../components/button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db } from '../firebase-app/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { userRole, userStatus } from '../utils/constant';
import { addDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { collection } from '@firebase/firestore';
import { ethers } from 'ethers';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    )
    .min(8, 'Password must be 8 character '),
});
const SignUpPage = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignUp = async (values) => {};
  return (
    <LayoutAuthentication>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-black1 lg:mb-8 dark:text-white">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button
        className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-[#F0F3F6] rounded-xl text-black2 dark:text-white dark:border-[#35373E]"
        // onClick={handleSignInGoogle}
      >
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span>Sign in with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name" className="dark:text-white">
            Full Name *
          </Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email" className="dark:text-white">
            Email *
          </Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" className="dark:text-white">
            Password *
          </Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-black2 dark:text-white bottom-2 relative">
              I agree to the
              <span className="underline text-secondary dark:text-primary">
                {' '}
                Terms of Use
              </span>{' '}
              and have read and understand the
              <span className="underline text-secondary dark:text-primary">
                {' '}
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full bg-primary h-[3.5rem]"
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
