import { useContext } from "react";
import { LogicMemoryGameContext } from "../contexts/LogicMemoryGame";

export const useMemoryGame = () => {
  const context = useContext(LogicMemoryGameContext)
  return context
}