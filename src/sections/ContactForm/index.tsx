import { ContactFormHeader } from "@/sections/ContactForm/components/ContactFormHeader";
import { FormFields } from "@/sections/ContactForm/components/FormFields";

export const ContactForm = () => {
  return (
    <section className="text-black text-[15.1297px] bg-stone-50 box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
      <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full mx-auto py-[60.5188px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px] md:py-[107.011px]">
          <div className="text-[15.1297px] box-border caret-transparent gap-x-[45.3891px] flex flex-col auto-cols-[1fr] grid-cols-[5fr_7fr] grid-rows-[auto] tracking-[-0.302594px] leading-[21.1816px] gap-y-[45.3891px] md:text-[15.2873px] md:gap-x-[11.4655px] md:grid md:flex-row md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[11.4655px]">
            <ContactFormHeader />
            <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] order-last md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:order-none">
              <FormFields />
              <div
                role="region"
                aria-label="Email Form success"
                className="text-[15.1297px] bg-zinc-300 box-border caret-transparent hidden tracking-[-0.302594px] leading-[21.1816px] text-center mt-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:mt-[15.2873px]"
              >
                <div className="text-emerald-700 text-[15.1297px] items-center bg-emerald-50 box-border caret-transparent flex flex-col justify-center tracking-[-0.302594px] leading-[21.1816px] p-[37.8243px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:p-[38.2182px]">
                  <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                    Thank you! Your submission has been received!
                  </div>
                </div>
              </div>
              <div
                role="region"
                aria-label="Email Form failure"
                className="text-[15.1297px] bg-red-100 box-border caret-transparent hidden tracking-[-0.302594px] leading-[21.1816px] mt-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:mt-[15.2873px]"
              >
                <div className="text-red-700 text-[15.1297px] items-center bg-red-50 box-border caret-transparent flex flex-col justify-center tracking-[-0.302594px] leading-[21.1816px] p-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:p-[15.2873px]">
                  <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};