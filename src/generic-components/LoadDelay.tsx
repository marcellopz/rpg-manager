import React from "react";

type Props = {
  children: React.ReactNode;
  timeout: number;
  overwrite?: boolean;
};

export default function LoadDelay({ timeout, overwrite, children }: Props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
  }, []);

  if (loading && !overwrite) {
    return <div className="loader"></div>;
  }

  return children as JSX.Element;
}
