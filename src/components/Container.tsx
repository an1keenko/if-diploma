import { ReactNode } from "react";
import "./Container.css"
export const Container = ({ children }: { children: ReactNode }) => {
    return <div className="container">
        {children}
    </div>
}