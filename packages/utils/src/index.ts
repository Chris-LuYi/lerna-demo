const fn1 = (props: string): string => {
  console.log("hello" + props);
  return props;
};

export default () => {
  return window;
};

export { fn1 };
