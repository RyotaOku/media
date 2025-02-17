type FactorItemProps = {
    number: string;
    title: string;
    subtitle: string;
    accent?: boolean;
};

type FactorsSectionProps = {
    factors: FactorItemProps[];
};

export default function FactorCircles(props: FactorsSectionProps) {
    const { factors } = props;

    return (
        <section className='relative py-16 px-8'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-light ml-auto inline-block border-t-8 border-black text-left pt-4 pl-2 pr-2'>
                四つの要素
            </h2>
            <p className='text-lg md:text-xl text-gray-500 mb-8'>FOUR-FACTORS</p>
            <div className='flex flex-wrap justify-center gap-8 mt-12 md:mt-24'>
                {factors.map((factor, index) => {
                    const backgroundColor = factor.accent ? 'bg-black' : 'bg-transparent';
                    const textColor = factor.accent ? 'text-white' : 'text-black';
                    const borderColor = factor.accent ? '' : 'border border-black';
                    const titleFontSize = factor.number === '02' || factor.number === '03' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl';
                    return (
                        <div key={index} className='flex flex-col items-center'>
                            <p className='mt-2 text-xl md:text-2xl text-orange-500'>{factor.number}</p>
                            <div className={`flex flex-col items-center ${backgroundColor} ${borderColor} rounded-full w-40 h-40 md:w-60 md:h-60 justify-center text-center font-bold`}>
                                <p className={`${titleFontSize} ${textColor}`}>{factor.title}</p>
                                <p className={`text-sm md:text-l ${textColor}`}>{factor.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}