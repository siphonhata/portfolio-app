// "use client";

// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { IAnimationVariants } from '@/app/types';

// interface MotionWrapperProps {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
//   duration?: number;
//   animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideRight' | 'slideLeft' | 'scale' | 'none';
//   viewport?: boolean; // Whether to trigger animation when component is in viewport
//   once?: boolean; // Whether to trigger animation only once
//   customVariants?: IAnimationVariants;
//   id?: string;
// }

// const MotionWrapper: React.FC<MotionWrapperProps> = ({
//   children,
//   className = '',
//   delay = 0,
//   duration = 0.5,
//   animation = 'fadeIn',
//   viewport = true,
//   once = true,
//   customVariants,
//   id,
// }) => {
//   // Predefined animation variants
//   const fadeInVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const slideUpVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const slideDownVariants: Variants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const slideRightVariants: Variants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const slideLeftVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const scaleVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration,
//         delay,
//         ease: 'easeOut'
//       }
//     }
//   };

//   // Select animation variant based on prop
//   const getVariants = (): Variants => {
//     if (customVariants) {
//       // Safely cast to unknown first, then to Variants
//       return customVariants as unknown as Variants;
//     }

//     switch (animation) {
//       case 'fadeIn':
//         return fadeInVariants;
//       case 'slideUp':
//         return slideUpVariants;
//       case 'slideDown':
//         return slideDownVariants;
//       case 'slideRight':
//         return slideRightVariants;
//       case 'slideLeft':
//         return slideLeftVariants;
//       case 'scale':
//         return scaleVariants;
//       case 'none':
//         return {};
//       default:
//         return fadeInVariants;
//     }
//   };

//   // If animation is none, just return children without motion wrapper
//   if (animation === 'none') {
//     return (
//       <div id={id || undefined} className={className}>
//         {children}
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       id={id || undefined}
//       className={className}
//       initial="hidden"
//       whileInView={viewport ? "visible" : undefined}
//       animate={!viewport ? "visible" : undefined}
//       viewport={viewport ? { once } : undefined}
//       variants={getVariants()}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default MotionWrapper;