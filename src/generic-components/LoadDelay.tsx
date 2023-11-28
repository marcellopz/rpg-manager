import React from "react";

type Props = {
  children: React.ReactNode;
  timeout: number;
  className?: string;
};

export default function LoadDelay({ timeout, children, className }: Props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, timeout);
  }, []);

  if (loading) {
    return <div className={`loader ${className}`}></div>;
  }

  return children as JSX.Element;
}
