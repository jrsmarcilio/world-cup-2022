import { useState } from "react";
import { useRouter } from 'next/router'

interface LoginProps {
  email: string;
  password: string;
}

const LoginCard: React.FC = () => {
  const defaultValues: LoginProps = { email: '', password: '' };
  const [values, setValues] = useState<LoginProps>(defaultValues);

  const router = useRouter()

  const handleChange =
    (prop: keyof LoginProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('/api/login', { method: 'POST', body: JSON.stringify(values) }).then((res) => res.json()).then((result) => {
      localStorage.setItem('token', result.data.token);
      router.push('/table');
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="bg-white p-5 rounded-md shadow shadow-slate-500">
      <p className="font-bold mb-5">Login</p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            name="userName"
            type="email"
            defaultValue={values.email}
            onChange={handleChange('email')}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            name="password"
            type="password"
            defaultValue={values.password}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            onChange={handleChange('password')}
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button>
      </form>
    </div>
  );
};
export default LoginCard;
