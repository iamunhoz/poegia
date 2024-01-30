import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
];

function WordBox ({id, label, bgcolor}: {id: number; label: string; bgcolor: string}) {
    const [{isDragging}, dragRef] = useDrag(() => ({
        type: 'word',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div 
            style={{
                backgroundColor: bgcolor,
                width: 200,
                aspectRatio: 1,
                border: isDragging ? "5px solid pink" : undefined
            }}
            ref={dragRef}
        >
            {label}
        </div>
    )
}

export default function Tests () {
  return (
    <DndProvider backend={HTML5Backend}>
        <div>
          {WordList.map(word => <WordBox id={word.id} label={word.label} bgcolor={word.bgcolor}/>)}
        </div>
    </DndProvider>
  );
};

