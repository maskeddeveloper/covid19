import { useState } from 'react';

const useModal = (area) => {
  const [isShowing, setIsShowing] = useState(false);
  const [areaSelected, setAreaSelected] = useState();

  function toggle() {
    setIsShowing(!isShowing);
    console.log(area)
  }

  return {
    isShowing,
    toggle
  }
};

export default useModal;