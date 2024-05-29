const fadein = (direction, delay) => {
    return {
       hidden: {
          y:direction ==='up' ? 50 : direction ==='down'? -100 : 0,
          x:direction ==='left' ? -50 : direction ==='right'? 50 : 0,
  
       },
       show: {
           y: 0,
           x: 0,
           opacity: 1,
           transition: {
               type: 'tween',
               duration: 0.5,
               delay: delay,
               ease: [0.25,0.25,0.25,0.75],
           }
       }
  }
}
export { fadein };