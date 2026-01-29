import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterCTA } from "@/sections/Footer/components/FooterCTA";
import { FooterImage } from "@/sections/Footer/components/FooterImage";

export const Footer = () => {
  return (
    <footer className="relative text-stone-50 text-[15.1297px] bg-black box-border caret-transparent flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] tracking-[-0.302594px] leading-[21.1816px] overflow-hidden md:text-[15.2873px] md:grid md:flex-row md:grid-cols-[1fr_1px_1fr_1px_1fr] md:grid-rows-[auto_auto] md:tracking-[-0.305746px] md:leading-[21.4022px]">
      <div className="text-[15.1297px] box-border caret-transparent hidden tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] before:accent-auto before:caret-transparent before:text-stone-50 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-light before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.302594px] before:leading-[21.1816px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-switzer before:md:text-[15.2873px] before:md:tracking-[-0.305746px] before:md:leading-[21.4022px] after:accent-auto after:caret-transparent after:clear-both after:text-stone-50 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-light after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.302594px] after:leading-[21.1816px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-switzer after:md:text-[15.2873px] after:md:tracking-[-0.305746px] after:md:leading-[21.4022px]"></div>
      <div className="text-[15.1297px] bg-black box-border caret-transparent flex flex-col auto-cols-[1fr] col-end-3 col-start-1 row-end-2 row-start-1 grid-cols-[1fr_1px_1fr] grid-rows-[auto] tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full mx-auto md:text-[15.2873px] md:grid md:flex-row md:col-end-6 md:grid-cols-[1fr_1px_1fr_1px_1fr] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px]">
        <FooterContent />
        <div className="text-[15.1297px] bg-[linear-gradient(rgb(77,76,74),rgb(0,0,0))] box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-full tracking-[-0.302594px] leading-[21.1816px] mix-blend-difference w-px md:text-[15.2873px] md:col-end-3 md:col-start-2 md:row-end-2 md:row-start-1 md:tracking-[-0.305746px] md:leading-[21.4022px]"></div>
        <FooterNav />
        <div className="text-[15.1297px] bg-[linear-gradient(rgb(77,76,74),rgb(0,0,0))] box-border caret-transparent hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-full tracking-[-0.302594px] leading-[21.1816px] min-h-0 min-w-0 mix-blend-difference w-px md:text-[15.2873px] md:block md:col-end-5 md:col-start-4 md:row-end-2 md:row-start-1 md:tracking-[-0.305746px] md:leading-[21.4022px] md:min-h-[auto] md:min-w-[auto]"></div>
        <FooterCTA />
      </div>
      <FooterImage />
    </footer>
  );
};