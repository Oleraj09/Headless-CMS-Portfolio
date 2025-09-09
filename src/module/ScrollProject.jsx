import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
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

  useEffect(() => {
    const totalWidth = cardsRef.current.reduce(
      (acc, card) => acc + card.offsetWidth + 16,
      0
    );

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: `-=${totalWidth / 2}`,
        ease: 'none',
        duration: 20,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const [data] = useFetch("https://post.olerajhossin.top/wp-json/wp/v2/portfolio?acf_format=standard")
  const portfolioData  = Array.isArray(data) ? data : [];
  return (
    <div className="overflow-hidden w-full pb-10">
      <div ref={containerRef}
        className="flex whitespace-nowrap cursor-grab">
        {[...portfolioData , ...portfolioData ].map((card, i) => (
          <a href="#" key={card.id}>
            <div ref={addToRefs}
              style={{
                marginRight: 16,
                userSelect: 'none',
              }}
              className="flex-shrink-0 mr-4 group w-[90vw] sm:w-[600px] md:w-[750px] h-auto cursor-change">
              {/* Image section */}
              <div className="relative w-full aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${card.acf.project_thumbnail})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#222] h-[50px] w-[50px] flex items-center justify-center rounded-full">
                    <button>
                      <FontAwesomeIcon className="text-white text-[20px]" icon={faArrowUpRightFromSquare} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text section */}
              <div className="portfolio-text py-3 px-2 flex flex-wrap items-baseline gap-2">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222]">{card.title.rendered}</p>
                <p className="text-md sm:text-lg text-[#787878]">for</p>
                <p className="text-md sm:text-lg text-[#222]">{card.acf.clients_name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollProject;
