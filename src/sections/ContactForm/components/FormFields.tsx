import { useState } from 'react';

export const FormFields = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', details: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 text-emerald-700 p-10 rounded-3xl border border-emerald-100 text-center animate-in fade-in zoom-in duration-500">
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p>Your enquiry has been received. We'll get back to you shortly.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-[15.1297px] box-border caret-black gap-x-[11.3473px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] h-full tracking-[-0.302594px] leading-[21.1816px] gap-y-[30.2594px] md:text-[15.2873px] md:gap-x-[11.4655px] md:grid md:flex-row md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[45.8619px]"
    >
      <div className="relative text-[15.1297px] box-border tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
        <label className="text-stone-500 text-[13.2385px] font-normal block tracking-[-0.26477px] leading-[18.5339px] mb-[7.56485px] md:text-[13.3764px] md:tracking-[-0.267528px] md:leading-[18.7269px] md:mb-[7.64365px]">
          First name
        </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Emma"
          type="text"
          required
          className="text-[18.9121px] items-center bg-transparent border-b-neutral-400 inline-flex justify-start tracking-[normal] leading-[27.0173px] min-h-[63.5448px] align-middle w-full pl-0 pr-[11.3473px] pt-[7.56485px] pb-0 border-t-0 border-x-0 border-b focus:border-black transition-colors md:text-[32px] md:leading-[60.0572px] md:min-h-[64.2067px] md:pr-[11.4655px] md:pt-[7.64365px]"
        />
      </div>
      <div className="relative text-[15.1297px] box-border tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
        <label className="text-stone-500 text-[13.2385px] font-normal block tracking-[-0.26477px] leading-[18.5339px] mb-[7.56485px] md:text-[13.3764px] md:tracking-[-0.267528px] md:leading-[18.7269px] md:mb-[7.64365px]">
          Last name
        </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Lewis"
          type="text"
          className="text-[18.9121px] items-center bg-transparent border-b-neutral-400 inline-flex justify-start tracking-[normal] leading-[27.0173px] min-h-[63.5448px] align-middle w-full pl-0 pr-[11.3473px] pt-[7.56485px] pb-0 border-t-0 border-x-0 border-b focus:border-black transition-colors md:text-[32px] md:leading-[60.0572px] md:min-h-[64.2067px] md:pr-[11.4655px] md:pt-[7.64365px]"
        />
      </div>
      <div className="relative text-[15.1297px] box-border tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
        <label className="text-stone-500 text-[13.2385px] font-normal block tracking-[-0.26477px] leading-[18.5339px] mb-[7.56485px] md:text-[13.3764px] md:tracking-[-0.267528px] md:leading-[18.7269px] md:mb-[7.64365px]">
          Email Address
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="emma@email.com"
          type="email"
          required
          className="text-[18.9121px] items-center bg-transparent border-b-neutral-400 inline-flex justify-start tracking-[normal] leading-[27.0173px] min-h-[63.5448px] align-middle w-full pl-0 pr-[11.3473px] pt-[7.56485px] pb-0 border-t-0 border-x-0 border-b focus:border-black transition-colors md:text-[32px] md:leading-[60.0572px] md:min-h-[64.2067px] md:pr-[11.4655px] md:pt-[7.64365px]"
        />
      </div>
      <div className="relative text-[15.1297px] box-border tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
        <label className="text-stone-500 text-[13.2385px] font-normal block tracking-[-0.26477px] leading-[18.5339px] mb-[7.56485px] md:text-[13.3764px] md:tracking-[-0.267528px] md:leading-[18.7269px] md:mb-[7.64365px]">
          Phone number
        </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91"
          type="tel"
          className="text-[18.9121px] items-center bg-transparent border-b-neutral-400 inline-flex justify-start tracking-[normal] leading-[27.0173px] min-h-[63.5448px] align-middle w-full pl-0 pr-[11.3473px] pt-[7.56485px] pb-0 border-t-0 border-x-0 border-b focus:border-black transition-colors md:text-[32px] md:leading-[60.0572px] md:min-h-[64.2067px] md:pr-[11.4655px] md:pt-[7.64365px]"
        />
      </div>
      <div className="relative text-[15.1297px] box-border tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:col-span-2">
        <label className="text-stone-500 text-[13.2385px] font-normal block tracking-[-0.26477px] leading-[18.5339px] mb-[7.56485px] md:text-[13.3764px] md:tracking-[-0.267528px] md:leading-[18.7269px] md:mb-[7.64365px]">
          Project details
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="text-[18.9121px] items-center bg-transparent border-b-neutral-400 inline-flex justify-start tracking-[normal] leading-[27.0173px] min-h-[63.5448px] align-middle w-full overflow-clip pl-0 pr-[11.3473px] pt-0 pb-[7.56485px] border-t-0 border-x-0 focus:border-black transition-colors md:text-[32px] md:leading-[60.0572px] md:min-h-[64.2067px] md:pr-[11.4655px] md:pb-[7.64365px]"
        ></textarea>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm md:col-span-2">Something went wrong. Please try again.</p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`relative h-[55px] px-12 bg-black text-white rounded-full uppercase text-sm font-bold tracking-widest overflow-hidden group transition-all transform active:scale-95 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-neutral-800 shadow-xl'}`}
        >
          {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </form>
  );
};