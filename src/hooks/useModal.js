import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModal } from "../store/modal/selector";
import { toggleModal } from "../store/modal/actions";

const useModal = () => {
  const modalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleModal());
  }, [dispatch]);

  return useMemo(
    () => ({
      isModalOpen: modalOpen,
      toggle
    }),
    [modalOpen, toggle]
  );
};

export default useModal;
