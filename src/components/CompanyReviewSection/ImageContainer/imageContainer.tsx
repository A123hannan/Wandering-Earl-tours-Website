import Image from "next/image";

interface Props {
  containerNumber: number;
  imageSources?: { imgSrc1: string; imgSrc2: string; imgSrc3: string };
}

export default function ImageContainer({ containerNumber, imageSources }: Props) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[973px]">
      {containerNumber === 1 && (
        <div className="relative w-full aspect-[620/573] max-w-[973px]">
          {/* c1 - stairs photo */}
          <div className="max-w-full absolute top-0 left-0 w-[51%] h-[71.7%] rounded-[16px] sm:rounded-[24px] overflow-hidden z-10">
            <Image
              src="/images/About/Container/Container1/c1.jpg"
              fill
              alt="c1"
              className="object-cover"
            />
          </div>

          {/* c2 - temple photo */}
          <div className="absolute top-[6.4%] right-[1.6%] w-[47.9%] h-[38.9%] rounded-[16px] sm:rounded-[24px] border-[8px] sm:border-[16px] border-white overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-30">
            <Image
              src="/images/About/Container/Container1/c2.jpg"
              fill
              alt="c2"
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* c3 - car photo */}
          <div className="absolute top-[36.4%] right-0 w-[92.5%] h-[63.5%] rounded-[16px] sm:rounded-[24px] border-t-[10px] sm:border-t-[20px] border-l-[10px] sm:border-l-[20px] border-white overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-20">
            <Image
              src="/images/About/Container/Container1/c3.jpg"
              fill
              alt="c3"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {containerNumber === 2 && (
        <div className="relative w-full aspect-[620/573] max-w-[973px]">
          <div className="absolute top-0 left-0 w-[47.9%] h-[98.2%] rounded-[16px] sm:rounded-[24px] overflow-hidden z-10">
            <Image src={imageSources?.imgSrc1 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c1" className="object-cover" />
          </div>
          <div className="absolute top-0 right-[4.8%] w-[51.1%] h-[38.9%] rounded-[16px] sm:rounded-[24px] border-[8px] sm:border-[16px] border-white overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-30">
            <Image src={imageSources?.imgSrc2 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c2" className="object-cover rounded-[8px]" />
          </div>
          <div className="absolute bottom-0 right-0 w-[47.9%] h-[53.2%] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-20">
            <Image src={imageSources?.imgSrc3 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c3" className="object-cover" />
          </div>
        </div>
      )}

      {containerNumber === 3 && (
        <div className="relative w-full aspect-[620/573] max-w-[973px]">
          <div className="absolute top-0 left-0 w-[99%] h-[55.6%] rounded-[16px] sm:rounded-[24px] overflow-hidden z-10">
            <Image src={imageSources?.imgSrc1 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c1" className="object-cover" />
          </div>
          <div className="absolute top-[27.7%] right-0 w-[47.9%] h-[68.2%] rounded-[16px] sm:rounded-[24px] border-[8px] sm:border-[16px] border-white overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-30">
            <Image src={imageSources?.imgSrc2 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c2" className="object-cover rounded-[8px]" />
          </div>
          <div className="absolute left-0 bottom-[3.5%] w-[47.9%] h-[31.7%] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] z-20">
            <Image src={imageSources?.imgSrc3 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c3" className="object-cover" />
          </div>
        </div>
      )}

      {containerNumber === 4 && (
        <div className="relative w-full aspect-[620/573] max-w-[973]">
          <div className="w-full h-full rounded-[16px] sm:rounded-[24px] border-[8px] sm:border-[16px] border-white overflow-hidden shadow-[-20px_15px_30px_rgba(0,0,0,0.3)] sm:shadow-[-40px_30px_60px_rgba(0,0,0,0.4)] relative z-20">
            <Image src="/images/privateTours/Container1/c1.png" fill alt="c1" className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}