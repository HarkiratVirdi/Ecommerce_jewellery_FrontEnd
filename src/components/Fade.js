// import { useIntersection } from "react-use";
// import { gsap } from "gsap";

// export default function Fade({ element, children }) {
//   const intersection = useIntersection(element, {
//     root: null,
//     threshold: 0.4,
//     rootMargin: "0px",
//   });

//   console.log(children);

//   const childrens = children.map((child) => {
//     return child.props.children;
//   });

//   console.log(childrens);

//   // const fadeIn = (element) => {
//   //   gsap.to(element, {
//   //     opacity: 1,
//   //     duration: 1,
//   //     y: -60,
//   //     ease: "power4.out",
//   //     stagger: {
//   //       amount: 0.3,
//   //     },
//   //   });
//   // };

//   // const fadeOut = (element) => {
//   //   gsap.to(element, {
//   //     opacity: 0,
//   //     y: -20,
//   //     duration: 1,
//   //     ease: "power4.out",
//   //   });

//   //   intersection && intersection.intersectionRatio < 0.4
//   //     ? fadeOut(children)
//   //     : fadeIn(children);

//   return <div>{children}</div>;
// }
// // }
