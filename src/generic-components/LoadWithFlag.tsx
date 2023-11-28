import React from "react";

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

export default function LoadWithFlag({ loading, children }: Props) {
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px",
          flex: 1,
        }}
      >
        <div className="loader"></div>;
      </div>
    );
  }

  return children as JSX.Element;
}
