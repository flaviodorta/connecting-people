import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);

  inputRef.current?.addEventListener('focus', () => {
    labelRef.current?.classList.add('focused');
  });

  inputRef.current?.addEventListener('blur', () => {
    if (inputRef.current.value) return;

    labelRef.current?.classList.remove('focused');
  });

  return (
    <div className='form-box'>
      <input
        ref={inputRef}
        {...props}
        className='relative w-full p-[2rem_1rem_1rem] bg-transparent outline-none text-white shadow-none text-[2.4rem] md:text-[3.2rem] transition-all duration-500 z-10'
      />
      <label ref={labelRef} htmlFor='name' className='label'>
        {label}
      </label>
      <i />
    </div>
  );
};

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  label: string;
};

const Textarea = ({ label, ...props }: TextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);

  inputRef.current?.addEventListener('focus', () => {
    labelRef.current?.classList.add('focused');
  });

  inputRef.current?.addEventListener('blur', () => {
    if (inputRef.current.value) return;

    labelRef.current?.classList.remove('focused');
  });

  return (
    <div className='form-box'>
      <textarea
        ref={inputRef}
        rows={1}
        id='email'
        className='resize-none overflow-hidden relative w-full p-[2rem_1rem_1rem] bg-transparent outline-none text-white shadow-none text-[2.4rem] md:text-[3.2rem] transition-all duration-500 z-10'
        required
        {...props}
      />
      <label ref={labelRef} htmlFor='name' className='label'>
        {label}
      </label>
      <i />
    </div>
  );
};

const Forms = () => {
  const form = useRef<HTMLFormElement>(null!);

  const { register, handleSubmit } = useForm();

  const sendEmail = () => {
    console.log('send');
    emailjs
      .sendForm(
        'service_f2i7je9', // service id
        'template_p1yjr0k', // email template
        form.current,
        'V1omBOD2KIoUAc6C7' // public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className='flex flex-col gap-[4rem]'
    >
      <Input
        label='Nome'
        type='text'
        id='name'
        className='input'
        {...register('nome', {
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />

      <div className='flex flex-col md:flex-row gap-[4rem]'>
        <Input
          label='Telefone'
          type='text'
          id='phone'
          className='input'
          {...register('phone', {})}
        />

        <Input
          label='Email'
          type='email'
          id='email'
          className='input'
          {...register('email', {
            required: 'Required',
          })}
        />
      </div>

      <Textarea
        {...register('message', { required: true })}
        label='Nos conte mais sobre seu projeto...'
        rows={1}
      />

      <button
        onClick={() => console.log(2)}
        className='btn outline-none  h-fit p-[1rem_2rem] md:p-[2rem_4rem]'
      >
        <input
          type='submit'
          value='Enviar'
          className='cursor-pointer text-[2rem] md:text-[4rem]'
        />
      </button>
    </form>
  );
};

export default Forms;
