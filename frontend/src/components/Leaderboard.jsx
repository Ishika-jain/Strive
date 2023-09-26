import React from 'react';

const leaderboardData = [
  { name: 'Vinit', score: 100 },
  { name: 'Ishika', score: 90 },
  { name: 'Janvi', score: 90 },
  { name: 'Prince', score: 86 },
  { name: 'Rahul', score: 63 },
];

const Leaderboard = ({progress}) => {
  return (
    <div className="h-fit w-full max-w-md mx-auto bg-white rounded shadow-md mt-32 text-black">
      <h2 className="text-2xl font-bold p-4 text-black text-center">Leaderboard</h2>
      <ul className="divide-y">
        {leaderboardData.map((player, index) => (
          <li key={index} className="p-4 flex items-center">
            <span className="text-lg font-bold">{index + 1}</span>
            <span className="ml-4">{player.name}</span>
            <span className="ml-auto font-bold">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
