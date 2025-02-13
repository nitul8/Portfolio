import {useState} from "react";
import CProgramming from "./Notes/CProgramming";
import ReactJS from "./Notes/ReactJS/ReactJS";

const Notes = () => {
    const [notes] = useState([
        {id: 1, title: "React.js", component: <ReactJS />},
        {id: 2, title: "C Programming", component: <CProgramming />},
    ]);
    const [selectedNote, setSelectedNote] = useState(notes[0]); // Default to first note

    return (
        <div className="flex h-screen">
            {/* Main Content - Scrollable */}
            <div className="flex-1 p-6 mr-[20%] mt-16 overflow-y-auto h-[calc(100vh-4rem)]">
                {selectedNote ? (
                    selectedNote.component
                ) : (
                    <p className="text-gray-500">Select a note to view</p>
                )}
            </div>
            {/* Sidebar - Fixed Position */}
            <div className="w-1/5 bg-white p-4 shadow-lg fixed right-0 top-16 h-[calc(100vh-4rem)]">
                <h2 className="text-lg font-semibold mb-4">Notes</h2>
                <ul className="mt-4">
                    {notes.map((note) => (
                        <li
                            key={note.id}
                            onClick={() => setSelectedNote(note)}
                            className={`p-2 cursor-pointer rounded ${
                                selectedNote.id === note.id
                                    ? "bg-blue-200"
                                    : "hover:bg-gray-200"
                            }`}
                        >
                            {note.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notes;
