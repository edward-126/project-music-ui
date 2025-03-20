import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex h-dvh overflow-hidden bg-[url(/assets/images/bg-1.png)] bg-cover bg-center bg-no-repeat sm:bg-none">
      <div className="flex h-full w-full flex-col items-center justify-between backdrop-blur-[80px]">
        <div className="h-5" />

        <div className="flex aspect-square min-w-2xl items-center justify-center overflow-hidden rounded-4xl bg-none bg-cover bg-center sm:bg-[url(/assets/images/bg-1.png)]">
          {/* background overlay */}
          <div className="flex h-full w-full items-center justify-center backdrop-blur-[80px]">
            {/* music player */}
            <div className="flex aspect-square w-xs flex-col items-center justify-between rounded-[3rem] bg-[url(/assets/images/bg-1.png)] bg-cover bg-center p-4 outline-[16px] outline-offset-0 outline-black/40 outline-solid">
              {/* music info */}
              <div className="flex w-full items-center justify-items-start gap-4">
                {/* artist info */}
                <div className="flex items-center gap-2 rounded-full bg-black/10 p-1 pr-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                  <Image
                    src="/assets/images/pfp-1.webp"
                    alt="logo"
                    width={100}
                    height={100}
                    className="pointer-events-none aspect-square h-11 w-auto rounded-full select-none"
                  />

                  <div className="flex flex-col gap-0.5 text-white">
                    <h5 className="text-sm leading-[110%] font-semibold">
                      Runaway
                    </h5>
                    <span className="text-xs leading-[110%] font-light">
                      Aurora
                    </span>
                  </div>
                </div>

                {/* share */}
                <div className="aspect-square rounded-full bg-black/10 p-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                  <Image
                    src="/assets/ui/share.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="pointer-events-none aspect-square size-6 select-none"
                  />
                </div>

                {/* like */}
                <div className="aspect-square rounded-full bg-black/10 p-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                  <Image
                    src="/assets/ui/heart.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="pointer-events-none aspect-square size-6 select-none"
                  />
                </div>
              </div>

              {/* music controls */}
              <div className="flex w-full flex-col justify-center gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex w-full justify-between text-sm font-medium text-white">
                    <span>1:26</span>
                    <span>4:09</span>
                  </div>
                  <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[34%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  {/* previous */}
                  <div className="aspect-square rounded-full bg-black/10 p-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                    <Image
                      src="/assets/ui/prev.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      className="pointer-events-none aspect-square size-6 select-none"
                    />
                  </div>
                  {/* play/pause */}
                  <div className="aspect-square rounded-full bg-black/10 p-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                    <Image
                      src="/assets/ui/play.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      className="pointer-events-none aspect-square size-8 translate-x-0.5 select-none"
                    />
                  </div>
                  {/* next */}
                  <div className="aspect-square rounded-full bg-black/10 p-3 backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[1.02]">
                    <Image
                      src="/assets/ui/next.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      className="pointer-events-none aspect-square size-6 select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex w-full items-center justify-end p-2">
          <Link href="https://thilina.dev/" target="_blank">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="h-5 w-auto opacity-10"
            />
          </Link>
        </footer>
      </div>
    </section>
  );
}
