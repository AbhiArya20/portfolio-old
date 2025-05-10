import { Player } from '@lottiefiles/react-lottie-player';
import styles from "@/components/contact-form/contact.module.css";
import { useState, type ChangeEvent, type JSX } from 'react';
import toast from 'react-hot-toast';
import { sendMessage } from '@/http';

interface InputDetail {
  placeholder: string;
  type: string;
  props: {
    value: string;
    func: (value: string) => void;
  };
  regex: RegExp;
}

const ContactForm = (): JSX.Element => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [extra, setExtra] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  function validate(regex: RegExp, value: string): boolean {
    return regex.test(value);
  }

  const inputDetails: InputDetail[] = [
    {
      placeholder: 'Full Name',
      type: 'text',
      props: { value: fullName, func: setFullName },
      regex: /^[a-zA-Z\s]+$/
    },
    {
      placeholder: 'Phone Number',
      type: 'number',
      props: { value: phone, func: setPhone },
      regex: /^\+?[1-9]\d{9,13}$/
    },
    {
      placeholder: 'Email',
      type: 'email',
      props: { value: email, func: setEmail },
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    }
  ];

  const isValid = (): boolean => {
    if (!fullName || !validate(/^[a-zA-Z\s]+$/, fullName)) {
      toast.error('Please enter a valid full name.');
      return false;
    }
    if (!phone || !validate(/^\+?[1-9]\d{9,13}$/, phone)) {
      toast.error('Please enter a valid phone number.');
      return false;
    }
    if (!email || !validate(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (!extra) {
      toast.error('Please enter a message.');
      return false;
    }
    return true;
  };

  const sendDataToServer = async (): Promise<void> => {
    if (!isValid()) return;

    setIsPending(true);
    try {
      await sendMessage({ fullName, email, phone, extra });
      toast.success('Thank you! We will contact you soon.');
      setEmail('');
      setExtra('');
      setFullName('');
      setPhone('');
    } catch (error) {
      toast.error('Something went wrong!');
    }
    setIsPending(false);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: 'deepskyblue', padding: '4rem 0', margin: '2rem 0', zIndex: 20 }}>
      <div className={styles.boxArea}>
        <div className={styles.formArea}>
          <div className={styles.messageArea}>
            <h1 className={styles.contact}>Let's talk about everything!</h1>
            <h3>
              Whether you have a question, want to start a project or simply want to connect. Feel free to send me a message in the contact form.
            </h3>
            <Player
              autoplay
              loop
              src="https://lottie.host/fa0ada2d-665e-4fe6-8cdc-8937a021b4e8/8TERrC0Roo.json"
              style={{ width: 'min(500px,100%)', background: 'transparent' }}
            />
          </div>
          <FormGroupComponent
            inputDetails={inputDetails}
            validate={validate}
            extra={extra}
            setExtra={setExtra}
            isPending={isPending}
            sendDataToServer={sendDataToServer}
          />
        </div>
      </div>
    </div>
  );
};

interface FormGroupProps {
  inputDetails: InputDetail[];
  validate: (regex: RegExp, value: string) => boolean;
  extra: string;
  setExtra: (value: string) => void;
  isPending: boolean;
  sendDataToServer: () => void;
}

const FormGroupComponent = ({
  inputDetails,
  validate,
  extra,
  setExtra,
  isPending,
  sendDataToServer,
}: FormGroupProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, func: (val: string) => void) => {
    func(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <h1 className={styles.contact}>Contact</h1>
      {inputDetails.map((input, idx) => (
        <input
          key={idx}
          className={`${styles.input} ${validate(input.regex, input.props.value) ? styles.valid : input.props.value && styles.invalid}`}
          type={input.type}
          placeholder={input.placeholder}
          value={input.props.value}
          onChange={(e) => handleChange(e, input.props.func)}
        />
      ))}
      <textarea
        className={styles.textArea}
        value={extra}
        onChange={(e) => handleChange(e, setExtra)}
        rows={5}
        placeholder="Message Or Comment"
      ></textarea>
      {isPending ? (
        <button className={styles.dismissButton}>Sending...</button>
      ) : (
        <button className={styles.button} onClick={sendDataToServer}>
          Send Message
        </button>
      )}
    </div>
  );
};

export default ContactForm;
