// Code below has many duplicate parts
// export default function CustomHooks() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     //...
//   });
//   //☝️

//   useEffect(() => {
//     //...
//   }, [value, prop]);
//   //             ☝️

//   useEffect(() => {
//     //...
//   }, []);
//   //       ☝️
// };

// Solution
// It can be simplified by using customhook like below
// import { useEffect, useRef } from "react";

// const useEffectAfterMount = (callback, deps) => {
//   const hasMounted = useRef(false);
//   useEffect(() => {
//     if (hasMounted.current) {
//       return callback();
//     }
//     hasMounted.current = true;
//   }, [...deps, callback]);
// };

export default function CustomHooks() {
	return <div style={{ fontSize: '5rem' }}>Please check the code on my GitHub</div>;
}
