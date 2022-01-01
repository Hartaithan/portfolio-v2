import React from "react";

const useTitle = (title: string) => {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Hartaithan.`;
    return () => {
      document.title = prevTitle;
    };
  });
};

export default useTitle;
