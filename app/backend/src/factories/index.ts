import LeaderboardFactory from './LeaderboardFactory';
import LoginFactory from './LoginFactory';
import MatchsFactory from './MatchsFactory';
import TeamFactory from './TeamFactory';

const startTeamFactory = TeamFactory.make();
const startLoginFactory = LoginFactory.make();
const startMatchsFactory = MatchsFactory.make();
const startLeaderboardFactory = LeaderboardFactory.make();

export {
  startTeamFactory,
  startLoginFactory,
  startMatchsFactory,
  startLeaderboardFactory,
};
