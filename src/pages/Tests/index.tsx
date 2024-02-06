import { useState } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { EDragTypes } from "src/state/poetries"

const WordList = [
  {
    id: 1,
    label: "banana",
    bgcolor: "orange",
  },
  {
    id: 2,
    label: "apple",
    bgcolor: "limegreen",
  },
  {
    id: 3,
    label: "watermelon",
    bgcolor: "green",
  },
]

function WordBox({
  id,
  label,
  bgcolor,
}: {
  id: number
  label: string
  bgcolor: string
}) {
  const [{ isDragging, monitor }, dragRef] = useDrag(() => ({
    type: EDragTypes.word,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      monitor,
    }),
  }))

  console.log({ monitor })
  return (
    <div
      style={{
        backgroundColor: bgcolor,
        width: 200,
        aspectRatio: 1,
        visibility: isDragging ? "hidden" : undefined,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        margin: 5,
      }}
      ref={dragRef}
    >
      {label}
    </div>
  )
}

type TItem = {
  id: number
}

function Board() {
  const [wordsInBoard, setWordsInBoard] = useState<number[]>([])

  const addWordToBoard = (id: number) => {
    if (!wordsInBoard.includes(id)) {
      setWordsInBoard((prev) => [...prev, id])
    }
  }

  const [, /* { isOver } */ dropRef] = useDrop(() => ({
    accept: EDragTypes.word,
    drop: (item: TItem) => {
      addWordToBoard(item.id)
    },
  }))
  return (
    <div
      id="word-board"
      ref={dropRef}
      style={{
        width: 400,
        height: 600,
        border: "2px solid orange",
        margin: 5,
      }}
    >
      {WordList.filter((word) => wordsInBoard.includes(word.id)).map((word) => (
        <WordBox
          id={word.id}
          key={word.id}
          label={word.label}
          bgcolor={word.bgcolor}
        />
      ))}
    </div>
  )
}

export default function Tests() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <div>
          {WordList.map((word) => (
            <WordBox
              id={word.id}
              key={word.id}
              label={word.label}
              bgcolor={word.bgcolor}
            />
          ))}
        </div>
        <Board />
      </div>
    </DndProvider>
  )
}
