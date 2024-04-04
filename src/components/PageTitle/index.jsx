import { useEffect } from "react";
const RenderPageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default RenderPageTitle;
