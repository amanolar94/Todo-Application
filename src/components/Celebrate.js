import React, { useCallback } from "react";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { soberUp } from "../features/Todo/TodoListSlice";
import useWindowSize from "../hooks/useWindowSize";

const Celebrate = () => {
  const dispatch = useDispatch();

  const { width, height } = useWindowSize();

  const handleHangover = useCallback(() => {
    dispatch(soberUp());
  }, [dispatch]);

  return (
    <Confetti
      recycle={false}
      numberOfPieces={2000}
      width={width}
      height={height}
      onConfettiComplete={handleHangover}
    />
  );
};

export default Celebrate;
