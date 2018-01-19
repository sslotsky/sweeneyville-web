let sequence = () => {
  let n = ref(0);

  () => {
    let cur = n^;
    n := cur + 1;
    cur;
  };
};
