import { useState, useCallback, useMemo } from "react";

const useModal = (isModalOpen = false) => {
  const [modalOpen, setModalOpen] = useState(isModalOpen);
  const toggle = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return useMemo(
    () => ({
      isModalOpen: modalOpen,
      toggle
    }),
    [modalOpen, toggle]
  );
};

export default useModal;
