import React from "react";
import MessageCard from "./MessageCard";

const MessageCards = () => {
  const temp:any[] = [
    // { name: "Curry", time: "12 Dec 2022 10:55am", message: "Hello from Dev" },
    // { name: "Jordan", time: "12 Dec 2022 10:55am", message: "Hello from Dev" },
    // { name: "Kobe", time: "12 Dec 2022 10:55am", message: "Hello from Dev" },
    // { name: "James", time: "12 Dec 2022 10:55am", message: "Hello from Dev" },
    // { name: "KD", time: "12 Dec 2022 10:55am", message: "Hello from Dev" },
  ];

  return (
    <div className="mx-8">
      <h4 className="pt-6 font-semibold text-primary text-lg bg-secondary">
        Your Anonymous Messages
      </h4>
      {temp.length > 0 ? (
        temp.map((item) => (
          <div>
            <MessageCard
              name={item.name}
              time={item.time}
              message={item.message}
            />
          </div>
        ))
      ) : (
        <div className="mt-4">No Message Yet</div>
      )}
    </div>
  );
};

export default MessageCards;
