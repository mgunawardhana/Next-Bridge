import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
    return (<section className="relative overflow-hidden">
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShape}
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div className="mt-12 text-center md:mt-16">
                <h3 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    Ready to Start Your Project?
                </h3>
                <p className="mb-8 text-lg text-indigo-200/65">
                    Let's discuss how we can bring your vision to life with our proven development process.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                        href="#0"
                    >
      <span className="relative inline-flex items-center">
        Get Started
        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
                    </a>
                    <a
                        className="btn relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                        href="#0"
                    >
                        Schedule Consultation
                    </a>
                </div>
            </div>

        </section>);
}
