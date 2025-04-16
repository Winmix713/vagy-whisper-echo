
import React from 'react';

import ClubSummary from '../components/dashboard/ClubSummary';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import TeamLineup from '../components/dashboard/TeamLineup';
import StatsDonut from '../components/dashboard/StatsDonut';
import LeagueTable from '../components/dashboard/LeagueTable';
import UpcomingMatch from '../components/dashboard/UpcomingMatch';
import StadiumCard from '../components/dashboard/StadiumCard';

const Dashboard = () => {
  // Sample data for charts
  const performanceData = [
    { name: '08:00', value: 400 },
    { name: '09:00', value: 300 },
    { name: '10:00', value: 500 },
    { name: '11:00', value: 280 },
    { name: '12:00', value: 590 },
    { name: '13:00', value: 350 },
    { name: '14:00', value: 470 },
    { name: '15:00', value: 120 },
    { name: '16:00', value: 400 },
  ];

  const passesData = [
    { name: 'Successful', value: 70, color: '#4ade80' },
    { name: 'Failed', value: 15, color: '#ef4444' },
    { name: 'Assisted', value: 15, color: '#3b82f6' },
  ];

  const leagueTeams = [
    { position: 1, name: 'Manchester City', played: 20, won: 16, drawn: 3, lost: 1, gd: 38, points: 51 },
    { position: 2, name: 'Liverpool', played: 20, won: 15, drawn: 4, lost: 1, gd: 34, points: 49 },
    { position: 3, name: 'Chelsea', played: 21, won: 12, drawn: 7, lost: 2, gd: 31, points: 43 },
    { position: 4, name: 'Arsenal', played: 20, won: 12, drawn: 2, lost: 6, gd: 12, points: 38 },
    { position: 5, name: 'West Ham United', played: 20, won: 11, drawn: 4, lost: 5, gd: 12, points: 37 },
    { position: 6, name: 'Tottenham Hotspur', played: 18, won: 10, drawn: 3, lost: 5, gd: 3, points: 33 },
    { position: 7, name: 'Manchester United', played: 19, won: 9, drawn: 4, lost: 6, gd: 3, points: 31 },
    { position: 8, name: 'Wolverhampton', played: 19, won: 7, drawn: 4, lost: 8, gd: -1, points: 25 },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1">
          <ClubSummary 
            clubName="Borussia Dortmund" 
            location="Dortmund, Germany" 
          />
        </div>
        <div className="col-span-1">
          <PerformanceChart 
            data={performanceData} 
            color="#3b82f6" 
          />
        </div>
        <div className="col-span-1">
          <StadiumCard 
            name="Santiago Bernabéu Stadium" 
            attendance="82,754"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <PerformanceChart 
            data={performanceData} 
            color="#22d3ee" 
          />
        </div>
        <div className="md:col-span-1">
          <StatsDonut 
            data={passesData}
            title="Passes stats" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <TeamLineup players={[]} />
        </div>
        <div className="md:col-span-1">
          <UpcomingMatch 
            homeTeam="Real Madrid" 
            awayTeam="Deportivo la Coruna"
            time="21:30" 
            date="Today" 
            isLive={true}
          />
        </div>
        <div className="md:col-span-1">
          <LeagueTable 
            teams={leagueTeams} 
            title="English Premier League" 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
