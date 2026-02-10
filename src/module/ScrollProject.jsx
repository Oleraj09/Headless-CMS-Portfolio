import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useFetch from '../ContextAPI/FetchApi';

const ScrollProject = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const [data] = useFetch(
    'https://post.olerajhossin.top/wp-json/wp/v2/portfolio?acf_format=standard'
  );
  const portfolioData = Array.isArray(data) ? data : [];

  useEffect(() => {
    if (portfolioData.length === 0 || cardsRef.current.length === 0) return;

    const totalWidth = cardsRef.current.reduce(
      (acc, card) => acc + card.offsetWidth + 16,
      0
    );

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: `-=${totalWidth / 2}`,
        ease: 'none',
        duration: 40,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [portfolioData]);

  const isLoading = portfolioData.length === 0;

  return (
    <div className="overflow-hidden w-full pb-2">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[90vw] sm:w-[600px] md:w-[750px] h-auto mr-4 rounded-[25px] overflow-hidden border border-gray-200 animate-pulse"
            >
              <div className="aspect-[3/2] h-full bg-gray-300"></div>
              <div className="px-3 pt-3 pb-5">
                <div className="h-4 bg-gray-300 w-2/3 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/2 rounded mb-2"></div>
                <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
              </div>
            </div>
          ))
          : [...portfolioData, ...portfolioData].map((card, i) => (
            <div key={i}>
              <div
                ref={addToRefs}
                style={{ marginRight: 30, userSelect: 'none' }}
                className="flex-shrink-0 mr-4 group w-[90vw] sm:w-[600px] md:w-[750px] h-auto"
              >
                <div
                  className="relative w-full aspect-[3/2] bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.acf.project_thumbnail})` }}
                />
                <div className="portfolio-text py-3 px-2 flex flex-wrap items-baseline gap-2">
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222]">
                    {card.title.rendered}
                  </p>
                  <p className="text-md sm:text-lg text-[#787878]">for</p>
                  <p className="text-md sm:text-lg text-[#222]">
                    {card.acf.clients_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollProject;
