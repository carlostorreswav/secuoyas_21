import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactDOM from "react-dom"
import { IoIosClose } from "react-icons/io"
import { Icon } from "@impulse/components"

const ModalMain = styled.div`
  background: #00000077;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 9;
  opacity: ${p => (p.open ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  pointer-events: ${p => (p.open ? "auto" : "none")};
`

const ModalEquis = styled.div`
  position: absolute;
  background-color: #000000bb;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
  transition: background-color 0.3s ease-in-out;
`

const ContentMain = styled.div`
  position: relative;
  z-index: 99;
  width: ${p => (p.fitContent ? "fit-content" : "100%")};
  max-width: 90%;
`

const ContentWrapper = styled.div`
  cursor: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  background-color: ${p => (p.transparent ? "transparent" : "#f6f6f7")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 2px;
`

const Portal = ({ selector, children }) => {
  const [element, setElement] = useState(null)
  useEffect(() => {
    const selectorEl = document.body.querySelector(selector)
    if (!selectorEl) {
      const modalRoot = document.createElement("div")
      modalRoot.setAttribute("id", selector.replace("#", "") || "modal")
      document.body.append(modalRoot)
      setElement(modalRoot)
    } else {
      setElement(selectorEl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!element) return null
  return ReactDOM.createPortal(children, element)
}

const Modal = ({ open, setOpen, transparent, children, fitContent }) => {
  return (
    <Portal selector="#modal">
      <ModalMain open={open}>
        <ContentMain fitContent={fitContent}>
          <ModalEquis>
            <Icon
              src={IoIosClose}
              w="50px"
              h="50px"
              color="white"
              onClick={() => setOpen(false)}
            />
          </ModalEquis>
          <ContentWrapper transparent={transparent}>{children}</ContentWrapper>
        </ContentMain>
      </ModalMain>
    </Portal>
  )
}

export default Modal
