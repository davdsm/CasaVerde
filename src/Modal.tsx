import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IModal {
  children: ReactNode;
  childrenRef: React.RefObject<HTMLDivElement>;
}

class Modal extends React.Component<IModal> {

    children: ReactNode;
    childrenRef: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
      super(props);
      this.children = props.children;
      this.childrenRef = props.childrenRef;
    }

    componentDidMount(): void {
      const body = document.getElementsByTagName("body")[0];
      body && (body.ariaHidden = "true");

      if (this.childrenRef.current) {
        this.childrenRef.current.style.animationName = "fade-in-left-100";
      }
    }

    componentWillUnmount(): void {
      const body = document.getElementsByTagName("body")[0];
      body && (body.ariaHidden = null);
    }
  
    render() {
      return createPortal(
        this.children,
        document.body
      );
    }
  }

  export default Modal;