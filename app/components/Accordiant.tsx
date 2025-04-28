import React, { createContext, useContext, useState, Children } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type AccordionContextType = {
  isActive: boolean;
  index: number;
  onOpen: (index: number) => void;
  onClose: (index: number) => void;
  trigger: 'click' | 'hover';
};

const AccordionContext = createContext({} as AccordionContextType);

const useAccordion = () => useContext(AccordionContext);

function Accordion({
  children,
  multiple = false,
  hover = false,
  defaultIndex = -1,
}: {
  children: React.ReactNode;
  multiple?: boolean;
  hover?: boolean;
  defaultIndex?: number | number[];
}) {
  const [activeIndex, setActiveIndex] = useState(
    multiple ? (Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex]) : defaultIndex
  );

  const onOpen = (index: number) => {
    setActiveIndex((current) => {
      if (multiple) {
        if (Array.isArray(current)) {
          return current.includes(index) ? current : [...current, index];
        }
        return [index];
      } else {
        return index;
      }
    });
  };

  const onClose = (index: number) => {
    setActiveIndex((current) => {
      if (multiple) {
        if (Array.isArray(current)) {
          return current.filter((i) => i !== index);
        }
        return [];
      } else {
        return current === index ? -1 : current;
      }
    });
  };

  const onChangeIndex = (index: number) => {
    setActiveIndex((current) => {
      if (!multiple) {
        return current === index ? -1 : index;
      }
      if (Array.isArray(current)) {
        return current.includes(index) ? current.filter((i) => i !== index) : [...current, index];
      }
      return [index];
    });
  };

  const trigger: 'click' | 'hover' = hover ? 'hover' : 'click';

  return (
    <>
      {Children.map(children, (child, index) => (
        <AccordionContext.Provider
          key={index}
          value={{
            isActive: multiple
              ? Array.isArray(activeIndex) && activeIndex.includes(index)
              : activeIndex === index,
            index,
            onOpen,
            onClose,
            trigger,
          }}
        >
          {child}
        </AccordionContext.Provider>
      ))}
    </>
  );
}

function AccordionItem({ children }: { children: React.ReactNode }) {
  return <div className="AccordionItem">{children}</div>;
}

function AccordionHeader({ children }: { children: React.ReactNode }) {
  const { isActive, index, onOpen, onClose, trigger } = useAccordion();

  const eventProps =
    trigger === 'hover'
      ? {
          onMouseEnter: () => onOpen(index),
          onMouseLeave: () => onClose(index),
        }
      : {
          onClick: () => (isActive ? onClose(index) : onOpen(index)),
        };

  return (
    <motion.div className={`AccordionHeader ${isActive ? 'active' : ''}`} {...eventProps}>
      {children}
    </motion.div>
  );
}

function AccordionPanel({ children }: { children: React.ReactNode }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

export { Accordion };
