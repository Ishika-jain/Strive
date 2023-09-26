import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";
import Leaderboard from "./Leaderboard";

const Course = ({ checkListItems, checkListProgress, data }) => {
  const [items, setItems] = useState([]);
  console.log(data);

  useEffect(() => {
    if (localStorage.getItem(`${checkListItems}`) == null) {
      setItems(data);
    }
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(`${checkListItems}`));
    localStorage.setItem(`${checkListItems}`, JSON.stringify(items));
    if (storedItems && storedItems.length > 0) {
      setItems(storedItems);
      console.log("getting from local storage");
      console.log(storedItems);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(`${checkListItems}`, JSON.stringify(items));
      console.log("set in local storage");
    } catch (error) {
      console.error("Error saving checklist items to local storage:", error);
    }
  }, [items]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const progress =
    (items.filter((item) => item.isChecked).length / items.length) * 100;

  useEffect(() => {
    try {
      localStorage.setItem(`${checkListProgress}`, progress.toFixed(2));
    } catch (error) {
      console.error("Error saving checklist progress to local storage:", error);
    }
  }, [progress]);

  return (
    <div className="px-8 pt-4 rounded-lg bg-bg h-screen">
      <div className="flex ml-8 pt-4 justify-between gap-6">
        <div className="shadow-md p-4 py-8 mt-9 w-9/12 bg-white">
          Progress:{" "}
          {progress.toFixed(2) == 100 ? "Completed" : `${progress.toFixed(2)}%`}
          <div className="h-2 w-full bg-gray-300 rounded-lg mb-4 mt-2 overflow-hidden">
            <div
              style={{ width: `${progress.toFixed(2)}%` }}
              className={`h-full bg-green-400`}
            ></div>
          </div>
          {items.map((item) => (
            <CourseItem
              key={item.id}
              item={item.item}
              isChecked={item.isChecked}
              link={item.link}
              onCheck={() => handleCheck(item.id)}
            />
          ))}
        </div>
        <div className="h-32 w-11/12 flex-5 px-8 pt-1 mt-1 flex  flex-col gap-32">
          <div className="h-full w-11/12 flex-5 text-center justify-center bg-white px-8 pt-8 mt-8 shadow-md">
            <div>
              "Every expert was once a beginner. Don't be afraid to start
              learning {checkListItems}, because with each step forward, you are
              one step closer to becoming an expert."
            </div>
            <div>
              <Leaderboard progress={progress} className="bg-bg mb-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
