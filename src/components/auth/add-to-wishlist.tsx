import { useRouter } from 'next/router';
import Logo from '@/components/ui/logo';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import type { RegisterUserInput } from '@/types';
import * as yup from 'yup';
import { useRegister } from '@/framework/user';

const registerFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  password: yup.string().required('error-password-required'),
});

function RegisterForm() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  const { mutate, isLoading, formError } = useRegister();

  function onSubmit({ name, email, password }: RegisterUserInput) {
    mutate({
      name,
      email,
      password,
    });
  }

  return (
    <>
      <Form<RegisterUserInput>
        onSubmit={onSubmit}
        validationSchema={registerFormSchema}
        serverError={formError}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label={t('text-name')}
              {...register('name')}
              variant="outline"
              className="mb-5"
              error={t(errors.name?.message!)}
            />
            <Input
              label={t('text-email')}
              {...register('email')}
              type="email"
              variant="outline"
              className="mb-5"
              error={t(errors.email?.message!)}
            />
             <Input
              label={t('text-phone')}
              {...register('email')}
              type="number"
              variant="outline"
              className="mb-5"
              error={t(errors.email?.message!)}
            />
            
            <div className="mt-8">
              <Button
                className="h-12 w-full"
                loading={isLoading}
                disabled={isLoading}
              >
                JOIN DUMA FAMILY NOW
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* End of forgot register form */}

      
    </>
  );
}
export default function RegisterView() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { closeModal } = useModalAction();
  function handleNavigate(path: string) {
    router.push(`/${path}`);
    closeModal();
  }

  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mt-4 mb-7 px-2 text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base">
Join our waitlist today and be the first to access our platform when it launches. As a member of our waitlist,
you'll receive exclusive early access to the latest deals, insider information on upcoming sales, and other exciting perks.
Sign up for our waitlist now and start saving big on the products you love!
      
      </p>
      <RegisterForm />
    </div>
  );
}
