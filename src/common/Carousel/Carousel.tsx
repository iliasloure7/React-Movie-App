import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useCarouselContext } from '../../context/CarouselProvider';

type Props = {
  children: React.ReactNode;
};

function Carousel({ children }: Props) {
  const [width, setWidth] = useState(0);
  const { setIsDragging } = useCarouselContext();
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = carousel.current?.scrollWidth;
    const offsetWidth = carousel.current?.offsetWidth;

    if (scrollWidth === undefined || offsetWidth === undefined) return;

    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <motion.div className='cursor-grab  overflow-hidden' ref={carousel}>
      <motion.div
        drag='x'
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        dragConstraints={{ right: 0, left: -width }}
      >
        <motion.div className='flex gap-4'>{children}</motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
