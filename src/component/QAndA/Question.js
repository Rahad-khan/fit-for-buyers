import { useState } from "react";
import './Question.css'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="mt-2">
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };

export default Accordion;
  