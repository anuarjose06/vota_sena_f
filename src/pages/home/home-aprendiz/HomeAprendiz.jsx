import { useState } from 'react';
import WelcomeSection from './componentes/BinevenidaSeccion';
import GoToVoteCard from './componentes/Ve_votar_card';
import VotingProgressCard from './componentes/Progreso_Votacion';
import HeaderTop from './componentes/header';
import Sidebar from './componentes/sidebar';
import './homeAprendiz.css';

export const HomeAprendiz = ({ userName = 'Aprendiz' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [votingNotice, setVotingNotice] = useState('');
  const userStatus = 'Habilitado para votar';
  const votingData = {
    opensAt: "2026-10-15T08:00:00",
    closesAt: "2026-10-30T17:00:00",
    participationPercentage: 70,
    metaPercentage: 80,
    spokespersonSession: "Periodo 2026 – Jornada diurna",
    representativeSession: "Periodo 2026 – Jornada diurna"
  };

  return (
    <>
      <HeaderTop
        userName={userName}
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
      />
      <div className="home-layout">
        <Sidebar menuOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />

        <main className="home-container">
          <WelcomeSection userName={userName} />

          <GoToVoteCard
            opensAt={votingData.opensAt}
            closesAt={votingData.closesAt}
            userStatus={userStatus}
            notice={votingNotice}
            onEnter={() => setVotingNotice('El módulo de votación aún no está conectado.')}
          />

          <VotingProgressCard
            percentage={votingData.participationPercentage}
            meta={votingData.metaPercentage}
            spokespersonSession={votingData.spokespersonSession}
            representativeSession={votingData.representativeSession}
          />
        </main>
      </div>
    </>
  );
};

export default HomeAprendiz;